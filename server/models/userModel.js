import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    fullname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    userType:{
        type: String,
        enum: ['USER','ADMIN'],
        default: 'USER'
    },
    favClub: {
        type: String,
    },
    favRef: {
        type: String,
    },
})

export default mongoose.model('User', userSchema)