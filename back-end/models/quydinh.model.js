import db from '../utils/db.js'

export function findQuyDinh(){
 return db('quydinh');
}

export async function updateQuyDinh(quydinh){
 return await db('quydinh').where('TienKham', '>=', 0).update(quydinh);
}
