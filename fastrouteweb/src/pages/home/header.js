import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeaderSection.css'
const HeaderSection = () => {
  return (
    <Container fluid className="header-section pt-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="container-content">
            <h1>Bridging Business and Transporters</h1>
            <h2>Your Seamless Cargo Solution</h2>
            <p>
              {/* Lorem ipsum or your actual subheading content goes here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum justo sit amet libero ultricies.
            </p>
          </div>
          <div className="profile-images" style={{ position: 'relative', bottom: '128px', left: '6%', top:'' , transform: 'translateY(169px)', display: 'flex' }}>
  <img
    src="/Profile-pic-2.png" // Replace with actual image URL
    alt="Profile Image 1"
    className="img-fluid  " 
    style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '50%', margin: '-21px -39px 0 0', position: 'relative', zIndex: 1 }}
  />
  <img
    src="/Profile-pic-3.png" // Replace with actual image URL
    alt="Profile Image 2"
    className="img-fluid"
    style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '50%', margin: '-20px -38px 0 0', position: 'relative', zIndex: 2 }}
  />
  <img
    src="/Profile-pic-4.png" // Replace with actual image URL
    alt="Profile Image 3"
    className="img-fluid"
    style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '50%', margin: '-20px -36px 0 0', position: 'relative', zIndex: 3 }}
  />
  <img
    src="/Profile-pic-1.png" // Replace with actual image URL
    alt="Profile Image 4"
    className="img-fluid"
    style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '50%', margin: '-20px 0 0 0', position: 'relative', zIndex: 4 }}
  />
<div className="thumbs-up-icon">
              <img
                src="/Thumbs-Up-Icon.svg" // Replace with actual image URL
                alt="Thumbs Up Icon"
              />
            </div>
            <div className="customer-count">
              <h3>50k+</h3>
              <p>customers</p>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div className="transporter-image">
            <img
              src="/Parcel-Delivery.png" // Replace with the actual image URL
              alt="Transporter Image"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>  );
};

export default HeaderSection;
