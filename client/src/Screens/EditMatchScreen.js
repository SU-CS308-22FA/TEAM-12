import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const EditMatchScreen = () => {

    const {id} = useParams();

    const [newmatch, setMatch] = useState({
        score: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/matches/editfixture/${id}`)
        .then(response => setMatch(response.data))
    }, [])

    const matchUpdate = () => {
        axios.put(`http://localhost:5000/matches/editfixture/${id}`, newmatch)
        .then((match) => console.log(match))
    }

    const matchDelete = () => {
        axios.delete(`http://localhost:5000/matches/editfixture/${id}`)
        .then((res) => console.log(res.status))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setMatch(oldMatch => {
            return {
                ...oldMatch,
                [name]: value
            }
        })
    }
  return (
    <div>
        <label>Score: </label>
        <input type="text" name="score" value={newmatch.score} required onChange={handleChange}/><br/>

        <Button className='btn btn-warning' onClick={matchUpdate}>Update Match</Button>
        <Button className='btn btn-danger' onClick={matchDelete}>Delete Match</Button>
        
    </div>
  );
}

export default EditMatchScreen;