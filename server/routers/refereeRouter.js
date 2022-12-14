import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Referee from "../models/refereeModel.js";

const router = express.Router();



router.get('/', (req, res) => {
    Referee.find()
    .then(referees => res.json(referees))
    .catch(err => res.status(400).json('Error: '+err))
})

router.get('/:id', (req, res) => {
    Referee.findById(req.params.id)
    .then(referees => res.json(referees))
    .catch(err => res.json('Error: +err'))
})


export default router;