import express from 'express';
import * as benhnhanModel from '../models/benhnhan.model.js'


const router = express.Router();

function formatDateForUser(date){
    let dateFormator = new Date(date);
    return  dateFormator.getDate() + "/"+ (dateFormator.getMonth() + 1) + "/" + dateFormator.getFullYear();
}

function formatDateForDB(date){
    let seperator;
    if(date.includes("/")){
        seperator = "/"
    }

    if(date.includes("-")){
        seperator = "-"
    }
    let newDate = date.split(seperator);

    return newDate[2] +"/" + newDate[1] + "/" + newDate[0];
}

router.get("/", async function (req, res){
    let list = await benhnhanModel.findAll();

    list.forEach(function(element){
        element.NgayKham = formatDateForUser(element.NgayKham);
        element.NamSinh = formatDateForUser(element.NamSinh);
    });


    res.json(list);
})

router.get("/:date", async function (req, res){
    let date = req.params.date;

    const list = await benhnhanModel.findByDate(date);
    if(list === null){
        return res.status(204).end();
    }

    list.forEach(function(element){
        element.NgayKham = formatDateForUser(element.NgayKham);
        element.NamSinh = formatDateForUser(element.NamSinh);
    });

    res.json(list);
})

router.get("/:name/:sdt", async function (req, res){
    const name = req.params.name;
    const sdt = req.params.sdt;

    const benhnhan = await benhnhanModel.findByName(name, sdt);
    if(benhnhan === null){
        return res.status(204).end();
    }

    benhnhan.NgayKham = formatDateForUser(benhnhan.NgayKham);
    benhnhan.NamSinh = formatDateForUser(benhnhan.NamSinh);
    res.json(benhnhan);
})

router.get("/get/status/:status/:date", async function (req, res){
    const status = req.params.status;
    let date = req.params.date;

    date = formatDateForDB(date);
    const benhnhan = await benhnhanModel.findByStatus(status, date);

    if(benhnhan === null){
        res.json(benhnhan);
    }

    if(benhnhan !== null || benhnhan.length !== 0){
        benhnhan[0].NgayKham = formatDateForUser(benhnhan[0].NgayKham);
        benhnhan[0].NamSinh = formatDateForUser(benhnhan[0].NamSinh);
    }

    res.json(benhnhan);
})

router.post("/add", async function (req, res){
    let benhnhan = req.body;

    const ret = await benhnhanModel.add(benhnhan);

    benhnhan = {
        MaBenhNhan: ret[0],
        ...benhnhan
    }
    res.status(200).json(benhnhan);
})

router.post("/patch/:id", async function (req, res){
    const id = req.params.id;
    const benhnhan = req.body;
    benhnhan.NgayKham = formatDateForDB(benhnhan.NgayKham);
    benhnhan.NamSinh = formatDateForDB(benhnhan.NamSinh);
    const n = await benhnhanModel.patch(id, benhnhan);

    res.json({
        affected: n
    })

})

export default router;