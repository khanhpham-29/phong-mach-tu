import backendAddress from "./js/backendAddress";

let date;
let benhnhans;
let id = 0;
$(document).ready(function () {
    let now = new Date();
    let month = now.getMonth() + 1;
    if (month < 9) {
        month = '0' + month;
    }
    date = now.getFullYear() + '-' + month + '-' + now.getDate();
    $('#ngay-kham').val(date);
    console.log(backendAddress);
})

function getListBenhNhan() {
    $.ajax({
        url: `${backendAddress}/api/benhnhan/${$('#ngay-kham').val()}`,
        type: 'GET',
        success: function (res) {
            $('#table-container').empty();
            benhnhans = res;
            id = 0;
            for (const benhnhan of benhnhans) {
                let btnText = "Khám Lại";

                if (benhnhan.TrangThai === "chua kham") {
                    btnText = "Khám"
                }
                if (benhnhan.TrangThai === "dang kham") {
                    btnText = "Khám"
                }
                
                const tr = `
                    <tr class="tb-row">
                    <th>${benhnhan.MaBenhNhan}</th>
                    <th>${benhnhan.Ten}</th>
                    <th>${benhnhan.NamSinh}</th>
                    <th>${benhnhan.GioiTinh}</th>
                    <th>${benhnhan.DiaChi}</th>
                    <th class = 'flex jus-between ali-center'>
                        ${benhnhan.TrangThai}
                        <button id = 'btn-${id}' class = "btn btn-form">
                            ${btnText}
                            </button> 
                        <button id = 'btn-tinh-tien${id}' class = "btn btn-form">
                            Tính Tiền
                        </button> 
                        </th>
                    </tr>`;
                $('#table-container').append(tr);
                id++;
            }


            for (let i = 0; i < id; i++) {
                $(`#btn-${i}`).on('click', function () {
                    let benhnhan = {
                        ...benhnhans[i],
                        isValid: true
                    }
                    localStorage.setItem('benhnhan', JSON.stringify(benhnhan));
                    window.location = "./page/benh-nhan/benh-nhan.html";
                })

                $(`#btn-tinh-tien${i}`).on('click', function () {
                    let benhnhan = {
                        ...benhnhans[i],
                        isValid: true
                    }
                    localStorage.setItem('benhnhanHoadon', JSON.stringify(benhnhan));
                    window.location = "./page/lap-hoa-don/lap-hoa-don.html";
                })
            }
        }
    })

}
$('table-container').ready(getListBenhNhan);

$('#btn-xem').on('click', getListBenhNhan);