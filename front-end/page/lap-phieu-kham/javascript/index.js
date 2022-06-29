import backendAddress from "../../../javascript/backendaddress.js";
let isExist = false;
let benhnhan = null;

function getCurrentDay() {
    let now = new Date();
    let month = now.getMonth() + 1;
    if (month < 9) {
        month = '0' + month;
    }
    return now.getFullYear() + '-' + month + '-' + now.getDate();
}

$(document).ready(function () {
    $('#ngay-kham').val(getCurrentDay());
})

$('#btn-check').on('click', function (e) {
    e.preventDefault();
    const ten = $('#ten').val();
    const sdt = $('#sdt').val();
    $.ajax({
        url: `${backendAddress}/api/benhnhan/${ten}/${sdt}`,
        type: 'GET',
        success: function (res) {
            console.log(res);
            if (res === null) {
                $('#label-status').css('display', 'block');
                $('#dia-chi').val("");
                $('#nam-sinh').val("");
                $('#trieu-chung').val("");
                $('#chuan-doan').val("");
                $('#gioi-tinh').val("");
                $('#ngay-kham').val(getCurrentDay());
                isExist = false;
                alert("Bệnh nhân chưa tồn tại");
            } else {
                $('#label-status').css('display', 'none');
                isExist = true;
                benhnhan = res[0];
                console.log(benhnhan);
                $('#dia-chi').val(benhnhan.DiaChi);
                $('#nam-sinh').val(benhnhan.NamSinh);
                $('#ngay-kham').val(benhnhan.NgayKham);
                $('#trieu-chung').val(benhnhan.TrieuChung);
                $('#chuan-doan').val(benhnhan.LoaiBenh);
                $('#gioi-tinh').val(benhnhan.GioiTinh);
                alert("Tải thông tin bệnh nhân thành công!!!");
            }

        }
    })
})

let url = null;
$('#btn-xuat-phieu-kham').on('click', function (e) {
    e.preventDefault();
    benhnhan = {
        ...benhnhan,
        SoDienThoai: $('#sdt').val(),
        Ten: $('#ten').val(),
        DiaChi: $('#dia-chi').val(),
        NamSinh: $('#nam-sinh').val(),
        NgayKham: $('#ngay-kham').val(),
        TrieuChung: $('#trieu-chung').val(),
        LoaiBenh: $('#chuan-doan').val(),
        GioiTinh: $('#gioi-tinh').val(),
        TrangThai: 'chua kham'
    }
    console.log(benhnhan);


    if (isExist === true) {
        url = `${backendAddress}/api/benhnhan/patch/${benhnhan.MaBenhNhan}`;
    } else {
        delete benhnhan.MaBenhNhan;
        url = `${backendAddress}/api/benhnhan/add`;
    }
    const jsonTopost = JSON.stringify(benhnhan);

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: jsonTopost,
        contentType: 'application/json',
        success: function (res) {
            alert("Đã thêm thành công");
            window.location = "../../index.html";
        }
    })

})

