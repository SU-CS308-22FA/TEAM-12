import mongoose from "mongoose";

const matchSchema = mongoose.Schema({

    homeTeam:{
        type: String,
        required:true
    },
    awayTeam:{
        type: String,
        required:true
    },
    referee:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    score:{
        type: String,
        default:'-'
    },
    comments:{
        type:[String],
        default:[]
    }
})

export default mongoose.model('Match', matchSchema)