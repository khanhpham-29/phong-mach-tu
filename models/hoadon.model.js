import db from '../utils/db.js'

export async function getDoanhThuThang(month, year) {
    return await db.raw(`SELECT  day(benhnhan.NgayKham) as NgayKham, count(benhnhan.MaBenhNhan) as SoBenhNhan, 
                                        (sum(hoadon.TienKham) + sum(hoadon.TienThuoc)) as DoanhThu 
                                        FROM benhnhan, hoadon
                                        where benhnhan.MaBenhNhan = hoadon.MaBenhNhan 
                                        and month(benhnhan.NgayKham) = ${month} and year(benhnhan.NgayKham) = ${year}
                                        group by date( benhnhan.NgayKham)`);
}


export  async function add(hoadon){
    return  db('hoadon').insert(hoadon);
}

export  async function findTienThuoc(matoathuoc) {
    const list = db.raw(`select sum(b.SoLuong * c.Gia) 
                                as tienthuoc from toathuoc as a, chitiettoathuoc as b, thuoc as c
                                where a.MaToaThuoc = b.MaToaThuoc and c.MaThuoc = b.MaThuoc 
                                  and a.MaToaThuoc = ${matoathuoc}`);
    return  list;
}