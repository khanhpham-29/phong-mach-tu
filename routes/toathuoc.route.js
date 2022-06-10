import express from 'express';
import * as toathuocModel from '../models/toathuoc.model.js'

const router = express.Router();


router.get("/:maBenhNhan", async function (req, res){
    const maBenhNhan = parseInt(req.params.maBenhNhan);
    const list = await toathuocModel.findByMaBenhNhan(maBenhNhan);
    if(list === null){
        return res.status(204).end();
    }
    console.log(list);
    res.json(list);
})


function formatDate(date) {
    // date = new Date(date);
    // const day = date.getDate();
    // const month = date.getMonth();
    // const year = date.getFullYear();
    //
    // return `${year}-${month + 1}-${day%30 - 1}`;

    const pos = date.indexOf('T');
    date = date.slice(0, pos)
    return date;
}

router.post("/add", async function (req, res){
    let toathuoc = req.body;
    toathuoc.NgayLapToa = formatDate(toathuoc.NgayLapToa);

    const ret = await toathuocModel.add(toathuoc);

    toathuoc = {
        MaToaThuoc: ret[0],
        ...toathuoc
    }
    res.status(200).json(toathuoc);
})


export default router;