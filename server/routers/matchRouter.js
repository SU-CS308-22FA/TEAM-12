import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Match from '../models/matchModel.js';

const router = express.Router();



router.get('/', (req, res) => {
    Match.find()
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: '+err))
})


export default router;