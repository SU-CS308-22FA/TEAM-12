import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../fixture.css'

export const FixtureScreen = () => {
    const [matches, setMatches] = useState([ ])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/matches`)
        .then(response => setMatches(response.data))
    }, [])

    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                {matches.map(match => {
                    return (
                    <li>
                        <span class="head">
                            <a key={match._id}><Link to={`${match._id}`}>{match.homeTeam} Vs {match.awayTeam}</Link></a>
                            <span class="referee">{match.referee}</span>
                            <span class="date">{match.date}</span>
                        </span>
                        <div class="goals-result">
                            <a>{match.homeTeam}</a>
                            <span class="goals">{match.score}</span>
                            <a>{match.awayTeam}</a>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}




export default FixtureScreen;