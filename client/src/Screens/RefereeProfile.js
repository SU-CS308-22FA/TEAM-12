import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const RefereeProfile = () => {
  return(
    <div>
        <div class='parent'>
            <div class='child'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                
                </Card>
            </div>

            <div class='child'>
                <h1>Name Surname</h1>
                
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
                        <td>1</td>
                        <td>2</td>
                        <td>6</td>
                        <td>5</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>4</td>
                        <td>4</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >2</td>
                        <td>7</td>
                        <td>7</td>
                        </tr>
                    </tbody>
                </Table>
            
        </div>
        <div className="accordion">
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Assistant Referees</Accordion.Header>
            <Accordion.Body>
                <div class='parent'>
                    <div class='child'>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>Name Surname</Card.Title>
                        </Card>
                    </div>

                    <div class='child'>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>Name Surname</Card.Title>
                        </Card>
                    </div>
                    <div class='child'>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>Name Surname</Card.Title>
                        </Card>
                    </div>
                    <div class='child'>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Title>Name Surname</Card.Title>
                        </Card>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        
        </Accordion> 
        </div>
        </div>
   
  )
  
};

