import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Match from '../models/matchModel.js';
import { commentPost } from '../controllers/comment.js';
import {getRating} from '../controllers/comment.js';
import UserProfile from "../../client/src/Screens/UserProfile.js";

const router = express.Router();



router.get('/', (req, res) => {
    Match.find()
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: '+err))
})

router.get('/editfixture/:id', (req, res) => {
    Match.findById(req.params.id)
    .then(matches => res.json(matches))
    .catch(err => res.json('Error: +err'))
})

router.delete("/editfixture/:id", async (req,res) => {
    Match.findByIdAndDelete(req.params.id).then(() => res.json('Match deleted'))
    .catch((err=>res.status(400).json("Error: "+err)))
})

//update user
router.put("/editfixture/:id", async(req,res)=>{
    Match.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then(() => res.json('Match updated'))
    .catch(err=>res.status(400).json('Error: '+err))
})

router.get("/all", (req, res) => {
    //Match.find({}, {comments:1, _id:0})
    Match.find({comments : { $exists: true, $ne: []}, comments:{'$regex' : '^' + req.params.name, '$options' : 'i'}}, {comments:1, _id:0})
    .then(matches => res.json(matches))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
    Match.findById(req.params.id)
    .then(matches => res.json(matches))
    .catch(err => res.json('Error:' +err))
})

router.post("/:id", commentPost);
router.put("/refVote/:id", getRating);

export default router;