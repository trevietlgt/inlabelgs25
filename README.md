# Carton Label Printer - GitHub Pages 8x4 CODE128

Bản này chạy trực tiếp trên GitHub Pages.

## Cập nhật v3
- Kích thước label: 8 x 4 cm.
- Barcode DO và Carton ID dùng CODE128 bằng SVG qua JsBarcode.
- Barcode không dùng font in đậm, không bold, render dạng vector SVG để hạn chế vỡ nét khi in.
- Tăng kích thước barcode và giữ khoảng cách giữa 2 barcode.
- ID store căn trái, in đậm, font nhỏ hơn bản trước.
- Số DO căn phải.
- Tên cửa hàng căn giữa.

## Cách dùng
Upload toàn bộ file trong zip lên root của repository GitHub Pages, đảm bảo có file `index.html` ở ngoài cùng.

## Lưu ý chống trùng
Bản GitHub Pages lưu số chạy bằng localStorage theo từng máy/trình duyệt. Nếu nhiều máy cùng in, nên dùng bản Google Apps Script/database để chống trùng tuyệt đối.
