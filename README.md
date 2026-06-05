# 🎯 Discord Quest Tracker

Tự động theo dõi Discord Quests mỗi 5 phút và gửi thông báo webhook **chỉ khi có quest mới**.

## Cấu trúc

```
discord-quest-tracker/
├── .github/
│   └── workflows/
│       └── tracker.yml      ← GitHub Actions (tự chạy mỗi 5 phút)
├── src/
│   └── main.js              ← Script chính
├── state.json               ← Lưu trạng thái (tự quản lý, atomic write)
├── package.json
└── README.md
```

## Cài đặt

### 1. Fork / tạo repo mới, copy code vào

### 2. Thêm Secrets vào repo

Vào **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Mô tả |
|--------|-------|
| `DISCORD_TOKEN` | User token Discord của bạn |
| `MAIN_WEBHOOK` | URL webhook kênh thông báo chính |
| `ERROR_WEBHOOK` | URL webhook kênh báo lỗi (có thể để trống) |
| `PING_ROLE_ID` | ID role muốn ping (có thể để trống) |

### 3. Bật GitHub Actions

Vào tab **Actions** → bật nếu bị tắt → chạy thủ công lần đầu để test.

## Cách hoạt động

```
Mỗi 5 phút
   ↓
Fetch /users/@me/quests từ Discord API
   ↓
So sánh với state.json
   ↓
Có quest mới? → Gửi webhook embed (đẹp, tiếng Việt)
               → Ping role nếu có
               → Lưu ID vào state.json (atomic)
Không có mới? → Kết thúc yên lặng
   ↓
Commit state.json lên repo
```

## state.json

File này do bot tự quản lý. Bạn có thể:
- **Xem**: mở trực tiếp trên GitHub
- **Reset**: xóa hết `sent_ids` và `last_seen` → bot sẽ gửi lại tất cả quest hiện tại
- **Xóa 1 quest cụ thể**: xóa ID khỏi `sent_ids` → bot sẽ gửi lại quest đó

**Cơ chế an toàn:** script ghi vào `state.tmp.json` trước, sau đó rename sang `state.json`.  
Nếu lỗi giữa chừng → `state.json` cũ vẫn còn nguyên, không mất dữ liệu.

## Sự khác biệt so với phiên bản cũ

| | Cũ | Mới |
|--|--|--|
| Source code | Tải từ Gist mỗi lần chạy | Có sẵn trong repo |
| Gửi thông báo | Mỗi lần chạy | Chỉ khi có quest **mới** |
| Lưu state | Git commit toàn bộ | Atomic write (an toàn hơn) |
| Dọn dẹp | Không | Tự xóa quest hết hạn khỏi state |
| Rate limit | Không xử lý | Delay 1.1s giữa các webhook |
| Locale | `vi` | `vi` hoặc `en` |
