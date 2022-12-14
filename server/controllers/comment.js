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

export default router;