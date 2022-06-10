import express from 'express';
import * as thuocModel from '../models/thuoc.model.js'

const router = express.Router();

router.get("/", async function (req, res){
    let list = await thuocModel.findAll();
    res.json(list);
})



router.get("/:name", async function (req, res){
    const name = req.params.name;

    const thuoc = await thuocModel.findByName(name);
    if(thuoc === null){
        return res.status(204).end();
    }
    res.json(benhnhan);
})

router.post("/add", async function (req, res){
    let thuoc = req.body;

    const ret = await thuocModel.add(thuoc);

    thuoc = {
        MaThuoc: ret[0],
        ...thuoc
    }
    res.status(200).json(thuoc);
})

router.post("/patch/:id", async function (req, res){
    const id = req.params.id;
    const thuoc = req.body;
    const n = await thuocModel.patch(id, thuoc);

    res.json({
        affected: n
    })

})

export default router;