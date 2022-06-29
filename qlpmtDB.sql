-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 24, 2022 lúc 11:58 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlpmt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `benhnhan`
--

CREATE TABLE `benhnhan` (
  `MaBenhNhan` int(11) NOT NULL,
  `Ten` varchar(255) NOT NULL,
  `GioiTinh` varchar(255) DEFAULT NULL,
  `NamSinh` date DEFAULT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `TrieuChung` varchar(255) DEFAULT NULL,
  `LoaiBenh` varchar(255) DEFAULT NULL,
  `NgayKham` date NOT NULL,
  `SoDienThoai` varchar(255) NOT NULL,
  `TrangThai` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `benhnhan`
--

INSERT INTO `benhnhan` (`MaBenhNhan`, `Ten`, `GioiTinh`, `NamSinh`, `DiaChi`, `TrieuChung`, `LoaiBenh`, `NgayKham`, `SoDienThoai`, `TrangThai`) VALUES
(1, 'Đỗ Thị Thùy', 'nu', '1899-11-30', 'Ktx Khu B', 'Đau đầu', 'Chóng mặt', '1899-11-30', '0358333777', 'dang kham'),
(2, 'Lê Văn Nguyên', 'nam', '1999-04-30', '366/17 Phan Văn Trị, Gò vấp, Thành phố Hồ Chí Minh', 'đau đầu', '2', '2022-05-18', '0928461388', 'da kham'),
(3, 'Đặng văn long', 'Nam', '1999-12-06', '377/19 phương Tân An, xã Minh Hòa, huyện Đinh Linh, tỉnh Đồng Tháp', 'Đau bụng, mệt mỏi, đau nhức', 'Sốt rét', '2022-05-29', '0343553849', 'da kham'),
(4, 'Đinh Hồng Quân', 'Nam', '1998-12-13', 'Xã Ea Tiêu, Huyện Cư Kuin, Tỉnh Đắk Lắk', 'Chóng mặt, buồn nôn', 'Sốt siêu vi', '2022-05-29', '0376461388', 'da kham'),
(5, 'Dương Văn Minh', 'Nữ', '1978-06-19', 'Đông kinh, bình lao, Đà lạt', 'khó thở, tức ngực', 'Viêm phổi', '2022-05-29', '0376461388', 'da kham'),
(6, 'Trần Quang Khải', 'Nam', '2003-10-14', 'Long bình, An Khê, Hà Tĩnh', 'đau đầu', 'Ốm', '2022-05-29', '0928185736', 'da kham'),
(7, 'Vũ Ngân Hàng', 'Nữ', '2003-12-30', 'Ngân hàng ACB Thủ Đức', 'Buồn nôn', 'Đau bụng', '2022-05-30', '02835516868', 'da kham'),
(8, 'Nguyễn Thị Lý', 'Nữ', '1997-02-17', 'EaKmar CuKuin DakLak', 'Sốt', 'Ốm', '2022-05-31', '0922123123', 'da kham'),
(9, 'Đinh Thị Oanh', 'Nữ', '1996-05-02', 'Cư Kuin, Đắk Lắk', 'Đau bụng', '1', '2022-06-02', '0276461388', 'da kham'),
(10, 'Hồ Sĩ Lợi', 'Nam', '1999-07-02', 'Cư Kuin, Đắk Lắk', 'Đau đầu', 'Ốm', '2022-06-20', '0376461388', 'da kham'),
(11, 'Hỗ Sĩ Đức', 'Nam', '1998-02-02', 'Linh Trung Thủ Đức', 'Đau đầu', 'U não', '2022-06-20', '0928199198', 'da kham'),
(12, 'Lê Định ', 'nu', '1997-06-12', 'ktx Khu B Đông Hòa', 'Ốm', 'Đau đầu', '2022-06-20', '0376123123', 'da kham'),
(13, 'Đỗ Đình Đồng', 'nam', '1977-12-19', 'ktx Đại học Quốc Gia', 'Đau đầu', 'Ốm', '2022-06-22', '0123999888', 'da tinh tien'),
(14, 'Lê Lợi', 'nu', '1977-09-02', 'Ktx Khu B', 'Đau đầu', 'Ốm', '2022-06-22', '0928185736', 'dang kham'),
(15, 'Lê Lai', 'nu', '1999-07-13', 'Việt Nam', 'Đau đầu', '', '2022-06-22', '0276461388', 'da tinh tien'),
(16, 'Vũ Thị Linh', 'nu', '1998-07-13', 'ktx Khu B', 'Đau đầu', 'Đau đầu', '2022-06-22', '0928185736', 'da kham'),
(17, 'Phạm Qốc', 'nu', '1999-09-02', 'ktx', 'Om', 'Đau đầu', '2022-06-22', '0928185736', 'da tinh tien'),
(18, 'Lê Long', 'nu', '1998-04-17', 'Ktx Khu A, Đông Hòa', 'Buồn nôn', 'Đau đầu', '2022-06-22', '0123456789', 'da kham'),
(19, 'Lê lợi', 'nam', '1987-12-19', 'cu kuin', 'Ốm', '', '2022-06-22', '0928185736', 'da kham'),
(20, 'Lê Hợi', 'nu', '1997-01-18', 'ktx khu A', '', '', '2022-06-22', '0928185736', 'dang kham'),
(21, 'Lê Long Lĩng', 'nu', '1998-12-12', 'Ktx Khu B', 'Đau đầu', '', '2022-06-22', '0343553899', 'dang kham'),
(22, 'Lê Văn Nguyên', 'nam', '1999-09-02', 'Ktx Khu B', 'Đau đầu', 'Chóng mặt', '2022-06-22', '0928185736', 'dang kham'),
(23, 'Lê Hồng Minh', 'nam', '1987-05-29', 'Ktx Khu B', 'Đau đầu', 'Viêm gan B', '2022-06-24', '0928177177', 'da tinh tien'),
(24, 'Phạm Tuân', 'nu', '1899-11-30', 'Ktx Khu B', 'Đau đầu', 'Viêm gan', '1899-11-30', '0245111222', 'dang kham'),
(25, 'Lê Hồng Quang', 'nu', '0000-00-00', 'Ktx Khu A', 'Đau đầu', 'Viêm gam', '0000-00-00', '0928177188', 'da kham'),
(26, 'Lê Hồng Minhh', 'nam', '1998-12-12', 'Ktx Khu B', 'Đau đầu', 'Viêm gan', '2022-06-24', '0928177176', 'da tinh tien'),
(27, 'Phạm Hùng', 'nu', '1998-12-12', 'Ktx Khu B', 'Đau đầu', 'Viêm gan', '2022-06-24', '0928177133', 'da tinh tien');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `benhnhanmangbenh`
--

CREATE TABLE `benhnhanmangbenh` (
  `MaBenhNhan` int(11) NOT NULL,
  `MaLoaiBenh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiettoathuoc`
--

CREATE TABLE `chitiettoathuoc` (
  `MaToaThuoc` int(11) NOT NULL,
  `MaThuoc` int(11) NOT NULL,
  `Soluong` int(11) NOT NULL,
  `CachDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitiettoathuoc`
--

INSERT INTO `chitiettoathuoc` (`MaToaThuoc`, `MaThuoc`, `Soluong`, `CachDung`) VALUES
(1, 1, 20, 'uống'),
(1, 3, 20, 'ăn'),
(1, 17, 30, 'uống'),
(2, 1, 20, 'Uống'),
(2, 2, 15, 'Bôi'),
(2, 3, 20, 'Uống'),
(3, 3, 10, 'Pha với nước'),
(3, 5, 14, 'Uống'),
(4, 1, 1, 'uống'),
(5, 1, 1, 'uống'),
(6, 2, 1, 'uống'),
(6, 3, 10, 'uống'),
(6, 10, 5, 'uống'),
(7, 2, 1, 'uống'),
(8, 1, 1, 'Uống'),
(8, 2, 2, 'Uống'),
(8, 3, 3, 'Uống'),
(8, 4, 4, 'Nhai'),
(8, 5, 5, 'Nhai'),
(9, 1, 1, 'Uống'),
(10, 1, 2, 'uống'),
(11, 8, 10, 'Uống'),
(11, 10, 1, 'Bôi'),
(11, 12, 10, 'Uống'),
(12, 9, 1, 'Bôi'),
(12, 10, 10, 'Uống'),
(12, 11, 10, 'Uống'),
(13, 8, 10, 'Uống'),
(13, 12, 1, 'Bôi'),
(14, 10, 15, 'Uống'),
(14, 11, 1, 'Bôi'),
(14, 13, 10, 'Uống'),
(15, 10, 1, 'Bôi'),
(15, 12, 10, 'Uống'),
(16, 11, 10, 'Uống'),
(17, 13, 10, 'Uống'),
(18, 7, 1, 'Uống'),
(19, 3, 10, 'Nhai'),
(20, 3, 10, 'Nhai'),
(21, 8, 10, 'Uống'),
(21, 10, 1, 'Bôi'),
(22, 2, 12, 'Uống'),
(22, 3, 12, 'Uống'),
(22, 6, 1, 'Bôi'),
(23, 5, 10, 'Uống'),
(24, 5, 10, 'Uống'),
(25, 3, 1, 'Bôi'),
(26, 3, 1, 'Bôi'),
(27, 4, 1, 'Bôi'),
(29, 2, 1, 'Bôi'),
(30, 3, 1, 'Uống'),
(31, 5, 1, 'Bôi'),
(32, 3, 1, 'Uống'),
(33, 5, 1, 'Uống'),
(34, 7, 1, 'Bôi'),
(34, 10, 1, 'Uống');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `MaHoaDon` int(11) NOT NULL,
  `MaBenhNhan` int(11) NOT NULL,
  `MaToaThuoc` int(11) NOT NULL,
  `TienKham` int(11) DEFAULT NULL,
  `TienThuoc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`MaHoaDon`, `MaBenhNhan`, `MaToaThuoc`, `TienKham`, `TienThuoc`) VALUES
(1, 1, 1, 40000, 224650),
(2, 1, 1, 40000, 224650),
(3, 2, 1, 40000, 224650),
(4, 3, 1, 40000, 224650),
(5, 4, 1, 40000, 224650),
(6, 5, 5, 40000, 2582),
(7, 5, 5, 40000, 2582),
(8, 6, 6, 40000, 73170),
(9, 9, 10, 40000, 5164),
(10, 13, 11, 40000, 63730),
(11, 13, 11, 40000, 63730),
(12, 14, 12, 4000, 80160),
(13, 15, 13, 4000, 37654),
(14, 15, 13, 4000, 37654),
(15, 15, 13, 4000, 37654),
(16, 16, 14, 40000, 86096),
(17, 14, 15, 40000, 28510),
(18, 14, 15, 40000, 28510),
(19, 17, 17, 40000, 20000),
(20, 13, 18, 3000, 3242),
(21, 15, 13, 3000, 37654),
(22, 23, 21, 3000, 39390),
(23, 23, 32, 10000, 6000),
(24, 23, 32, 10000, 6000),
(25, 26, 33, 10000, 4009),
(26, 27, 34, 10000, 7412);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaibenh`
--

CREATE TABLE `loaibenh` (
  `MaLoaiBenh` int(11) NOT NULL,
  `TenLoaiBenh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaibenh`
--

INSERT INTO `loaibenh` (`MaLoaiBenh`, `TenLoaiBenh`) VALUES
(1, ' Sot ret'),
(2, ' Sot xuat huyet'),
(3, ' Sot xuat huyet'),
(4, ' Tieu chay');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quydinh`
--

CREATE TABLE `quydinh` (
  `BenhNhanToiDa` int(11) NOT NULL,
  `TienKham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `quydinh`
--

INSERT INTO `quydinh` (`BenhNhanToiDa`, `TienKham`) VALUES
(10, 12000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thuoc`
--

CREATE TABLE `thuoc` (
  `MaThuoc` int(11) NOT NULL,
  `TenThuoc` varchar(255) NOT NULL,
  `DonVi` varchar(255) NOT NULL,
  `Gia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thuoc`
--

INSERT INTO `thuoc` (`MaThuoc`, `TenThuoc`, `DonVi`, `Gia`) VALUES
(1, 'eligendi', 'Vien', 2000),
(2, 'tempore', ' Chai', 3500),
(3, 'rerum', 'Vien', 6000),
(4, 'officiis', 'Vien', 5000),
(5, 'quia', ' Chai', 4009),
(6, 'ut', ' Chai', 3000),
(7, 'et', ' Chai', 3242),
(8, 'officia', ' Chai', 3522),
(9, 'accusantium', 'Vien', 3000),
(10, 'blanditiis', ' Chai', 4170),
(11, 'ipsam', 'Vien', 3546),
(12, 'consectetur', 'Vien', 2434),
(13, 'paracetamol', ' Chai', 2000),
(14, 'Thuốc mới', 'Vien', 5000),
(15, 'vitae', ' Chai', 3512),
(16, 'optio', 'Vien', 3308),
(17, 'ut', 'Vien', 2545),
(18, 'ea', ' Chai', 3951),
(19, 'dicta', ' Chai', 3335),
(20, 'officiis', ' Chai', 2447),
(21, 'eum', ' Chai', 3960),
(22, 'asperiores', ' Chai', 4136),
(23, 'dignissimos', ' Chai', 4437),
(24, 'et', ' Chai', 2794),
(25, 'ex', 'Vien', 3815),
(26, 'suscipit', 'Vien', 4970),
(27, 'quia', ' Chai', 2485),
(28, 'omnis', ' Chai', 4542),
(29, 'inventore', ' Chai', 2328),
(30, 'accusantium', 'Vien', 3510),
(31, 'parakama', 'Viên', 10000),
(32, 'Nam thận bảo', 'Viên', 100000),
(33, 'nam', 'viên', 100),
(34, 'Para', 'Viên', 10000),
(35, 'Mana', 'Chai', 1000),
(36, 'Manafds', 'viên', 1000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `toathuoc`
--

CREATE TABLE `toathuoc` (
  `MaToaThuoc` int(11) NOT NULL,
  `MaBenhNhan` int(11) NOT NULL,
  `NgayLapToa` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `toathuoc`
--

INSERT INTO `toathuoc` (`MaToaThuoc`, `MaBenhNhan`, `NgayLapToa`) VALUES
(1, 1, '2022-05-19'),
(2, 2, '2022-05-19'),
(3, 3, '2022-05-29'),
(4, 4, '2022-05-30'),
(5, 5, '2022-05-30'),
(6, 6, '2022-05-30'),
(7, 7, '2022-05-31'),
(8, 8, '2022-05-31'),
(9, 8, '2022-05-31'),
(10, 9, '2022-06-01'),
(11, 13, '2022-06-22'),
(12, 14, '2022-06-22'),
(13, 15, '2022-06-22'),
(14, 16, '2022-06-22'),
(15, 14, '2022-06-22'),
(16, 17, '2022-06-22'),
(17, 17, '2022-06-22'),
(18, 13, '2022-06-22'),
(19, 18, '2022-06-22'),
(20, 19, '2022-06-22'),
(21, 23, '2022-06-22'),
(22, 25, '2022-06-24'),
(23, 23, '2022-06-24'),
(24, 23, '2022-06-24'),
(25, 23, '2022-06-24'),
(26, 23, '2022-06-24'),
(27, 23, '2022-06-24'),
(28, 23, '2022-06-24'),
(29, 23, '2022-06-24'),
(30, 23, '2022-06-24'),
(31, 23, '2022-06-24'),
(32, 23, '2022-06-24'),
(33, 26, '2022-06-24'),
(34, 27, '2022-06-24');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `benhnhan`
--
ALTER TABLE `benhnhan`
  ADD PRIMARY KEY (`MaBenhNhan`);

--
-- Chỉ mục cho bảng `benhnhanmangbenh`
--
ALTER TABLE `benhnhanmangbenh`
  ADD PRIMARY KEY (`MaBenhNhan`,`MaLoaiBenh`),
  ADD KEY `BenhNhanMangBenh_fk1` (`MaLoaiBenh`);

--
-- Chỉ mục cho bảng `chitiettoathuoc`
--
ALTER TABLE `chitiettoathuoc`
  ADD PRIMARY KEY (`MaToaThuoc`,`MaThuoc`),
  ADD KEY `ChiTietToaThuoc_fk1` (`MaThuoc`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`MaHoaDon`),
  ADD KEY `HoaDon_fk0` (`MaBenhNhan`),
  ADD KEY `HoaDon_fk1` (`MaToaThuoc`);

--
-- Chỉ mục cho bảng `loaibenh`
--
ALTER TABLE `loaibenh`
  ADD PRIMARY KEY (`MaLoaiBenh`);

--
-- Chỉ mục cho bảng `thuoc`
--
ALTER TABLE `thuoc`
  ADD PRIMARY KEY (`MaThuoc`);

--
-- Chỉ mục cho bảng `toathuoc`
--
ALTER TABLE `toathuoc`
  ADD PRIMARY KEY (`MaToaThuoc`),
  ADD KEY `ToaThuoc_fk0` (`MaBenhNhan`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `benhnhan`
--
ALTER TABLE `benhnhan`
  MODIFY `MaBenhNhan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `MaHoaDon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `loaibenh`
--
ALTER TABLE `loaibenh`
  MODIFY `MaLoaiBenh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `thuoc`
--
ALTER TABLE `thuoc`
  MODIFY `MaThuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `toathuoc`
--
ALTER TABLE `toathuoc`
  MODIFY `MaToaThuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `benhnhanmangbenh`
--
ALTER TABLE `benhnhanmangbenh`
  ADD CONSTRAINT `BenhNhanMangBenh_fk0` FOREIGN KEY (`MaBenhNhan`) REFERENCES `benhnhan` (`MaBenhNhan`),
  ADD CONSTRAINT `BenhNhanMangBenh_fk1` FOREIGN KEY (`MaLoaiBenh`) REFERENCES `loaibenh` (`MaLoaiBenh`);

--
-- Các ràng buộc cho bảng `chitiettoathuoc`
--
ALTER TABLE `chitiettoathuoc`
  ADD CONSTRAINT `ChiTietToaThuoc_fk0` FOREIGN KEY (`MaToaThuoc`) REFERENCES `toathuoc` (`MaToaThuoc`),
  ADD CONSTRAINT `ChiTietToaThuoc_fk1` FOREIGN KEY (`MaThuoc`) REFERENCES `thuoc` (`MaThuoc`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `HoaDon_fk0` FOREIGN KEY (`MaBenhNhan`) REFERENCES `benhnhan` (`MaBenhNhan`),
  ADD CONSTRAINT `HoaDon_fk1` FOREIGN KEY (`MaToaThuoc`) REFERENCES `toathuoc` (`MaToaThuoc`);

--
-- Các ràng buộc cho bảng `toathuoc`
--
ALTER TABLE `toathuoc`
  ADD CONSTRAINT `ToaThuoc_fk0` FOREIGN KEY (`MaBenhNhan`) REFERENCES `benhnhan` (`MaBenhNhan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
