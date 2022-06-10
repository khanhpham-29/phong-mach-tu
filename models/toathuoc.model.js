import db from '../utils/db.js'

export  async function add(toathuoc){
    return  db('toathuoc').insert(toathuoc);
}

export  async function findByMaBenhNhan(maBenhNhan) {
    const list = db('toathuoc').where('MaBenhNhan', maBenhNhan);
    if (list.length === 0) {
        return null;
    }
    return  list;
}