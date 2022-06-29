import backendAddress from "../../../javascript/backendaddress.js";

let quydinh;
let thuocs;
$('#main-page').ready(function () {
    $.ajax({
        url: `${backendAddress}/api/quydinh/`,
        type: 'GET',
        success: function (res) {
            quydinh = res;
            $("#input-tien-kham").val(res.TienKham);
        }

    })
})
//Lấy thông tin từ mảng thuocs dán lên table
function pasteToTable(thuocArr) {
    $('#table-content').empty();
    let id = 0;
    for (const thuoc of thuocArr) {
        const tr = `
                    <tr class="tb-row">
                        <th>${thuoc.MaThuoc}</th>
                        <th>${thuoc.TenThuoc}</th>
                        <th>${thuoc.DonVi}</th>
                        <th class = 'flex jus-between ali-center'>
                            ${thuoc.Gia}
                        <button id = 'btn-${id}' class = "btn btn-form">
                            Xem
                            </button> 
                        </th>
                    </tr>`;
        id++;
        $('#table-content').append(tr);

    }
    for (let i = 0; i < id; i++) {
        $(`#btn-${i}`).on('click', function () {
            console.log(i);
            $(`#input-ma-thuoc`).val(thuocArr[i].MaThuoc);
            $(`#input-ten-thuoc`).val(thuocArr[i].TenThuoc);
            $(`#input-don-vi`).val(thuocArr[i].DonVi);
            $(`#input-gia`).val(thuocArr[i].Gia);
            $(`#holder-capnhat`).css('display', 'flex');

        })
    }
}

$('table-content').ready(function () {
    $.ajax({
        url: `${backendAddress}/api/thuoc/`,
        type: 'GET',
        success: function (res) {
            thuocs = res;
            pasteToTable(thuocs);
        }
    })
})

$('#btn-tim-kiem-thuoc').on('click', function (e) {
    e.preventDefault();
    $('#table-content').empty();

    let finding = [];
    let curThuoc = $('#input-search').val();
    thuocs.forEach(function (element) {
        console.log(element.TenThuoc);
        if (element.TenThuoc.includes(curThuoc)) {
            finding.push(element);
        }
    });
    pasteToTable(finding);

})

//cập nhật tiền khám
$('#btn-cap-nhat-tien-kham').on('click', function (e) {
    e.preventDefault();

    quydinh = {
        ...quydinh,
        TienKham: +$("#input-tien-kham").val()
    }

    const jsonTopost = JSON.stringify(quydinh);
    $.ajax({
        url: `${backendAddress}/api/quydinh/update`,
        type: 'POSt',
        data: jsonTopost,
        contentType: 'application/json',
        success: function (res) {
            console.log(res);
            alert('Cập nhật tiền khám thành công');
        },
        error: function (ajaxContext) {
            alert(ajaxContext.responseText)

        }

    })
})

//Cập nhật thuốc
$('#btn-cap-nhat-thuoc').on('click', function (e) {
    e.preventDefault();
    let thuoc = {
        MaThuoc: $(`#input-ma-thuoc`).val(),
        TenThuoc: $(`#input-ten-thuoc`).val(),
        DonVi: $(`#input-don-vi`).val(),
        Gia: $(`#input-gia`).val()
    }

    const jsonTopost = JSON.stringify(thuoc);
    let url = `${backendAddress}/api/thuoc/patch/${thuoc.MaThuoc}`;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: jsonTopost,
        contentType: 'application/json',
        success: function (res) {
            alert("Đã thêm thành công");

            //Tải lại danh sách thuốc
            $.ajax({
                url: `${backendAddress}/api/thuoc/`,
                type: 'GET',
                success: function (res) {
                    thuocs = res;
                    pasteToTable(thuocs);
                }
            })

            $('.holder').css('display', 'none');
        },
        error: function (ajaxContext) {
            alert(ajaxContext.responseText)
        }
    })

})


//mở hộp thoại Thêm thuốc
$('#btn-them').on('click', function (e) {
    e.preventDefault();
    $('#holder-them').css('display', 'flex');

})

 //Thêm thuốc
 $('#btn-them-thuoc').on('click', function (e) {
    e.preventDefault();
    let thuoc = {
        TenThuoc: $(`#input-add-ten-thuoc`).val(),
        DonVi: $(`#input-add-don-vi`).val(),
        Gia: $(`#input-add-gia`).val()
    }

    const jsonTopost = JSON.stringify(thuoc);
    let url = `${backendAddress}/api/thuoc/add`;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: jsonTopost,
        contentType: 'application/json',
        success: function (res) {
            alert("Đã thêm thành công");

            //Tải lại danh sách thuốc
            $.ajax({
                url: `${backendAddress}/api/thuoc/`,
                type: 'GET',
                success: function (res) {
                    thuocs = res;
                    pasteToTable(thuocs);
                }
            })
            $('.holder').css('display', 'none');
        },
        error: function (ajaxContext) {
            alert(ajaxContext.responseText)
        }
    })

})



//Xóa thuốc
$('#btn-xoa-thuoc').on('click', function (e) {
    e.preventDefault();
    $('.holder').css('display', 'none');
    // url = `${backendAddress}/api/thuoc/${$(`#input-ma-thuoc`).val()}`;

    // $.ajax({
    //     url: url,
    //     type: 'DELETE',
    //     success: function (res) {
    //         alert("Đã xóa thành công");

    //         //Tải lại danh sách thuốc
    //         $.ajax({
    //             url: `${backendAddress}/api/thuoc/`,
    //             type: 'GET',
    //             success: function (res) {
    //                 thuocs = res;
    //                 pasteToTable(thuocs);
    //             }
    //         })

    //         $('.holder').css('display', 'none');
    //     },
    //     error: function (ajaxContext) {
    //         alert(ajaxContext.responseText)
    //     }
    // })
})