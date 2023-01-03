import express from 'express';
import mongoose from 'mongoose';
import Match from '../models/matchModel.js';

const router = express.Router();

export const commentPost = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const match = await Match.findById(id);
    match.comments.push(value);

    const updatedMatch = await Match.findByIdAndUpdate(id, match, {new: true});
    res.json(updatedMatch);
}
export const commentPostForPos = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const match = await Match.findById(id);
    match.comments1.push(value);

    const updatedMatch1 = await Match.findByIdAndUpdate(id, match, {new: true});
    res.json(updatedMatch1);
}

export const getRating = async (req,res) => {
    
    const {rating,userID} = req.body;
    const match = await Match.findById(req.params.id);
    if(match.voters.includes(userID)){
        res.json({ message:'❌You have voted before!'});
    }
    else{
        let totalVote = match.voteNum;
        let finalVoteCount = totalVote + 1;
        let totalRating = match.refRating;
        let calc = (totalRating * totalVote);
        let finalVote = (calc + rating);
        let finalRating = finalVote/finalVoteCount;
        let roundedRating = finalRating.toFixed(2);
        match.voters.push(userID);
        const updatedMatch = await Match.findByIdAndUpdate(req.params.id, 
            {
                refRating: roundedRating,
                voteNum: finalVoteCount,
                voters: match.voters
            }, {new: true}).then(() => res.json({ message: '✔️Thank you for voting!'}));
        }  
}
export const getRatingPos = async (req,res) => {
    
    const {rating,userID} = req.body;
    const match = await Match.findById(req.params.id);
    if(match.voters.includes(userID)){
        res.json({ message:'❌You have voted before!'});
    }
    else{
        let totalVote = match.voteNumPos;
        let finalVoteCount = totalVote + 1;
        let totalRating = match.posRating;
        let calc = (totalRating * totalVote);
        let finalVote = (calc + rating);
        let finalRating = finalVote/finalVoteCount;
        let roundedRating = finalRating.toFixed(2);
        match.voters.push(userID);
        const updatedMatch = await Match.findByIdAndUpdate(req.params.id, 
            {
                posRating: roundedRating,
                voteNumPos: finalVoteCount,
                voters: match.voters
            }, {new: true}).then(() => res.json({ message: '✔️Thank you for voting!'}));
        }  
}

export default router;