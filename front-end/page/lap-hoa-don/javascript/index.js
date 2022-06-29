import backendAddress from "../../../javascript/backendaddress.js";
let benhnhan = null;
let toathuoc = null;
let tienthuoc = 0;
let tienkham = 0;
function loadInfo(benhnhanInfo) {
    //Làm trống các ô input
    $('#ten').empty();
    $('#nam-sinh').empty();
    $('#sdt').empty();
    $('#trieu-chung').empty();
    $('#loai-benh').empty();
    $('#gioi-tinh').empty();

    //Đổ dữ liệu vào ô input
    $('#ten').append(benhnhanInfo.Ten);
    $('#nam-sinh').append(benhnhanInfo.NamSinh);
    $('#sdt').append(benhnhanInfo.SoDienThoai);
    $('#trieu-chung').append(benhnhanInfo.TrieuChung);
    $('#loai-benh').append(benhnhanInfo.LoaiBenh);
    $('#gioi-tinh').append(benhnhanInfo.GioiTinh);

    $('#ma-benh-nhan').empty();
    $('#ma-benh-nhan').append(benhnhanInfo.MaBenhNhan);
}

function loadHoaDon() {
    //Lấy mã toa thuốc
    $.ajax({
        url: `${backendAddress}/api/toathuoc/${benhnhan.MaBenhNhan}`,
        type: 'GET',
        success: function (res) {
            if (res.length === 0) {
            } else {
                toathuoc = res[res.length - 1];
                $('#ma-toa-thuoc').empty();
                $('#ma-toa-thuoc').append(toathuoc.MaToaThuoc);

                //Tính tiền thuốc
                $.ajax({
                    url: `${backendAddress}/api/hoadon/tienthuoc/${toathuoc.MaToaThuoc}`,
                    type: 'GET',
                    success: function (res) {
                        tienthuoc = res.tienthuoc[0][0].tienthuoc;
                        console.log(res);
                        $('#tien-thuoc').empty();
                        $('#tien-thuoc').append(tienthuoc);
                    }
                })

                //Tính tiền khám
                $.ajax({
                    url: `${backendAddress}/api/quydinh/`,
                    type: 'GET',
                    success: function (res) {
                        tienkham = res.TienKham;
                        $('#tien-kham').empty();
                        $('#tien-kham').append(tienkham);
                    }
                })
            }

        }
    })
}
//Khi trang tải lần đầu trang sẽ kiểm tra xem trang được bấm từ phím tính tiền ở trang chủ
//hay không nếu có tải bệnh nhân được bấm lên nếu trạng thái bệnh nhân đó là da kham
$(document).ready(function () {
    benhnhan = JSON.parse(localStorage.getItem('benhnhanHoadon'));
    if (benhnhan.isValid) {
        benhnhan.isValid = false;
        localStorage.setItem('benhnhanHoadon', JSON.stringify(benhnhan));

        if (benhnhan.TrangThai !== 'da kham') {
            alert('bệnh nhân ' + benhnhan.TrangThai);
        } else {
            loadInfo(benhnhan);
            loadHoaDon();
        }
    }
})
$('#btn-tim-kiem').on('click', function () {
    const ten = $('#ten-input').val();
    const sdt = $('#sdt-input').val();

    //Lấy thông tin bệnh nhân
    $.ajax({
        url: `${backendAddress}/api/benhnhan/${ten}/${sdt}`,
        type: 'GET',
        success: function (res) {
            if (res.length === 0) {
                alert("Bệnh nhân không tồn tại");
            } else {
                benhnhan = res[0];
                loadInfo(benhnhan);
                loadHoaDon();

            }
        }
    })
})

//Cập nhật hóa đơn lên hệ thống
$('#btn-in-hoa-don').on('click', function () {
    if (benhnhan !== null && benhnhan.TrangThai !== 'da tinh tien' && toathuoc !== null) {
        const hoadon = {
            MaBenhNhan: benhnhan.MaBenhNhan,
            MaToaThuoc: toathuoc.MaToaThuoc,
            TienThuoc: tienthuoc,
            TienKham: tienkham
        }

        const hoadonJsonTopost = JSON.stringify(hoadon);

        $.ajax({
            url: `${backendAddress}/api/hoadon/add`,
            type: 'POST',
            dataType: 'json',
            data: hoadonJsonTopost,
            contentType: 'application/json',
            success: function (res) {
                alert("In hóa đơn thành công");
                //Cập nhật trạng thái bệnh nhân
                benhnhan.TrangThai = 'da tinh tien';
                delete benhnhan.isValid;
                const benhnhanJsonTopost = JSON.stringify(benhnhan);

                $.ajax({
                    url: `${backendAddress}/api/benhnhan/patch/${benhnhan.MaBenhNhan}`,
                    type: 'POST',
                    dataType: 'json',
                    data: benhnhanJsonTopost,
                    contentType: 'application/json',
                })
            }
        })
    }
})
