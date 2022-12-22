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

export const getRating = async (req,res) => {
    
    const {rating} = req.body;
    const match = await Match.findById(req.params.id);
    let totalVote = match.voteNum;
    let finalVoteCount = totalVote + 1;
    let totalRating = match.refRating;
    let calc = (totalRating * totalVote);
    let finalVote = (calc + rating);
    let finalRating = finalVote/finalVoteCount;
    let roundedRating = finalRating.toFixed(2);

    
    const updatedMatch = await Match.findByIdAndUpdate(req.params.id, 
        {
            refRating: roundedRating,
            voteNum: finalVoteCount
        }, {new: true}).then(() => res.json('Vote Received'));

}

export default router;