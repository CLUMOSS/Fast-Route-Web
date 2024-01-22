import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Image } from 'react-bootstrap';
import CustomButton from '../../components/button/button';
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import './Washing.css'; // Import your CSS file

const Washing = () => {
  return (
    <Container fluid className="py-5" style={{ paddingLeft: '3%', paddingRight: '3%', backgroundColor: '#F1E6DF' }}>
      <Row className="align-items-center">
        <Col md={6} style={{ textAlign: 'left' }}>
          <div className="services-heading">
            <h1>
              Services
            </h1>
            <span>&</span>
            <h1>
              Washing Points
            </h1>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <span className="vertical-line"></span>
          <p className="services-paragraph">
            Securing cargo insurance is easy. Simply contact our team or log in to your account to explore your insurance options and get a quote today. Protect your cargo, protect your business.
          </p>
        </Col>
      </Row>

      {/* Exclusive Features */}
      <Row className="mt-5">
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <div className="feature-container">
            <img src="/fluent-mdl2_date-time.svg" alt="Feature 1" />
            <h4 className="feature-heading">24/7  Support</h4>
            <p className="feature-paragraph">
              We provide a range of coverage options, including liability coverage, collision coverage, comprehensive coverage, and more. You can choose the level of protection that suits your vehicle and budget.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <div className="feature-container">
            <img src="/game-icons_tow-truck.svg" alt="Feature 2" />
            <h4 className="feature-heading">Pickup and drop service</h4>
            <p className="feature-paragraph">
              We offer competitive insurance rates, ensuring you get the best value for your investment.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <div className="feature-container">
            <img src="/tdesign_money.svg" alt="Feature 3" />
            <h4 className="feature-heading">Competitive Pricing</h4>
            <p className="feature-paragraph">
              Our vehicle insurance policies are customizable to address specific vehicle types, values, and usage patterns.
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ backgroundColor: '#F1E6DF', padding: '20px' }}>
        <Col md={6}>
          <Form
            style={{
              width: '60%', // Adjust the width as needed
            }}
          >
            <h1 className="online-booking-heading">Online Service Booking</h1>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="tel" placeholder="Phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <InputGroup style={{ width: '30%', marginTop: '0px' }}>
                <FormControl type="text" placeholder="Type Of Vehicle" />
                <DropdownButton
                  variant="outline-secondary"
                  title={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 10 1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  }
                >
                  <Dropdown.Item href="#/action-1">Car</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Motorcycle</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Truck</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </Form.Group>
            <div className="button-container">
              <CustomButton></CustomButton>
            </div>
          </Form>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Image src="/car-service-1.png" alt="Your Image" className="service-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Washing;
