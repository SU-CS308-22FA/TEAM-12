import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const UserProfile = ({ user }) => {
    const [newuser, setUser] = useState({
        email: "",
    })
    



    const userUpdate = () => {
        axios.put('http://localhost:5000/users/edit/'+user._id, newuser)
        .then((user) => console.log(user))
    }

    const userDelete = () => {
        axios.delete('http://localhost:5000/users/edit/'+user._id)
        .then((res) => console.log(res.status))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(oldUser => {
            return {
                ...oldUser,
                [name]: value
            }
        })
    }
    return(
    <div>
        <div class='parent'>
            <div class='child'>
                <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                
                </Card>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Favorite Club</th>
                    <th>Favorite Referee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{user?.fullname}</td>
                    <td>{user?.favClub}</td>
                    <td>{user?.favRef}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <label>Email: &nbsp;</label> 
        <input type="text" name="email" value={newuser.email} required onChange={handleChange}/><br/>

        <h1><Button variant="light" className='btn btn-warning' onClick={userUpdate}>Update User</Button>
            </h1><h1>
            <Button variant="dark" className='btn btn-danger' onClick={userDelete}>Delete User</Button>
            </h1>
    </div>
     
      
  ) 
  
};

export default UserProfile;
