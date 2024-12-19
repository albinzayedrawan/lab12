import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminControls from './components/AdminControls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isAuthenticated: false,
      userRole: null, // 'user' or 'admin'
      currentPage: 'blog', // 'blog', 'profile', 'admin'
      email: '' // Store the email of the logged-in user
    };
  }

  handleLogin = (username, password) => {
    // Simple authentication logic
    if (username === 'admin' && password === 'admin') {
      this.setState({ isAuthenticated: true, userRole: 'admin', email: 'admin@example.com' });
    } else if (username === 'user' && password === 'user') {
      this.setState({ isAuthenticated: true, userRole: 'user', email: 'user@example.com' });
    } else {
      alert('Invalid credentials');
    }
  }

  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      userRole: null,
      currentPage: 'blog',
      email: ''
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleNavClick = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Login onLogin={this.handleLogin} />;
    }

    return (
      <Container fluid style={{ padding: 0 }}>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.handleNavClick('profile')}>Profile</Nav.Link>
              {this.state.userRole === 'admin' && (
                <Nav.Link onClick={() => this.handleNavClick('admin')}>Admin Controls</Nav.Link>
              )}
              {this.state.userRole === 'user' && (
                <Nav.Link onClick={() => this.handleNavClick('blog')}>Blog</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.state.currentPage === 'blog' && this.state.userRole === 'user' && (
          <Container>
            <h1 className="my-4">Blog Posts</h1>
            <Row>
              {this.state.data.map(item => (
                <Col md={4} key={item.id}>
                  <Card className="mb-4">
                    <Card.Header className="bg-primary text-white">
                      {item.title}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{item.body}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
        {this.state.currentPage === 'profile' && (
          <Profile email={this.state.email} accountType={this.state.userRole} handleLogout={this.handleLogout} />
        )}
        {this.state.currentPage === 'admin' && this.state.userRole === 'admin' && <AdminControls />}
      </Container>
    );
  }
}

export default App;