import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import '../teams.css'

export const TeamScreen = () => {
    
    const {id} = useParams();

    const [team, setTeam] = useState({
        
    })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/teams/${id}`)
        .then(response => setTeam(response.data))
    }, [])
    
    return (
        <div class="card-container">
            <div class="card1">
                <img src={team.gkLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.gkName}</b></h5>
                </div>
            </div>
            <div class="card2">
                <img src={team.lbLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.lbName}</b></h5>
                </div>
            </div>
            <div class="card2">
                <img src={team.lcbLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.lcbName}</b></h5>
                </div>
            </div>
            <div class="card2">
                <img src={team.rcbLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.rcbName}</b></h5>
                </div>
            </div>
            <div class="card2">
                <img src={team.rbLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.rbName}</b></h5>
                </div>
            </div>
            <div class="card3">
                <img src={team.cmLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.cmName}</b></h5>
                </div>
            </div>
            <div class="card3">
                <img src={team.cdmLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.cdmName}</b></h5>
                </div>
            </div>
            <div class="card3">
                <img src={team.camLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.camName}</b></h5>
                </div>
            </div>
            <div class="card4">
                <img src={team.lwLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.lwName}</b></h5>
                </div>
            </div>
            <div class="card4">
                <img src={team.stLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.stName}</b></h5>
                </div>
            </div>
            <div class="card4">
                <img src={team.rwLogo} alt="Avatar" width="200" height="200"></img>
                <div class="playername">
                <h5><b>{team.rwName}</b></h5>
                </div>
            </div>
        </div>
        
        
        
        
    )
};




export default TeamScreen;