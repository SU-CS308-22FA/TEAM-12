import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const HomeScreen = ({ user }) => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="text-center mt-4">
            <h1 className="mb-4">Welcome to RefSta</h1>
            <Alert variant="light">
              <h4 className="mb-0">
                Thank you for choosing RefSta, {user?.fullname}!
              </h4>
            </Alert>
            <p>
              RefSta is a powerful and easy-to-use tool for organizing, citing,
              and sharing your research references.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <Link to="/matches" className="btn btn-info mr-4 mb-4">
                Matches
              </Link>
              &nbsp;
              &nbsp;
              <Link to="/referees" className="btn btn-secondary mr-4 mb-4">
                Referees
              </Link>
              &nbsp;
              &nbsp;
              <Link to="/standings" className="btn btn-secondary mr-4 mb-4">
                Standings
              </Link>
              &nbsp;
              &nbsp;
              <Link to="/teams" className="btn btn-info mb-4">
                Teams
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Link to="/signin" className="btn btn-light mr-4 mb-4">
                Log In
              </Link>
              &nbsp;
              &nbsp;
              <Link to="/signup" className="btn btn-light mb-4">
                Sign Up
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
