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
    },
    comments1:{
        type:[String],
        default:[]
    },
    refRating:{
        type: Number,
        default: 5
    },
    voteNum:{
        type: Number,
        default: 1
    },
    posRating:{
        type: Number,
        default: 5
    },
    voteNumPos:{
        type: Number,
        default: 1
    },
    homeTeamURL:{
        type: String,
        required:true
    },
    awayTeamURL:{
        type: String,
        required:true
    },
    voters:{
        type:[String],
        default:[]
    }
})

export default mongoose.model('Match', matchSchema)