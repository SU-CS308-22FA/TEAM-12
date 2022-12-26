import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { matchAdd } from '../axios';


export const AddMatchScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    homeTeam: "",
    awayTeam: "",
    referee: "",
    date: "",
    score: "-",
    homeTeamURL: "",
    awayTeamURL:""
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              matchAdd(formData)
                .then((res) => {
                  navigate("/adminpanel");
                })
                .catch((err) => {
                  console.log(err.response.data);                                      
                });
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicAwayTeam">
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, homeTeam: e.target.value })
                }
                type="homeTeam"
                placeholder="Enter the home team"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHomeTeam">
              <Form.Label>Away Team</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, awayTeam: e.target.value })
                }
                type="awayTeam"
                placeholder="Enter the away team"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicReferee">
              <Form.Label>Referee</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, referee: e.target.value })
                }
                type="referee"
                placeholder="Enter the referee of the match"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                type="date"
                placeholder="Enter the date of the match"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasichomeTeamURL">
              <Form.Label>Home Team URL</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, homeTeamURL: e.target.value })
                }
                type="homeTeamURL"
                placeholder="Enter the url of the home team logo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Away Team URL</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, awayTeamURL: e.target.value })
                }
                type="awayTeamURL"
                placeholder="Enter the url of the away team logo"
              />
            </Form.Group>   

            <Form.Group className="d-grid">
              <Button variant="primary" type="submit" className="mt-4">
                <Link className="text-white text-decoration-none" to="/adminpanel">
                  Add Match
                </Link>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div>
        <a href="/adminpanel" role="button">Admin Panel</a>
      </div>
    </Container>
    
  );
};

export default AddMatchScreen;