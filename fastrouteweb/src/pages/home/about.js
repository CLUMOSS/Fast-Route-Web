import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUsSection = () => {
  return (
      <Container fluid style={{backgroundColor: '#F1E6DF' ,paddingLeft:'3%',paddingRight:'3%'}} className=" pt-5" >
        {/* About Us Heading */}
        <Row className="mb-5">
          <Col md={6} style={{textAlign:'left'}}>
            <h1 style={{ color: 'var(--Dark-Brown, #523B29)', fontFamily: '  ', fontSize: '35px', fontWeight: 700, lineHeight: 'normal' }}>
              About Us
            </h1>
          </Col>
        </Row>

        {/* What Our Section Offers */}
        <Row className="align-items-center">
        <Col md={6}>
            {/* Image */}
            <img
              src="/handsome-young-man.png" // Replace with the actual image URL
              alt="About Us Image"
              className="img-fluid"
              style={{ width: '649px', height: '419px', flexShrink: 0 }}
            />
          </Col>

          <Col md={6} >
            <div>
              <p style={{ color: 'var(--Gray, #5C5C5C)', textAlign: 'justify', fontFamily: '  ', fontSize: '28px', fontWeight: 400, lineHeight: 'normal' }}>
                At <span style={{ color: 'var(--Black, #000)', fontFamily: '  ', fontSize: '28px', fontWeight: 600, lineHeight: 'normal' }}>
                  FastRoute
                </span>
   , we bridge the gap between businesses and transporters by offering a platform that harbors collaboration, reliability, and speed.
   <p>       </p>
   <p>                We understand that the timely and secure delivery of products is essential for businesses to thrive in today's competitive market.
                Our vision is to empower businesses with a dependable network of transporters, ensuring their goods reach their customers in a timely and cost-effective manner, thereby revolutionizing the way to form connections.
</p>
              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default AboutUsSection;
