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

export const AdminScreen = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <a href="/addmatch" className="btn btn-info" role="button">Add Match</a>
    </Container>
  );
}

export default AdminScreen;