import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import CommentSection from '../Components/CommentSection.js';

export const MatchScreen = ({user}) => {
    
    const {id} = useParams();

    const [match, setMatch] = useState({
        
    })
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/matches/${id}`)
        .then(response => setMatch(response.data))
    }, [])

    var isClicked = false
    
    
    console.log(isClicked);
    return (
        <div>
            {user?.fullname && (
            <a href={`http://localhost:3000/matches/refVote/${id}`} user={user} match={match} className="btn btn-info" role="button">Vote the Referee of the Match</a>
            )}    
            <p>&nbsp;</p> 
            <CommentSection match={match} user={user} id={id}/>

        </div>
    )
};




export default MatchScreen;