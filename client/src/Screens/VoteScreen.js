import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../fixture.css'
import { useParams } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import './voteScreen.css'
import { Container, Form, Button, FormGroup, Row, Col, } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const VoteScreen = ({user}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [match, setMatch] = useState({      
    })
    const [rating, setRating] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/matches/${id}`)
        .then(response => setMatch(response.data))
    }, [])
    
    
    return (
        <div>
            <div class="center">Vote performance of {match?.referee} for this match</div>
            <div class="center">
            {[...Array(5)].map((star,i)=>{
            const ratingValue = i + 1;
                return(
                    <label>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar className='star' color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size ={75} />  
                    </label>
                ) 
            })}  
            </div>
            {user?._id && (
                <Form onSubmit={async (e)=>{
                    e.preventDefault()             
                    let userID = user._id;
                    axios.put(`http://localhost:5000/matches/refVote/${id}`,{rating,userID})
    
                    .then((res) => {
                    console.log(res);       
                    toast(res.data.message,
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
                    navigate(`/matches/${id}`)
                    })
                    .catch((err)=> {
                    console.log(err.response.data);                                
                    })
                }}>   
                    <div class="center">
                    <Form.Group>
                        <Button type="submit" variant="secondary" size="lg">
                        Submit Rating
                        </Button>
                    </Form.Group>
                    </div>  
                </Form>
            )}
            
            
        </div>
        
       
    )
}


export default VoteScreen;