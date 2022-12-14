import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const RefereeDis = () => {
    const [referee, setReferee] = useState({ })
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/referees/${id}`)
        .then(response => setReferee(response.data))
    }, [])

    return (
        <div>
          <h1>Referee Details</h1>
          <p>Name: {referee.refName} {referee.refSurname}</p>
          <p>Matches: {referee.matchNum}</p>
          <p>Red Cards: {referee.rcpg}</p>
          <p>Yellow Cards: {referee.ycpg}</p>
          <p>Offside Calls: {referee.offsidepg}</p>
        </div>
      )
    }
    
    export default RefereeDis;


    /*import React from 'react';
import './RefereeDis.css';

const RefereeDis = ({ referee }) => {
  return (
    <div className="referee-dis">
      <h1>Referee Details</h1>
      <div className="referee-info">
        <h2>Name:</h2>
        <p>{referee.refName} {referee.refSurname}</p>
        <h2>Matches:</h2>
        <p>{referee.matchNum}</p>
        <h2>Red Cards:</h2>
        <p>{referee.rcpg}</p>
        <h2>Yellow Cards:</h2>
        <p>{referee.ycpg}</p>
        <h2>Offside Calls:</h2>
        <p>{referee.offsidepg}</p>
      </div>
    </div>
  );
};

export default RefereeDis; */
