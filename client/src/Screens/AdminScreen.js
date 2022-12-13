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
import '../center.css'

export const AdminScreen = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <div class="anchorContainer">
        <a href="/addmatch" className="btn btn-info" role="button">Add Match</a>
      </div>
      <div class="anchorContainer">
        <a href="/matches/editfixture" className="btn btn-info" role="button">Edit Fixture</a>
      </div>
      <div class="anchorContainer">
      <a href="/addreferee" className="btn btn-info" role="button">Add Referee</a>
      </div>
    </Container>
  );
}

export default AdminScreen;