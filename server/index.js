import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const GAMES = [];

app.get("/health", (req,res)=>{
    res.status(200).json({message: "Server is Healthy"})
});

app.get("/games", (req,res)=>{
    return res.status(200).json({
        success:true,
        data:GAMES,
        meassage:"Games fetched successfully"
    });
});

const PORT = 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});

