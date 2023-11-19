import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ExclusiveSection = () => {
  return (
    <Container fluid className="bg-light py-5" style={{paddingLeft:'3%',paddingRight:'3%'}}>
      <Row className="align-items-center">
        <Col md={6} style={{textAlign:'left'}}>
        <div >
          <h1 style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '30px', fontWeight: 500, lineHeight: 'normal' }}>
            Get Exclusive Benefits
          </h1>
          <p style={{ color: 'var(--Dark-Brown, #523B29)', fontFamily: '', fontSize: '30px', fontWeight: 700, lineHeight: 'normal' }}>
            of our app
          </p>

        </div>

          {/* Left side content */}
        </Col>
        <Col md={6} className="d-flex align-items-center">
          {/* Right side content */}
          <span style={{ color: '#523B29', fontFamily: '', fontSize: '50px', fontWeight: 700, lineHeight: 'normal'}}>|</span>
          <p style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            {/* Replace this with your actual content or use lorem ipsum */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum justo sit amet libero ultricies, eget faucibus nunc hendrerit.
          </p>
        </Col>
      </Row>

      {/* Exclusive Features */}
      <Row className="mt-5">
        <Col  xs={12} md={4} className="d-flex flex-column align-items-center mb-4" >

          <div>
            {/* Icon for the first feature (replace with your icon) */}
            <img src="/Stopwatch-Icon.svg" alt="Feature 1" />
            <h4 style={{ color: 'var(--Black, #000)', fontFamily: ' ', fontSize: '20px', fontWeight: 600, lineHeight: 'normal' }}>
              Order Tracking
            </h4>
            <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: ' ', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             </p>
          </div>
        </Col>
        <Col  xs={12} md={4} className="d-flex flex-column align-items-center mb-4">

          <div>
            {/* Icon for the second feature (replace with your icon) */}
            <img src="/Secure-Payments-Icon.svg" alt="Feature 2" />
            <h4 style={{ color: 'var(--Black, #000)', fontFamily: ' ', fontSize: '20px', fontWeight: 600, lineHeight: 'normal' }}>
              Secure Payments
            </h4>
            <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: ' ', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             </p>
          </div>
        </Col>
        <Col xs={12} md={4}  className="d-flex flex-column align-items-center mb-4">

          <div>
            {/* Icon for the third feature (replace with your icon) */}
            <img src="/mdi_coupon-outline.svg" alt="Feature 3" />
            <h4 style={{ color: 'var(--Black, #000)', fontFamily: ' ', fontSize: '20px', fontWeight: 600, lineHeight: 'normal' }}>
              Exclusive Offers
            </h4>
            <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: ' ', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExclusiveSection;
