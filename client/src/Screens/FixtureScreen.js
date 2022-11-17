import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const FixtureScreen = () => {
    const [matches, setMatches] = useState([ ])

    useEffect(() => {
        axios.get('http://localhost:5000/matches')
        .then(response => setMatches(response.data))
    }, [])

    return (
        <div>
            <h1>List of Matches</h1>
            <ul style={{listStyleType:"none"}}>
                {matches.map(match => {
                    return (<li>{match.awayTeam}-{match.homeTeam}</li>)
                })}
            </ul>
        </div>
    )
}

export default FixtureScreen;