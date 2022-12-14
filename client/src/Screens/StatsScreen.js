import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Button';


export const StatsScreen = () => {
    const [referees, setReferees] = useState([ ])

    useEffect(() => {
        axios.get('http://localhost:5000/referees')
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
                        <td key={referee._id}><Link to={`${referee._id}`}>{referee.refName} {referee.refSurname}</Link></td>
                        
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