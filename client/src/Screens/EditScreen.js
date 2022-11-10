import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';



export const EditScreen = ({user}) => {
    const [newuser, setUser] = useState({
        email: "",
        password: ""
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
  return (
    <div>
        <label>Email: </label>
        <input type="text" name="email" value={newuser.email} required onChange={handleChange}/><br/>

        <Button className='btn btn-warning' onClick={userUpdate}>Update User</Button>
        <Button className='btn btn-danger' onClick={userDelete}>Delete User</Button>
    </div>
  );
}

export default EditScreen;