
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';




export const RefereeProfile = () => {
    const [referee, setReferee] = useState({ })
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/referees/${id}`)
        .then(response => setReferee(response.data))
    }, [])
  return(
    <div>
        
        <div class='parent'>
            <div class='child'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                
                </Card>
            </div>

            <div class='child'>
                <h1>{referee.assist1}Name Surname</h1>
                
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
                        
                    </tbody>
                </Table>
            
        </div>
        <div>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
        
        
        </div>
   
  )
  
};

