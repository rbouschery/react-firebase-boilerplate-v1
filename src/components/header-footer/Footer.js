import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Bootstrap Components
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'


export const Footer = () => {
  return (
    <footer className="footer bg-white p-3 p-md-4 border-top">
    <Container>
        <Row>
          <Col className="col-12 col-md">
            <h4>Boilerplate</h4>
            <small className="text-muted">© 2019</small>
          </Col>
          <Col className="col-6 col-md">
              <h5>Legal</h5>
              <Nav className="flex-column">
                <Link className="nav-link p-0" to="/imprint">Imprint</Link>
                <Link className="nav-link p-0" to="/cookie-policy">Cookie Policy</Link>
                <Link className="nav-link p-0" to="/privacy-policy">Privacy Policy</Link>
              </Nav>
          </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default connect()(Footer)