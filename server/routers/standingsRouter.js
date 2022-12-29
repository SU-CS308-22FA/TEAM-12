import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Standings from "../models/standingsModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    Standings.find()
    .then(standings => res.json(standings))
    .catch(err => res.status(400).json('Error: '+err))
})

router.get('/:id', (req, res) => {
    Standings.findById(req.params.id)
    .then(standings => res.json(standings))
    .catch(err => res.json('Error: +err'))
})

export default router;