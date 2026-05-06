# Carton Label Web App - Google Apps Script

## Files
- Code.gs: backend Apps Script, tạo ID carton không trùng bằng LockService + PropertiesService + PrintLog.
- Index.html: giao diện scan DO, preview, in tem 65mm x 35mm.
- master_store_seed.csv: dữ liệu cửa hàng trích từ Master Store(1).xlsx.

## Cài đặt
1. Mở Apps Script project theo web app của anh.
2. Tạo/cập nhật file Code.gs bằng nội dung trong Code.gs.
3. Tạo file HTML tên `Index` và dán nội dung Index.html.
4. Chạy hàm `setupMasterStore()` một lần để nạp danh sách cửa hàng vào Google Sheet.
5. Deploy web app.

## Logic ID carton
- Store ID = 6 ký tự đầu của DO, viết hoa.
- Carton ID = C + YYMMDD + số thứ tự 5 chữ số, ví dụ C26050600001.
- Mỗi lần bấm In, hệ thống cấp ID mới và ghi vào PrintLog, không tái sử dụng ID cũ.
