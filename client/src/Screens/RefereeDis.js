import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

const RefereeDis = () => {
    const [referee, setReferee] = useState({ })
    const {id} = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/referees/${id}`)
        .then(response => setReferee(response.data))
    }, [])

    return (
        <div>
          <div class='parent'>
            <div class='child'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                
                </Card>
            </div>

            <div class='child'>
                <h1>{referee.refName} {referee.refSurname}</h1>
                
            </div>
            
        </div>
        <div className="tabtab">
        
                <Table striped>
                    <thead>
                        <tr>
                            
                            <th>Match Number</th>
                            
                            <th>Red Card</th>
                            
                            <th>Yellow Card</th>
                            
                            <th>Ofside PG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{referee.matchNum}</td>
                        <td>{referee.rcpg}</td>
                        <td>{referee.ycpg}</td>
                        <td>{referee.offsidepg}</td>
                        </tr>
                        
                        
                    </tbody>
                </Table>
            
        </div>
        
          <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Assistant Referees</Accordion.Header>
            <Accordion.Body>
                <div class='parent'>
                    <div class='child'>
                        <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>
                          <Link to="/refereeProfile" >{referee.assist1}</Link>
                          </Card.Title>
                        </Card>
                    </div>

                    <div class='child'>
                        <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>
                        <Link to="/refereeProfile" >{referee.assist2}</Link>
                        </Card.Title>
                        </Card>
                    </div>
                    <div class='child'>
                        <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>
                        <Link to="/refereeProfile" >{referee.assist3}</Link>
                        </Card.Title>
                        </Card>
                    </div>
                    <div class='child'>
                        <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>
                        <Link to="/refereeProfile" >{referee.assist4}</Link>
                        </Card.Title>
                        </Card>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        
        </Accordion> 
        </div>
        
      )
    }
    
    export default RefereeDis;

