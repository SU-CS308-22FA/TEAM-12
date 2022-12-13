import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { toast } from 'react-toastify'
import { login } from '../axios';

export const AuthScreen = ({setUser}) => {
  const navigate = useNavigate();
  const[formData,setFormData]= useState({
    email:"",
    password:"",
  });
  return (
    <Container>
    <Form onSubmit={(e)=>{
      e.preventDefault()

      login(formData)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setUser(res.data.user);       
        console.log(res.data.user)
        if(res.data.user.userType==="USER"){
          navigate("/UserProfile");
        }
        else{
          navigate("/adminpanel");
        }
      })
        .catch((err)=> {
          console.log(err.response.data);           
          let message = err.response.data.message;         
          toast("❌"+message,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });    
        })
    }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" placeholder="Password" />
      </Form.Group>
      

      <Form.Group className="d-grid">
              <Button disabled={formData.email==="" || formData.password===""} type="submit" variant="primary" size="lg">
                Sign In
              </Button>
              <Form.Text className="text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </Form.Text>
      </Form.Group>
    </Form>
    </Container>
  );
}

export default AuthScreen;