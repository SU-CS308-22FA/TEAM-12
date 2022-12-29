import mongoose from "mongoose";

const standingsSchema = mongoose.Schema({

    position:{
        type: String,
        required:true
    },
    teamName:{
        type: String,
        required:true
    },
    wins:{
        type: String,
        required:true
    },
    draws:{
        type: String,
        required:true
    },
    losses:{
        type: String,
        required:true
    },
    points:{
        type: String,
        required:true
    },
})

export default mongoose.model('Standings', standingsSchema)