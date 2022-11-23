import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, Row, Col, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../axios";
import { toast } from 'react-toastify'

export const SignUpScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    favClub: "",
    favRef: "",
    email: "",
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              register(formData)
                .then((res) => {
                  navigate("/signin");
                })
                .catch((err) => {
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
                });
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                type="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Again</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password again"
              />
            </Form.Group>         
            <Form.Group className="mb-3" controlId="formBasicClub">
              <label for="favClub">Choose a club:</label>
              <select id="favClub" name="clublist" form="clubform">
                <option value="Beşiktaş">Beşiktaş</option>
                <option value="Galatasaray">Galatasaray</option>
                <option value="Fenerbahçe">Fenerbahçe</option>
                <option value="Trabzonspor">Trabzonspor</option>
                <option value="Başakşehir FK">Başakşehir FK</option>
                <option value="Konyaspor">Konyaspor</option>
                <option value="Sivasspor">Sivasspor</option>
                <option value="Kayserispor">Kayserispor</option>
                <option value="Antalyaspor">Antalyaspor</option>
                <option value="Alanyaspor">Alanyaspor</option>
                <option value="Gaziantep FK">Gaziantep FK</option>
                <option value="Giresunspor">Giresunspor</option>
                <option value="Kasımpaşa">Kasımpaşa</option>
                <option value="Ümraniyespor">Ümraniyespor</option>
                <option value="İstanbulspor">İstanbulspor</option>
                <option value="Hatayspor">Hatayspor</option>
                <option value="Adana Demirspor">Adana Demirspor</option>
                <option value="Fatih Karagümrük">Fatih Karagümrük</option>
                <option value="MKE Ankaragücü">MKE Ankaragücü</option>
              </select>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, favClub: e.target.value })
                }
                type="favClub"
                placeholder="Enter your selected favorite club"
              />

            </Form.Group>
              <p>
                
              </p>
            <Form.Group className="mb-3" controlId="formBasicRef">    
              <label for="favRef">Choose a referee:</label>
              <select id="favRef" name="reflist" form="refform">
                <option value="Ali Palabıyık">Ali Palabıyık</option>
                <option value="Ali Şansalan">Ali Şansalan</option>
                <option value="Arda Kardesler">Arda Kardesler</option>
                <option value="Volkan Bayarslan">Volkan Bayarslan</option>
                <option value="Yasar Kemal Ugurlu">Yasar Kemal Ugurlu</option>
                <option value="Mert Güzenge">Mert Güzenge</option>
                <option value="Abdulkadir Bitigen">Abdulkadir Bitigen</option>
                <option value="Ümit Öztürk">Ümit Öztürk</option>
                <option value="Bahattin Simsek">Bahattin Simsek</option>
                <option value="Mustafa Kürsad Filiz">Mustafa Kürsad Filiz</option>
                <option value="Kadir Saglam">Kadir Saglam</option>
                <option value="Atilla Karaoglan">Atilla Karaoglan</option>
                <option value="Zorbay Kücük">Zorbay Kücük</option>
                <option value="Hüseyin Göcek">Hüseyin Göcek</option>
                <option value="Suat Arslanboga">Suat Arslanboga</option>
                <option value="Mete Kalkavan">Mete Kalkavan</option>
                <option value="Sarper Baris Saka">Sarper Baris Saka</option>
                <option value="Cagdas Altay">Cagdas Altay</option>
                <option value="Tugay Kaan Numanoglu">Tugay Kaan Numanoglu</option>
                <option value="Burak Seker">Burak Seker</option>
                <option value="Yasin Kol">Yasin Kol</option>
              </select>

              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, favRef: e.target.value })
                }
                type="favRef"
                placeholder="Enter your selected favorite referee"
              />

            </Form.Group>
            <Form.Group className="d-grid">
              <Button variant="primary" type="submit" className="mt-4">
                <Link className="text-white text-decoration-none" to="/signin">
                  Sign Up
                </Link>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpScreen;