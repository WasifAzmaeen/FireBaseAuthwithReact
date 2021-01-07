import React, { useState } from "react";
import { Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

const DashBoard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth("");
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout().then(() => {
        history.push("/login");
      });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container
      className="d-flex-align-items-center justify-content-center"
      style={{ minHeight: "100vh", marginTop: "5%", width: "40%" }}
    >
      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error ? (
              <Alert variant="danger">{JSON.stringify(error)}</Alert>
            ) : (
              ""
            )}
            <strong>Email :</strong>
            {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="Link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
