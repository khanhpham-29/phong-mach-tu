

Cài đặt:
	Yều cầu: 
		Xem địa chỉ ip của máy chủ bằng lệnh ifconfig trong cmd:
			Sau đó vào file app.js ở phần code:
				app.use(cors({
    						origin: 'http://192.168.0.100',
  						method: 'POST, GET, PATCH, DELETE'
					}))
				Đổi 192.168.0.100 thành địa chỉ ip của máy bạn.

			Sau đó vào thư mục front-end\javascript mở file backendaddress.js: và đổi địa chỉ ip thành địa chỉ ip của máy bạn.

		Cài đặt Nodejs 16.15.1
		Cài đặt xampp: https://www.apachefriends.org/download.html
				-Khởi động xampp: Mở dịch vụ apache và mySql
			       - Sau khi đã cài đặt xampp: vào đường dẫn: http://localhost/phpmyadmin/ để truy cập mySql
				- Tạo DataBase với tên: qlpmt sau đó vào mục nhập và chạy file sql: qlpmtDB.sql.
				Copy toàn bộ file trong thư mục front-end.
				Vào thư mục cài đặt của xampp: thường là: "C:\xampp\htdocs" tạo thư mục "pmt" dán toàn bộ những gì đã được copy vào. 
					
					
		Vào thư mục back-end: mở cmd và nhập lệnh: node app để chạy server.
	Vậy là đã hoàn thành việc cài đặt.
		Bây giờ ta chạy ứng dụng bằng cách: mở browser(google chrome) và vào địa chỉ:
		 	"http://192.168.0.100/pmt/" thay địa chỉ ip trên thành ip máy chủ của bạn.
		Mọi máy tính ở cùng mạng cục bộ đều có thể kết nối.


		
							 
