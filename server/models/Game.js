import { Schema , model } from "mongoose";

const gameSchema = new Schema({
    title:String, 
    year:String, 
    genre:String, 
    thumbnail:String
});

const Game = model("Game", gameSchema);

export default Game;