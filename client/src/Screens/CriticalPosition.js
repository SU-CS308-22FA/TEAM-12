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
import {DefaultPlayer as Video} from 'react-html5video';
import CommentForPos from '../Components/CommentForPos';

export const CriticalPosition = ({user}) => {
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
            <div>
                <div className='center'>
                    <Video  autoPlay loop height='800' width='1000'>
                        <source src="https://drive.google.com/uc?export=view&id=1cl6nlHCYDlAX6EYGC9D98mcjp2iHNV4z" type='video/webm'></source>
                    </Video>
                </div>
            </div>
            <div class="center">Vote {match?.referee}'s decision for this critical position</div>
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
                    axios.put(`http://localhost:5000/matches/criticalPosition/${id}`,{rating,userID})
    
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
                    //navigate(`/matches/${id}`)
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

                    <div class ="center"><div class="live-score-detail-head_whistle-name__1rOgG">Current Critical Position Rating: {match.posRating}/5</div></div>
                </Form>
            )}
            <CommentForPos match={match} user={user} id={id}/>
            
            
        </div>
        
       
    )
}


export default CriticalPosition;