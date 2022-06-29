import db from '../utils/db.js'

export function findAll(){
 return db('thuoc');
}

export  async function add(thuoc){
 return  db('thuoc').insert(thuoc);
}

export  async function patch(id, thuoc){
 return  db('thuoc').where('MaThuoc', id).update(thuoc);
}
export  async function remove(id){
 return await db('thuoc').del().where('MaThuoc', id);
}
