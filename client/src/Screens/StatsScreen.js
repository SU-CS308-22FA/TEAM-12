import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Button';


export const StatsScreen = () => {
    const [referees, setReferees] = useState([ ])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/referees/`)
        .then(response => setReferees(response.data))
    }, [])

    return (
        <div>
            <Table className='table' >
                <thead>
                    <tr>
                        <th>Name</th>
                        
                        <th>Matches</th>
                        
                        <th>Red Card</th>
                        
                        <th>Yellow Card</th>
                        
                        <th>Ofside PG</th>
                    </tr>
                                
                </thead>
                <tbody>
                    {referees.map(referee => 
                    <tr>
                        <td key={referee._id}><a style={{textDecoration: 'none', color: 'white'}} ><Link style={{ textDecoration: 'none' }} to={`${referee._id}`}>{referee.refName} {referee.refSurname}</Link></a></td>
                        
                        <td >{referee.matchNum}</td>

                        <td >{referee.rcpg}</td>

                        <td >{referee.ycpg}</td>

                        <td >{referee.offsidepg}</td>
                                    
                    </tr>
                    )}
                </tbody>
            </Table>
                
        </div>
    )
}




export default StatsScreen;