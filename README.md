<div align="center">

<!-- ![Discord Quests Tracker Background][background] -->
# <sub><img src="assets/quests.png" height="41"></sub> Discord Quest Tracker <sub><img src="assets/quests.png" height="41"></sub>
Automaticly tracking Discord Quests then send notification to webhook after every 5 minutes only when **it see new quest**.

</div>

## <div align="left"><sub><img src="assets/disclaimer.png" height="30"></sub> Disclaimer </div>
Discord-quest just created for use by yourself and this project using your token discord to working clearly. So, that why you can get ban by discord because of using token user. **Use at your own risk.**

## <div align="left"><sub><img src="assets/projectStructure.png" height="30"></sub> Project Structure </div>
<!-- START_METADATA_DISCORD_QUEST_TREE -->
```
discord-quest/
├── .git/
│   ├── hooks/
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── push-to-checkout.sample
│   │   ├── sendemail-validate.sample
│   │   └── update.sample
│   ├── info/
│   │   └── exclude
│   ├── logs/
│   │   ├── refs/
│   │   │   ├── heads/
│   │   │   │   └── main
│   │   │   └── remotes/
│   │   │       └── origin/
│   │   │           └── main
│   │   └── HEAD
│   ├── objects/
│   │   ├── 0e/
│   │   │   ├── 0eb482fe8e6237485a405428a8c0eeebd3c34d
│   │   │   └── 24cc646314cd57a00c287cbe0981d2d3a544de
│   │   ├── 11/
│   │   │   └── 27d7f10c22f9a53e2311dd6afa7486fe67dc79
│   │   ├── 12/
│   │   │   └── 8874af7a693d29de9ec261646c0564f3f1cc25
│   │   ├── 14/
│   │   │   ├── 4fb2e547b460a27e6b8c3ea02595969a01fc7b
│   │   │   └── b0c57644795ba8dc9d59f141d5c41b5e7c089a
│   │   ├── 15/
│   │   │   └── 95fee505b1cd02d1df8a08deefd1d37be009e6
│   │   ├── 25/
│   │   │   └── f2b5112a1e64ecc9c5e106a3a3ddd4bccd16da
│   │   ├── 27/
│   │   │   └── e5f414583afd137db3658effe0a8e053e65f10
│   │   ├── 29/
│   │   │   └── 951a73c2f23c132ad4a467440304cf86294bd6
│   │   ├── 39/
│   │   │   └── c59762be9e9fff85effad964b320e7f12a2237
│   │   ├── 3a/
│   │   │   └── d9dec6be4bad20f847786dbdd9414ad9704733
│   │   ├── 4b/
│   │   │   └── 501bb4a33d15329685f86732132ddd8318f92a
│   │   ├── 50/
│   │   │   └── 4db963e4c7216904d8d05ff3bf7c17a166d558
│   │   ├── 52/
│   │   │   └── 4879ad6df8fb25a4c0d09e6b800a26bbca59bf
│   │   ├── 5a/
│   │   │   └── 9b39fbbf22c23205e1ee946c2b918dc552f238
│   │   ├── 65/
│   │   │   └── 042188f6eed62b5079088660d73612d83bd97d
│   │   ├── 6c/
│   │   │   └── d6cff6cff54b3b352d347eb1b1f7bfd0f9a453
│   │   ├── 70/
│   │   │   └── 4a2bc4cb7a121840d386168f50c8b84bc4f098
│   │   ├── 79/
│   │   │   └── d44bc299daab1adc53b4c4a43685831db1e436
│   │   ├── 7a/
│   │   │   └── 32224744918f4c0f7fd26ca5ecc6ccd4ea1e1a
│   │   ├── 8c/
│   │   │   └── 1f451cf46dcca0bd5a92bc8370e27d5120c1fb
│   │   ├── 8f/
│   │   │   └── 362496e01909fd1ae50287b837179455afdac2
│   │   ├── 91/
│   │   │   └── de45a02b940c424692f2c32a22942da59d61a9
│   │   ├── 93/
│   │   │   └── f2bce2a70d7654b655a195b0596eea7540ff3d
│   │   ├── 94/
│   │   │   └── acb28cdeed62b39d0bd4387b5f300e1aeeab2f
│   │   ├── a6/
│   │   │   └── b859d3af26107be28a234c3c1c0cf2e88af6f4
│   │   ├── b9/
│   │   │   └── 34ee5db14a2f72ffbedf6512d31ff5837716f8
│   │   ├── cc/
│   │   │   └── b49db9a8b2baf6ddc9947ab3a108c7af4751ec
│   │   ├── f2/
│   │   │   └── 88702d2fa16d3cdf0035b15a9fcbc552cd88e7
│   │   ├── info/
│   │   └── pack/
│   ├── refs/
│   │   ├── heads/
│   │   │   └── main
│   │   ├── remotes/
│   │   │   └── origin/
│   │   │       └── main
│   │   └── tags/
│   ├── FETCH_HEAD
│   ├── HEAD
│   ├── config
│   ├── config.worktree
│   ├── description
│   ├── index
│   └── shallow
├── .github/                                             ← GitHub Actions config
│   └── workflows/
│       ├── questsTracker.yml
│       └── updateStructure.yml
├── assets/                                              ← Assets of system
│   ├── acknowledgements.png
│   ├── disclaimer.png
│   ├── discord.png
│   ├── discordQuests.png
│   ├── empty.png
│   ├── file.png
│   ├── install.webp
│   ├── orbs.png
│   ├── projectStructure.png
│   ├── quests.png
│   └── settings.webp
├── node_modules/
│   ├── .bin/
│   │   └── directory-tree
│   ├── ansi-styles/
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── array-back/
│   │   ├── dist/
│   │   │   └── index.js
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.mjs
│   │   └── package.json
│   ├── chalk/
│   │   ├── types/
│   │   │   └── index.d.ts
│   │   ├── index.js
│   │   ├── index.js.flow
│   │   ├── license
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── templates.js
│   ├── color-convert/
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── conversions.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── route.js
│   ├── color-name/
│   │   ├── .eslintrc.json
│   │   ├── .npmignore
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── command-line-args/
│   │   ├── dist/
│   │   │   ├── index.js
│   │   │   └── index.mjs
│   │   ├── lib/
│   │   │   ├── argv-parser.mjs
│   │   │   ├── argv-tools.mjs
│   │   │   ├── option-definition.mjs
│   │   │   ├── option-definitions.mjs
│   │   │   ├── option-flag.mjs
│   │   │   ├── option.mjs
│   │   │   ├── output-grouped.mjs
│   │   │   └── output.mjs
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.mjs
│   │   └── package.json
│   ├── command-line-usage/
│   │   ├── lib/
│   │   │   ├── section/
│   │   │   │   ├── content.js
│   │   │   │   └── option-list.js
│   │   │   ├── chalk-format.js
│   │   │   └── section.js
│   │   ├── node_modules/
│   │   │   ├── array-back/
│   │   │   │   ├── dist/
│   │   │   │   │   └── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── README.hbs
│   │   │   │   ├── README.md
│   │   │   │   ├── index.mjs
│   │   │   │   └── package.json
│   │   │   └── typical/
│   │   │       ├── dist/
│   │   │       │   └── index.js
│   │   │       ├── LICENSE
│   │   │       ├── README.hbs
│   │   │       ├── README.md
│   │   │       ├── index.mjs
│   │   │       └── package.json
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── deep-extend/
│   │   ├── lib/
│   │   │   └── deep-extend.js
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── directory-tree/
│   │   ├── .github/                                     ← GitHub Actions config
│   │   │   └── workflows/
│   │   │       └── node.js.yml
│   │   ├── bin/
│   │   │   └── index.js
│   │   ├── lib/
│   │   │   └── directory-tree.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dark.svg
│   │   ├── index.d.ts
│   │   └── package.json
│   ├── escape-string-regexp/
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── find-replace/
│   │   ├── dist/
│   │   │   ├── index.js
│   │   │   └── index.mjs
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.mjs
│   │   └── package.json
│   ├── has-flag/
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── lodash.camelcase/
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── reduce-flatten/
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── supports-color/
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── table-layout/
│   │   ├── lib/
│   │   │   ├── ansi.js
│   │   │   ├── cell.js
│   │   │   ├── column.js
│   │   │   ├── columns.js
│   │   │   ├── padding.js
│   │   │   └── rows.js
│   │   ├── node_modules/
│   │   │   ├── array-back/
│   │   │   │   ├── dist/
│   │   │   │   │   └── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── README.hbs
│   │   │   │   ├── README.md
│   │   │   │   ├── index.mjs
│   │   │   │   └── package.json
│   │   │   └── typical/
│   │   │       ├── dist/
│   │   │       │   └── index.js
│   │   │       ├── LICENSE
│   │   │       ├── README.hbs
│   │   │       ├── README.md
│   │   │       ├── index.mjs
│   │   │       └── package.json
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── typical/
│   │   ├── dist/
│   │   │   └── index.js
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.mjs
│   │   └── package.json
│   ├── wordwrapjs/
│   │   ├── node_modules/
│   │   │   └── typical/
│   │   │       ├── dist/
│   │   │       │   └── index.js
│   │   │       ├── LICENSE
│   │   │       ├── README.hbs
│   │   │       ├── README.md
│   │   │       ├── index.mjs
│   │   │       └── package.json
│   │   ├── LICENSE
│   │   ├── README.hbs
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   └── .package-lock.json
├── src/                                                 ← Main
│   ├── languages/                                       ← Language config
│   │   ├── en-US.json
│   │   └── vi-VN.json
│   ├── generateReadme.js
│   ├── main.js                                          ← Main script
│   └── readmeMap.json
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
└── state.json                                           ← Atomic write
```
<!-- END_METADATA_DISCORD_QUEST_TREE -->

## <div align="left"><sub><img src="assets/install.webp" height="30"></sub> Installation & Setup </div>
### 1. Fork and config
> **Settings** → **Secrets and variables** → **Actions**

#### 1.1. In tab **Secrets** (Click "**New repository secret**"):
| Secret | Descriptions |
|--------|--------------|
| `DISCORD_TOKEN` | User token Discord |
| `MAIN_WEBHOOK` | URL webhook main notification |
| `ERROR_WEBHOOK` | URL webhook main errors log (it can be empty if you want) |

#### 1.2. In tab **Variables** (Click "**New repository variable**"):
| Variable | Decriptions | value examples |
|----------|-------|---------------|
| `LOCALE` | Language display titles/information of Quest | `vi-VN`, `en-US`, `zh-CN` |
| `PING_ROLE_ID` | ID role Discord you want to ping when it find a quest | fill with ID Role (or empty) |

### 2. Turn on GitHub Actions
> **Actions** → turn on (only if it's off) → test.

## <div align="left"><sub><img src="assets/settings.webp" height="30"></sub> How It Works? </div>
```
Every 5 minutes
      ↓
Fetch /quests/@me from Discord API
      ↓
Compare with state.json
      ↓
When it has found new quest → Send embed using webhook
                            → Ping role (if so)
                            → Save ID in state.json (atomic)
When it hasn't found → End
      ↓
Commit state.json to repository
```

## <div align="left"><sub><img src="assets/file.png" height="30"></sub> File state.json </div>
Those files will be manage by [bot]. You can:
- **Read**: using GitHub
- **Reset**: delete all `sent_ids` → bot resend all present quest
- **Delete 1 quest**: delete ID out of `sent_ids` → bot resend that quest

**Safety mode:** script write to `state.tmp.json` first, then rename to `state.json`. If errors when it's still running → `state.json` still here, datas still fine.

## <div align="left"><sub><img src="assets/acknowledgements.png" height="30"></sub> Acknowledgements </div>
Thank for this source give our a idea to create this repository:
- [cc-plugins](https://github.com/BachLe2000/cc-plugins/tree/master)

#### <footer><div align="center">© 2026 Mc's Team. All rights reserved.</div></footer>
[background]: assets/discordQuests.png
