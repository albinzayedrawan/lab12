import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const AdminControls = () => {
  return (
    <Container>
      <h2 className="my-4">Admin Controls</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Manage Users</Card.Title>
          <Card.Text>
            View, edit, and delete user accounts.
          </Card.Text>
          <Button variant="primary">Go to User Management</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Site Settings</Card.Title>
          <Card.Text>
            Configure site-wide settings and preferences.
          </Card.Text>
          <Button variant="primary">Go to Site Settings</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Analytics</Card.Title>
          <Card.Text>
            View site analytics and reports.
          </Card.Text>
          <Button variant="primary">Go to Analytics</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminControls;