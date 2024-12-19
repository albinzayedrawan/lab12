import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Profile = ({ email, accountType, handleLogout }) => {
  return (
    <Container>
      <h2 className="my-4">Profile</h2>
      <Card>
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            <strong>Account Type:</strong> {accountType}<br />
            <strong>Email:</strong> {email}
          </Card.Text>
          <Button variant="danger" onClick={handleLogout}>Log Out</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;