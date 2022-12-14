import mongoose from "mongoose";

const refereeSchema = mongoose.Schema({

    refName:{
        type: String,
        required:true
    },
    refSurname:{
        type: String,
        required:true
    },
    matchNum:{
        type: String,
        required:true
    },
    rcpg:{
        type: String,
        required:true
    },
    ycpg:{
        type: String,
        required:true
    },
    offsidepg:{
        type: String,
        required:true
    },
    assist1:{
        type: String,
        required:true
    },
    assist2:{
        type: String,
        required:true
    },
    assist3:{
        type: String,
        required:true
    },
    assist4:{
        type: String,
        required:true
    }
})

export default mongoose.model('Referee', refereeSchema)