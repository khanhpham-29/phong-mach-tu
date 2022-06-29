import db from '../utils/db.js'

export  async function add(chitiettoathuoc){
    return  db('chitiettoathuoc').insert(chitiettoathuoc);
}
export  async function getBaoCaoThuocThang(month, year){
    return await db.raw(`select thuoc.TenThuoc as TenThuoc, count(thuoc.MaThuoc) as SoLanDung,
                               sum(chitiettoathuoc.Soluong) as SoLuong, thuoc.DonVi as DonVi
                               from thuoc, chitiettoathuoc, toathuoc
                               where thuoc.MaThuoc = chitiettoathuoc.MaThuoc
                                         and toathuoc.MaToaThuoc = chitiettoathuoc.MaToaThuoc 
                                         and month(toathuoc.NgayLapToa) = ${month}
                                         and year(toathuoc.NgayLapToa) = ${year}
                               group by TenThuoc
    `);
}



