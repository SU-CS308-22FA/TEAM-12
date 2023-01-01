import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import '../clubs.css'

export const StandingsScreen = () => {
    const [standings, setStandings] = useState([ ])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/standings`)
        .then(response => setStandings(response.data))
    }, [])

    return (
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Position</th>  
                <th>Team</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Points</th>
                </tr>
            </thead>
            <tbody>
                    {standings.map(standings => 
                    <tr>

                        <td>{standings.position}</td>

                        <td ><img src={standings.teamLogo} width="40" height="40"></img> {standings.teamName} </td>
                        
                        

                        <td >{standings.wins}</td>

                        <td >{standings.draws}</td>

                        <td >{standings.losses}</td>

                        <td >{standings.points}</td>

                                    
                    </tr>
                    )}
                </tbody>
            </Table>
        );
    }

/*export class StandingsScreen extends React.Component {
  state = {
    standings: []
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/standings`)
      .then((res) => {
        this.setState({ standings: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {this.state.standings.map((team) => (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}*/

export default StandingsScreen;

