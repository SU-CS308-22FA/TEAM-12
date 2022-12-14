import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify'

export const UserProfile = ({ user }) => {
    const [newuser, setUser] = useState({
        email: "",
    })
    
        /**
     * This function is called when the "Update User" button is clicked. 
     * It shows successfully changed message if user decide to take available mail and updates his/her credential. This function has a communication with db. 
     */
    const userUpdate = () => {
        axios.put('http://localhost:5000/users/edit/'+user._id, newuser)
        .then((user) => console.log(user))
        let message = " Updated Successfully";         
            toast("✔️"+message,
                {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });    
    }
        /**
     * This function is called when the "Delete User" button is clicked. 
     * It shows successfully deleted message if user decide to delete his/her account. This function has a communication with db. 
     */
    const userDelete = () => {
        axios.delete('http://localhost:5000/users/edit/'+user._id)
        .then((res) => console.log(res.status))
        let message = " Deleted Successfully";         
        toast("✔️"+message,
            {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });   
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
            <div class ='col d-flex justify-content-center'>
                <div class='child'>
                <Card style={{ width: '10rem' }}> 
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />  
                    </Card>
                </div>
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
        <div class = 'parent'>
            <div class ='col d-flex justify-content-center'>
                <div class = 'child'>
                    <label>Email: &nbsp;</label> 
                    <input type="text" name="email" value={newuser.email} required onChange={handleChange}/><br/>
                    <div class = 'child'>
                        <div class = 'col d-flex justify-content-center'>
                        <h1><Button style = {{ width: "7rem" }} variant="light" className='btn btn-warning' onClick={userUpdate}>Update User</Button>
                        &nbsp;&nbsp;
                    </h1><h1>
                    <Button style = {{ width: "7rem"} } variant="dark" className='btn btn-danger' onClick={userDelete}>Delete User</Button>
                    </h1>
                    </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
  ) 
  
};

export default UserProfile;
