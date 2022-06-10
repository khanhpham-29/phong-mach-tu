import express from 'express';
import * as quydinhModel from '../models/quydinh.model.js'

const router = express.Router();

router.get("/", async function (req, res){
    let list = await quydinhModel.findQuyDinh();

    res.json(list[0]);
})

router.post("/update", async function (req, res){
    let quydinh = req.body;

    let n = 0;
    if(quydinh != {}){
        n = await quydinhModel.updateQuyDinh(quydinh);
    }

    res.json({
        affected: n
    });
})

export default router;