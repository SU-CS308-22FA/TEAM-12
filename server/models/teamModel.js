import mongoose from "mongoose";

const teamSchema = mongoose.Schema({

    teamName:{
        type: String,
        required:true
    },
    teamLogo:{
        type: String,
        required:true
    },
    gkName:{
        type: String,
        required:true
    },
    gkLogo:{
        type: String,
        required:true
    },
    rbName:{
        type: String,
        required:true
    },
    rbLogo:{
        type: String,
        required:true
    },
    rcbName:{
        type: String,
        required:true
    },
    rcbLogo:{
        type: String,
        required:true
    },
    lcbName:{
        type: String,
        required:true
    },
    lcbLogo:{
        type: String,
        required:true
    },
    lbName:{
        type: String,
        required:true
    },
    lbLogo:{
        type: String,
        required:true
    },
    cdmName:{
        type: String,
        required:true
    },
    cdmLogo:{
        type: String,
        required:true
    },
    cmName:{
        type: String,
        required:true
    },
    cmLogo:{
        type: String,
        required:true
    },
    camName:{
        type: String,
        required:true
    },
    camLogo:{
        type: String,
        required:true
    },
    rwName:{
        type: String,
        required:true
    },
    rwLogo:{
        type: String,
        required:true
    },
    stName:{
        type: String,
        required:true
    },
    stLogo:{
        type: String,
        required:true
    },
    lwName:{
        type: String,
        required:true
    },
    lwLogo:{
        type: String,
        required:true
    }

})

export default mongoose.model('Team', teamSchema)