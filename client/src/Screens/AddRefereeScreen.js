import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { refereeAdd } from '../axios';


export const AddRefereeScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    refName: "",
    refSurname: "",
    matchNum: "",
    rcpg:"",
    ycpg:"",
    offsidepg:"",
    assist1:"",
    assist2:"",
    assist3:"",
    assist4:""
    
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              refereeAdd(formData)  
                .then((res) => {
                  navigate("/adminpanel");
                })
                .catch((err) => {
                  console.log(err.response.data);                                      
                });
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicRefName">
              <Form.Label>Referee Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, refName: e.target.value })
                }
                type="refName"
                placeholder="Enter referee name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRefSurname">
              <Form.Label>Referee Surname</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, refSurname: e.target.value })
                }
                type="refSurname"
                placeholder="Enter referee surname"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicMatchNum">
              <Form.Label>Number of Played Matches</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, matchNum: e.target.value })
                }
                type="matchNum"
                placeholder="Enter the number of matches referee played "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRed">
              <Form.Label>Red Card</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, rcpg: e.target.value })
                }
                type="rcpg"
                placeholder="Enter red card per game"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYellow">
              <Form.Label>Yellow Card Per Game</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, ycpg: e.target.value })
                }
                type="ycpg"
                placeholder="Enter yellow card per game"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOffside">
              <Form.Label>Offside PG</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, offsidepg: e.target.value })
                }
                type="offsidepg"
                placeholder="Enter offside per game"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Assistant">
              <Form.Label>Assistant Referee</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, assist1: e.target.value })
                }
                type="assist"
                placeholder="Enter assistent referee"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Assistant">
              <Form.Label>Assistant Referee</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, assist2: e.target.value })
                }
                type="assist"
                placeholder="Enter assistent referee"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Assistant">
              <Form.Label>Assistant Referee</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, assist3: e.target.value })
                }
                type="assist"
                placeholder="Enter assistent referee"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Assistant">
              <Form.Label>Assistant Referee</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, assist4: e.target.value })
                }
                type="assist"
                placeholder="Enter assistent referee"
              />
            </Form.Group>
            <Form.Group className="d-grid">
              <Button variant="primary" type="submit" className="mt-4">
                <Link className="text-white text-decoration-none" to="/adminpanel">
                  Add Referee
                </Link>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRefereeScreen;