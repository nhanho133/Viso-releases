## ViSO Alpha 0.2.4 — bản 17/09/2026

**Cài đặt có hình:** https://tryviso.me/download.html — chọn máy, 3 bước, ~1 phút.

### Tải gì
- **Windows 10/11 (64-bit):** `ViSO-0.2.4-win-x64.exe` → mở → *More info → Run anyway* (chưa ký số, hỏi một lần).
- **macOS 13+ Apple Silicon:** `ViSO-0.2.4-mac-arm64.dmg` → kéo vào Applications → **chuột phải ViSO → Open → Open** (lần đầu).
- **Extension Chrome / Brave / Edge:** `ViSO-extension-0.2.4.zip` → giải nén → `chrome://extensions` → *Developer mode* → *Load unpacked*.

### Mới trong bản 17/09
- **Chữ giữ nguyên như bạn gõ/nói**; ngày giờ trong câu tự thành lời nhắc (`mai đi ăn sáng`, `thứ 6 tới…`, `9h sáng mai họp team`, `t2 9h`, `30p nữa`, `cuối tháng`…).
- Thẻ lời nhắc/việc có **dòng giờ** bên dưới (đỏ khi quá hạn); **Đặt giờ** cho thẻ chưa có giờ; **lịch** bên cạnh icon nhóm khi chọn @Lời nhắc/@Việc.
- **Việc tick được** ngay trong extension (vòng tròn → đen), giữ nguyên vị trí; đồng bộ với app.
- Bấm **thông báo nhắc** mở đúng trang đã ghi.
- **Ngôn ngữ 🇻🇳/🇬🇧** trong ⚙ của extension; ô nhập tự cao theo nội dung; menu ··· không bị che; HUD không tự thu khi đang gõ.
- Model tìm kiếm tự tải khi cài, có thanh tiến trình thật trong Agent Hub.

### Dùng thử
- **Ctrl + Space** → nói: *"nhắc tôi 3 giờ chiều gọi anh Đông"*, *"việc cần làm nộp báo cáo"*, *"ghi chú gửi báo giá thứ Sáu"*.
- Ẩn/hiện vạch ViSO: **Ctrl/⌘ + Shift + H**. Trong khung: `@` chọn loại, 📅 chọn ngày, `···` Nhóm/Sửa/Xoá, ⚙ ngôn ngữ và tự hiện.

### Khi gặp lỗi
https://tryviso.me/download.html#help — log: Windows `%APPDATA%\viso\logs\viso-main.log`, macOS `~/Library/Application Support/viso/logs/viso-main.log`.
