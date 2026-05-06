# Carton Label Printer - GitHub Pages

## Cách chạy trên GitHub Pages

1. Giải nén file zip này.
2. Upload toàn bộ file trong thư mục lên repository GitHub.
3. Đảm bảo file `index.html` nằm ở thư mục gốc của repository, không nằm trong folder con.
4. Vào Settings > Pages.
5. Chọn Branch: `main`, Folder: `/root`, rồi Save.
6. Mở lại link GitHub Pages sau 1-2 phút.

## Logic carton ID

Carton ID dùng ngày thực tế trên máy đang in theo format:

`C + YYMMDD + số chạy 4 chữ số`

Ví dụ ngày 06/05/2026:

- C2605060001
- C2605060002

Sang ngày 07/05/2026:

- C2605070001

## Lưu ý chống trùng

Bản GitHub Pages là web tĩnh nên counter được lưu trong localStorage của từng máy/trình duyệt. Nếu nhiều máy cùng in, cần dùng bản có backend như Google Apps Script/Sheet hoặc database để chống trùng toàn hệ thống.
