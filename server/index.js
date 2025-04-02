import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Game from './models/Game.js';


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    if (conn) {
        console.log("MongoDB connected successfully")
    }
}

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Healthy" })
});

app.get("/games", async (req, res) => {

    const getGames = await Game.find();

    return res.status(200).json({
        success: true,
        data: getGames,
        meassage: "Games fetched successfully"
    });
});

app.post("/games", async (req, res) => {
    const { title, year, genre, thumbnail } = req.body;

    const newGame = new Game({
        title, year, genre, thumbnail 
    })

    const savedGame = await newGame.save();

    return res.status(201).json({
        success: true,
        data: savedGame,
        message: "Game created successfully"
    })
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});

