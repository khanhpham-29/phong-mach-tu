import db from '../utils/db.js'

export function findAll(){
 return db('benhnhan');
}

export  async function findByDate(date) {
 const list = db('benhnhan').where('ngaykham', date);
 if (list.length === 0) {
  return null;
 }
}
export  async function findByName(name, sdt){
  const list = db('benhnhan').where('ten', name).andWhere('sodienthoai', sdt);
  if(list.length === 0){
   return null;
  }
 return list;
}

export  async function findByStatus(status){
 const list = db('benhnhan').where('TrangThai', status);
 if(list.length === 0){
  return null;
 }
 return list;
}

export  async function add(benhnhan){
 return  db('benhnhan').insert(benhnhan);
}

export  async function patch(id, benhnhan){
 return  db('benhnhan').where('MaBenhNhan', id).update(benhnhan);
}
