import express from "express";
import morgan from "morgan";
import asyncError from "express-async-errors";
import cors from "cors";

import benhnhanRouter from  "./routes/benhnhan.route.js";
import toathuocRouter from  "./routes/toathuoc.route.js";
import chitiettoathuocRouter from  "./routes/chitiettoathuoc.route.js";
import hoadonRouter from  "./routes/hoadon.route.js";
import quydinhRouter from  "./routes/quydinh.route.js";
import thuocRouter from  "./routes/thuoc.route.js";


const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:5500',
    method: 'POST, GET, PATCH, DELETE'
}))
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/benhnhan', benhnhanRouter);
app.use('/api/toathuoc', toathuocRouter);
app.use('/api/chitiettoathuoc', chitiettoathuocRouter);
app.use('/api/hoadon', hoadonRouter);
app.use('/api/quydinh', quydinhRouter);
app.use('/api/thuoc', thuocRouter);


app.get('/', function (req, res){
    res.json({
        msg: "hello world!!!"
    });
})

app.post('/', function (req, res){
    res.status(201).json({
        msg:"data created",
    });
})

app.use(function (req, res){
    res.status(404).json({
        error: "Endpoint not found"
    });
})

app.use(function (err, req, res, next){
    console.log(err.stack);
    res.status(500).json({
        error: "Something wrong!!"
    });
})

app.get('/err', function (req, res){
    throw new Error('Error');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (){
    console.log(`listening on port ${PORT}`);
})
