import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../center.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const EditMatchScreen = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [newmatch, setMatch] = useState({
        score: "",
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/matches/editfixture/${id}`)
        .then(response => setMatch(response.data))
    }, [])

/**
 * This function is called when the "Update Match" button is clicked. 
 * It sends the "newmatch" which is the update match to the database. 
 */
    const matchUpdate = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/matches/editfixture/${id}`, newmatch)
        .then((match) => {
            console.log(match)
            let message = " Updated Successfully";         
            toast("✔️"+message,
                {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });    
            navigate("/matches/editfixture")
        })
           
    }

/**
 * This function is called when the "Delete Match" button is clicked. 
 * It sends a request to the backend with the unique url of the website which contains the matches unique id. With this id the backend is able to delete the match.
 */
    const matchDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/matches/editfixture/${id}`)
        .then((res) => {
            console.log(res.status)
            let message = " Deleted Successfully";         
            toast("✔️"+message,
                {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });    
            navigate("/matches/editfixture")   
        })
            
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

        <div class="anchorContainer">
            <a href="/matches/editfixture" role="button">Edit Fixture Page</a>
        </div>
        <div class="anchorContainer">
            <a href="/adminpanel" role="button">Admin Panel</a>
        </div>
        
    </div>
  );
}

export default EditMatchScreen;