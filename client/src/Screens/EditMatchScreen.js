import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../center.css'

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
        <div class="input">
            <label>Score: </label>        
            <input type="text" name="score" size="25" value={newmatch.score} required onChange={handleChange}/><br/>
            <Button className="btn1" onClick={matchUpdate}>Update Match</Button>
            <Button className="btn2" onClick={matchDelete}>Delete Match</Button>           
        </div>
        <a href="/matches/editfixture" className="btn3" role="button">Back to Edit Fixture Page</a>

    
    </div>
  );
}

export default EditMatchScreen;