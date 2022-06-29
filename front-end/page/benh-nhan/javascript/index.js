import backendAddress from "../../../javascript/backendaddress.js";

let id = 0;
let listXoaBtn = [];
let thuocs = [];
let thuocsDataList = '';
function getCurrenDay() {
    let now = new Date();
    let month = now.getMonth() + 1;
    if (month < 9) {
        month = '0' + month;
    }
    return now.getFullYear() + '-' + month + '-' + now.getDate();
}

//Tải danh sách thuốc.
$(document).ready(function () {
    $.ajax({
        url: `${backendAddress}/api/thuoc`,
        type: 'GET',
        success: function (res) {
            if (res.length === 0) {
                alert('Lỗi khi tải toa thuốc');
            } else {
                thuocs = res;
                let option = '';
                thuocs.forEach(function (element) {
                    option += `<option value="${element.TenThuoc}">`
                })
                thuocsDataList = `<datalist id="thuocs">
                                  ${option}
                                  </datalist>`
            }
        }
    })
})

$('#btn-them-thuoc').on('click', function () {
    id += 1;
    listXoaBtn.unshift(`#btn-${id}`);
    console.log(listXoaBtn);

    const toathuoc = `
    <div class="thuoc" id="${id}">
            <div  class="cell">
                <label class="label-thuoc" for="ten-thuoc-${id}">Tên thuốc:</label>
                <input class="input-thuoc" type="search" list = "thuocs" id="ten-thuoc-${id}">
                ${thuocsDataList}    
            </div>
            <div  class="cell">
                <label class="label-thuoc" for="so-luong-${id}">Số lượng:</label>
                <input class="input-thuoc" type="text" id="so-luong-${id}">   
            </div>
            <div  class="cell">
                <label class="label-thuoc" for="cach-dung-${id}">Cách dùng:</label>
                <input class="input-thuoc" type="text" id="cach-dung-${id}">                
            </div>

            <div  class="cell">
                <button type="button" class="btn-content" class="btn-xoa-thuoc" id= "btn-${id}">Xóa</button>              
            </div>
        </div>`
    $('#toa-thuoc').append(toathuoc);

    listXoaBtn.forEach(btn => {
        $(btn).on('click', function () {
            $(`#${btn[btn.length - 1]}`).css('display', 'none');
            listXoaBtn.splice(listXoaBtn.indexOf(btn), 1);
        })
    });
})


function updateBenhnhan(benhnhanObj) {

    let jsonTopost = JSON.stringify(benhnhanObj);
    console.log(benhnhanObj);

    $.ajax({
        url: `${backendAddress}/api/benhnhan/patch/${benhnhanObj.MaBenhNhan}`,
        type: 'POST',
        dataType: 'json',
        data: jsonTopost,
        contentType: 'application/json',
    })
}

function loadInfo(benhnhanObj) {
    $(`#ten`).val(benhnhanObj.Ten);
    $(`#trieu-chung`).val(benhnhanObj.TrieuChung);
    $(`#nam-sinh`).val(benhnhanObj.NamSinh);
    $(`#sdt`).val(benhnhanObj.SoDienThoai);
    $(`#loai-benh`).val(benhnhanObj.LoaiBenh);
    $(`#gioi-tinh`).val(benhnhanObj.GioiTinh);
}

let benhnhan = null;
$('thong-tin-benh-nhan').ready(function () {
    benhnhan = JSON.parse(localStorage.getItem('benhnhan'));
    if (benhnhan !== null && benhnhan.isValid) {
        loadInfo(benhnhan);
        benhnhan.isValid = false;
        benhnhan.TrangThai = "dang kham";
        localStorage.setItem('benhnhan', JSON.stringify(benhnhan));
        delete benhnhan.isValid;
        updateBenhnhan(benhnhan);

    }
    else {
        $.ajax({
            url: `${backendAddress}/api/benhnhan/get/status/chua kham/${getCurrenDay()}`,
            type: 'GET',
            success: function (res) {
                if (res === null || res.length === 0) {
                    alert('Không có bệnh nhân nào đợi');
                } else {
                    benhnhan = res[0];
                    console.log(benhnhan);
                    benhnhan.TrangThai = "dang kham";
                    updateBenhnhan(benhnhan);
                    loadInfo(benhnhan);
                }
            }
        })
    }
})

$('#benh-nhan-tiep-theo').on('click', function () {
    $.ajax({
        url: `${backendAddress}/api/benhnhan/get/status/chua kham/${getCurrenDay()}`,
        type: 'GET',
        success: function (res) {
            if (res === null || res.length === 0) {
                alert('Không có bệnh nhân nào đang đợi.');
            } else {
                benhnhan = res[0];
                benhnhan.TrangThai = "dang kham";
                updateBenhnhan(benhnhan);
                loadInfo(benhnhan);
            }
        }
    })
})

$('#btn-kham-xong').on('click', function () {
    if (benhnhan !== null) {
        benhnhan.TrangThai = "da kham";

        benhnhan = {
            ...benhnhan,
            NgayKham: getCurrenDay(),
            Ten: $('#ten').val(),
            NamSinh: $('#nam-sinh').val(),
            SoDienThoai: $('#sdt').val(),
            TrieuChung: $('#trieu-chung').val(),
            LoaiBenh: $('#loai-benh').val(),
            GioiTinh: $('#gioi-tinh').val()
        }

        delete benhnhan.isValid;

        const jsonTopost = JSON.stringify(benhnhan);
        console.log(benhnhan);


        $.ajax({
            url: `${backendAddress}/api/benhnhan/patch/${benhnhan.MaBenhNhan}`,
            type: 'POST',
            dataType: 'json',
            data: jsonTopost,
            contentType: 'application/json',
            success: function (res) {
                alert("Đã khám xong");
            }
        })
    }
})

$('#btn-ke-don').on('click', function () {
    //Tạo toa thuốc
    if (benhnhan !== null) {
        const toDay = new Date();
        const toathuoc = {
            MaBenhNhan: benhnhan.MaBenhNhan,
            NgayLapToa: toDay
        }
        let jsonTopost = JSON.stringify(toathuoc);
        $.ajax({
            url: `${backendAddress}/api/toathuoc/add`,
            type: 'POST',
            dataType: 'json',
            data: jsonTopost,
            contentType: 'application/json',
            success: function (res) {

                //Tạo chi tiết toa thuốc
                listXoaBtn.forEach(btn => {
                    let id = btn[btn.length - 1];
                    let thuoc = thuocs.filter(function (element) {
                        return $(`#ten-thuoc-${id}`).val() === element.TenThuoc
                    });
                    let chitiettoathuoc = {
                        MaToaThuoc: res.MaToaThuoc,
                        MaThuoc: thuoc[0].MaThuoc,
                        SoLuong: $(`#so-luong-${id}`).val(),
                        CachDung: $(`#cach-dung-${id}`).val()
                    }
                    console.log(chitiettoathuoc);
                    let jsonTopost = JSON.stringify(chitiettoathuoc);

                    $.ajax({
                        url: `${backendAddress}/api/chitiettoathuoc/add`,
                        type: 'POST',
                        dataType: 'json',
                        data: jsonTopost,
                        contentType: 'application/json',
                    })
                });

                alert("Tạo Toa thành công");
            }
        })
    }
})

