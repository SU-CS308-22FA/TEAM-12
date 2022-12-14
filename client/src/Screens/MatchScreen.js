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

    return (
        <div>
           <CommentSection match={match} user={user} id={id}/>

        </div>
    )
};




export default MatchScreen;