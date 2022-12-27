import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../clubs.css'

export const ClubsScreen = () => {
    const [teams, setTeams] = useState([ ])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/teams`)
        .then(response => setTeams(response.data))
    }, [])

    return (
        <div>
            {teams.map(team => {
                    return (                
                        <div class="team-container">
                            <img src={team.teamLogo} width="100" height="100"></img>    
                            <a key={team._id}><Link to={`${team._id}`}>{team.teamName}</Link></a>                                 
                        </div>                   
                    )
                })}
        </div>
    )
}




export default ClubsScreen;