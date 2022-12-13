import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';
import Match from '../models/matchModel.js';
import Referee from '../models/refereeModel.js';

const router = express.Router();

// localhost:5000/users 'a yapılan post isteği
router.post("/signup", async (req, res)=>{ 
    try {
        //console.log(req.body)
        const { fullname, password, favClub, email, favRef } = req.body;
        
        const userExists = await User.findOne({ email })
        if(userExists)
            return res.status(400).json({ message: 'User already exists'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            favClub,
            favRef,
        })

        return res.status(201).json(createdUser);
    } catch (error) {
        console.log(error)
        return res.json({message: "Create user failed"})
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user)
            return res.status(400).json({message: "User does not exist"})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(user.userType!=="ADMIN"){
            if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        }
        
        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})
//delete user
router.delete("/edit/:id", async (req,res) => {
    User.findByIdAndDelete(req.params.id).then(() => res.json('User deleted'))
    .catch((err=>res.status(400).json("Error: "+err)))
})

//update user
router.put("/edit/:id", async(req,res)=>{
    User.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then(() => res.json('User updated'))
    .catch(err=>res.status(400).json('Error: '+err))
})



router.post("/addmatch", async (req, res)=>{ 
    try {
        //console.log(req.body)
        const { homeTeam, awayTeam, referee, date, score } = req.body;
         
        const createdMatch = await Match.create({
            homeTeam,
            awayTeam,
            referee,
            date,
            score
        })
        return res.status(201).json(createdMatch);
    } catch (error) {
        console.log(error)
        return res.json({message: "Create match failed"})
    }
})

router.post("/addreferee", async (req, res)=>{ 
    try {
        //console.log(req.body)
        const { refName, refSurname, matchNum, rcpg, ycpg, offsidepg } = req.body;
         
        const createdReferee = await Referee.create({
            refName, 
            refSurname,
            matchNum,
            rcpg,
            ycpg,
            offsidepg
        })
        return res.status(201).json(createdReferee);
    } catch (error) {
        console.log(error)
        return res.json({message: "Create referee failed"})
    }
})

export default router;