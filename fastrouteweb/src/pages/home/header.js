import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HeaderSection = () => {
  return (
    <Container fluid style={{ backgroundColor: '#F1E6DF', paddingLeft: '3%', paddingRight: '3%', height:'572px' }} className="pt-5">
      <Row className="align-items-center">
        <Col lg={6} style={{ paddingLeft: '10px', position: 'relative' }}>
          <div style={{ width: '749px', height: '114px', paddingLeft: '3%' }}>
            <h1 style={{ color: 'var(--Black, #000)', fontFamily: '', textAlign: 'left', fontSize: '42px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>
              Bridging Business and Transporters
            </h1>
            <h2 style={{ color: '#523B29', fontFamily: '', textAlign: 'left', fontSize: '42px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>
              Your Seamless Cargo Solution
            </h2>
            <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: '  ', textAlign: 'justify', fontSize: '25px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', width: '662px', height: 'auto' }}>
              {/* Lorem ipsum or your actual subheading content goes here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum justo sit amet libero ultricies.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: -15, left: '6%', top:'' , transform: 'translateY(169px)', display: 'flex' }}>
  <img
    src="/Profile-pic-2.png" // Replace with actual image URL
    alt="Profile Image 1"
    className="img-fluid"
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
  <div style={{ display: 'flex', width: '80px', height: '80px', padding: '28px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', opacity: 0.7, background: 'var(--White, #FFF)', margin: '-20px -29px 0 -33px', position: 'relative', zIndex: 5 }}>
    <img
      src="/Thumbs-Up-Icon.svg" // Replace with actual image URL
      alt="Thumbs Up Icon"
      style={{ width: '50px', height: '50px', flexShrink: 0 }}
    />
  </div>
  <p style={{ color: 'var(--Black, #000)', fontFamily: 'Inter', fontSize: '25px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', margin: '10px 46px  0' }}>50k+</p>
    <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: 'Inter', fontSize: '18px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal', margin: 0 ,marginLeft:-102, marginTop:30}}>customers</p>

</div>

        </Col>

        <Col lg={6}>
          <div style={{ position: 'relative', top: '', zIndex: '1', overflow: 'hidden', height: '561px' ,margin:'-38px'}}>
            <img
              src="/Parcel-Delivery.png" // Replace with the actual image URL
              alt="Transporter Image"
              className="img-fluid"
              style={{ width: '441px', height: '643px', objectFit: 'cover', position: 'absolute', right: 0, bottom: 0, marginRight: '-20px' }}
            />
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default HeaderSection;
