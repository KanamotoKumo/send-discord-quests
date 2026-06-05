import dirTree from 'directory-tree';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const README_PATH = path.join(ROOT, 'README.md');

function treeToText(node, prefix = '') {
  let result = '';
  if (!node.children) return result;

  const filteredChildren = node.children.filter(
    child => child.name !== 'node_modules' && child.name !== '.git'
  );
  filteredChildren.forEach((child, index) => {
    const isLast = index === filteredChildren.length - 1;
    const connector = isLast ? '└── ' : '├── ';

    let comment = '';
    if (child.name === '.github') comment = '      ← GitHub Actions config';
    if (child.name === 'assets') comment = '       ← Assets của hệ thống';
    if (child.name === 'src') comment = '          ← Mã nguồn chính';
    if (child.name === 'main.js') comment = '      ← Script chạy chính';
    if (child.name === 'generate-readme.js') comment = ' ← Script tự động cập nhật cấu trúc';
    if (child.name === 'state.json') comment = '   ← Lưu trạng thái (Atomic write)';

    result += `${prefix}${connector}${child.name}${comment}\n`;
    if (child.children) {
      const nextPrefix = prefix + (isLast ? '    ' : '│   ');
      result += treeToText(child, nextPrefix);
    }
  });
  return result;
}

function updateReadme() {
  const tree = dirTree(ROOT);
  const treeText = `discord-quest/\n${treeToText(tree)}`;

  if (!fs.existsSync(README_PATH)) {
    console.error('❌ Không tìm thấy file README.md');
    return;
  }
  let readmeContent = fs.readFileSync(README_PATH, 'utf8');

  const startTag = '<!-- START_METADATA_DISCORD_QUEST_TREE -->';
  const endTag = '<!-- END_METADATA_DISCORD_QUEST_TREE -->';
  const regex = new RegExp(`${startTag}[\\s\\S]*?${endTag}`);
  const newTreeBlock = `${startTag}\n\`\`\`\n${treeText}\`\`\`\n${endTag}`;

  if (readmeContent.match(regex)) {
    readmeContent = readmeContent.replace(regex, newTreeBlock);
    fs.writeFileSync(README_PATH, readmeContent, 'utf8');
    console.log('✅ Đã tự động cập nhật cấu trúc thư mục vào README.md!');
  } else {
    console.error('❌ Thất bại: Không tìm thấy các thẻ đánh dấu trong README.md');
  }
}

updateReadme();
