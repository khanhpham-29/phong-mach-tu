import express from 'express';
import * as hoadonModel from '../models/hoadon.model.js';

const router = express.Router();


router.get("/tienthuoc/:matoathuoc", async function (req, res){
    const matoathuoc = parseInt(req.params.matoathuoc);
    const tienthuoc = await hoadonModel.findTienThuoc(matoathuoc);

    res.json({
            'tienthuoc': tienthuoc
    });
})

router.post("/add", async function (req, res){
    let hoadon = req.body;

    const ret = await hoadonModel.add(hoadon);

    hoadon = {
        MaHoaDon: ret[0],
        ...hoadon
    }
    res.status(200).json(hoadon);
})

router.get("/doanhthuthang", async function (req, res){
    const month =req.query.month;
    const year =req.query.year;

    let list =  await hoadonModel.getDoanhThuThang(month, year);

    let sum = 0;

    list[0].forEach(function (e){
        sum+= parseFloat(e.DoanhThu);
    })
    console.log(sum)
    list[0].forEach(function (e){
        let TyLe = (parseFloat(e.DoanhThu)/sum*100).toFixed(2);
        e.TyLe = TyLe;
    })

    res.json(list[0]);

})



export default router;