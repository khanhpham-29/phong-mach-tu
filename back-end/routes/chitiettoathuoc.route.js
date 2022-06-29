import express from 'express';
import * as chitiettoathuocModel from '../models/chitiettoathuoc.model.js'
import * as hoadonModel from "../models/hoadon.model.js";
import {getBaoCaoThuocThang} from "../models/chitiettoathuoc.model.js";

const router = express.Router();

router.post("/add", async function (req, res){
    let chitiettoathuoc = req.body;

    const ret = await chitiettoathuocModel.add(chitiettoathuoc);

    chitiettoathuoc = {
        MaToaThuoc: ret[0],
        ...chitiettoathuoc
    }
    console.log(chitiettoathuoc);
    res.status(200).json(chitiettoathuoc);
})

router.get("/baocaothuocthang", async function (req, res){
    const month =req.query.month;
    const year =req.query.year;

    let list =  await chitiettoathuocModel.getBaoCaoThuocThang(month, year);

    res.json(list[0]);
})



export default router;