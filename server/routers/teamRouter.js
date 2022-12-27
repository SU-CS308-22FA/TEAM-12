import express from "express";
import mongoose from "mongoose";
import Team from '../models/teamModel.js';


const router = express.Router();

router.get('/', (req, res) => {
    Team.find()
    .then(teams => res.json(teams))
    .catch(err => res.status(400).json('Error: '+err))
})


router.get('/:id', (req, res) => {
    Team.findById(req.params.id)
    .then(teams => res.json(teams))
    .catch(err => res.json('Error: +err'))
})

export default router;