import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../fixture.css'
import Button from 'react-bootstrap/Button';





export const EditFixtureScreen = ({}) => {

    const [matches, setMatches] = useState([ ])
    

    useEffect(() => {
        axios.get('http://localhost:5000/matches')
        .then(response => setMatches(response.data))
    }, [])


    
    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                {matches.map(match => {
                    return (
                    <li>
                        <span class="head">
                            {match.homeTeam} Vs {match.awayTeam}
                            <span class="referee">{match.referee}</span>
                            <span class="date">{match.date}</span>
                        </span>
                        <div class="goals-result">
                            <a>{match.homeTeam}</a>
                            <span class="goals">{match.score}</span>
                            <a>{match.awayTeam}</a>
                        </div>
                        <a key={match._id}><Link to={`${match._id}`}>EDIT</Link></a>                       
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}




export default EditFixtureScreen;