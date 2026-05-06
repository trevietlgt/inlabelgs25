# Carton Label Printer - GitHub Pages v5

Bản này chạy trực tiếp bằng GitHub Pages. File chính phải đặt ở root repository với tên `index.html`.

## Chức năng
- Scan/nhập DO, lấy 6 ký tự đầu làm Store ID.
- Lookup tên cửa hàng từ dữ liệu có sẵn và dữ liệu bổ sung.
- Sinh Carton ID theo ngày: `C + YYMMDD + 0001`, ví dụ `C2605060001`.
- In label 8 x 4 cm.
- Barcode CODE128 dạng SVG, không dùng font barcode.
- Checkbox bật/tắt hiển thị số DO trên tem.
- Thêm/cập nhật cửa hàng mới ngay trên giao diện.

## Lưu ý quan trọng
Bản GitHub Pages chỉ lưu counter và cửa hàng mới bằng `localStorage` trên máy/trình duyệt hiện tại. Nếu nhiều máy cùng in hoặc cần database dùng chung, nên dùng Google Apps Script, Firebase hoặc server/database thật để chống trùng tuyệt đối.

## Khi in
Chọn Scale/Zoom: 100% hoặc Actual size. Không chọn Fit to page nếu máy in làm barcode bị co/vỡ nét.
