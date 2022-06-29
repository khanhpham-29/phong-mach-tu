import backendAddress from "../../../javascript/backendaddress.js";
//Đoanh thu
$('#btn-doanh-thu').on('click', function () {
    const thang = $('#thang').val();
    const nam = $('#nam').val();

    $('#table-header').empty();

    $('#table-header').append(`
                <tr class="tb-row">
                    <th>STT</th>
                    <th>Ngày</th>
                    <th>Số bệnh nhân</th>
                    <th>Doanh thu</th>
                    <th>Tỷ lệ</th>
                </tr>
    `);

    $.ajax({
        url: `${backendAddress}/api/hoadon/doanhthuthang?month=${thang}&year=${nam}`,
        type: 'GET',
        success: function (res) {
            $('#table-content').empty();
            setTimeout(TaiDoanhThu, 500);

            function TaiDoanhThu() {
                let stt = 1;
                for (const doanhthu of res) {
                    const tr = `
                                <tr class="tb-row">
                                <th>${stt}</th>
                                <th>${doanhthu.NgayKham}</th>
                                <th>${doanhthu.SoBenhNhan}</th>
                                <th>${doanhthu.DoanhThu}</th>
                                <th>${doanhthu.TyLe + "%"}</th>
                                </tr>`;
                    $('#table-content').append(tr);
                    stt++;
                }
            }

        }
    })
})


//Thuốc
$('#btn-thuoc').on('click', function () {
    const thang = $('#thang').val();
    const nam = $('#nam').val();

    $('#table-header').empty();

    $('#table-header').append(`
                <tr class="tb-row">
                    <th>STT</th>
                    <th>Thuốc</th>
                    <th>Đơn vị tính</th>
                    <th>Số lượng</th>
                    <th>Số lần dùng </th>
                </tr>
    `);

    $.ajax({
        url: `${backendAddress}/api/chitiettoathuoc/baocaothuocthang?month=${thang}&year=${nam}`,
        type: 'GET',
        success: function (res) {
            $('#table-content').empty();
            setTimeout(TaiThuoc, 500);

            function TaiThuoc() {
                let stt = 1;
                for (const thuoc of res) {
                    const tr = `
                                <tr class="tb-row">
                                <th>${stt}</th>
                                <th>${thuoc.TenThuoc}</th>
                                <th>${thuoc.DonVi}</th>
                                <th>${thuoc.SoLuong}</th>
                                <th>${thuoc.SoLanDung}</th>
                                </tr>`;
                    $('#table-content').append(tr);
                    stt++;
                }
            }

        }
    })
})