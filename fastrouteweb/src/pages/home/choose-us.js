import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WhyChooseUsSection = () => {
  return (
    <Container fluid className="bg-light pt-5" style={{paddingLeft:'3%',paddingRight:'3%'}}>
      <Container>
        {/* Why Choose Us Heading */}
        <Row className="mb-5">
          <Col md={6}>
            <h1 style={{ color: 'var(--Dark-Brown, #523B29)', fontFamily: '  ', fontSize: '35px', fontWeight: 700, lineHeight: 'normal' ,textAlign:'left'}}>
              Why Choose Us?
            </h1>
          </Col>
        </Row>

        {/* Two Columns - Image and Four Boxes */}
        <Row className="align-items-start"> {/* Adjusted to align items at the top */}
          {/* Left Column - Image with Question Mark */}
          <Col md={6}>
            <div className="text-center">
              {/* Image with Question Mark */}
              <img
                src="/group.svg" // Replace with the actual image URL
                alt="Question Mark Image"
                className="img-fluid"
                style={{ width: '46.667px', height: '70px', flexShrink: 0, marginBottom: '-2rem' ,paddingleft:"-21px"}} 
              />
              <img
                src="/question-mark.png" // Replace with the actual image URL
                alt="Question Mark Image"
                className="img-fluid"
                style={{ width: '700px', height: '500px', flexShrink: 0, marginTop: '-8rem' }}
              />
            </div>
          </Col>

          {/* Right Column - Four Boxes */}
          <Col md={6}>
            <div>
              {/* Box 1 */}
              <div style={{ display: 'flex', width: '110%', height: '60px', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '1px solid #000', background: 'var(--Cream, #F1E6DF)', boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.10) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginTop: '20px' ,textAlign:'center'}}>
                <p style={{ color: '#000', fontFamily: '  ', fontSize: '25px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal', margin: 0 ,paddingLeft:'80px'}}>
                  {/* Replace with actual content or lorem ipsum */}

                  Efficiency through Digital Integration                </p>
              </div>

              {/* Box 2, Box 3, Box 4 - Similar Structure */}
              {/* Repeat the structure for three more boxes */}
              {/* Box 2 */}
              <div style={{ display: 'flex', width: '110%', height: '60px', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '1px solid #000', background: 'var(--Cream, #F1E6DF)', boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.10) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginTop: '20px' }}>
                <p style={{ color: '#000', fontFamily: '  ', fontSize: '25px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal', margin: 0 ,paddingLeft:'100px'}}>
                  {/* Replace with actual content or lorem ipsum */}
                  Diverse Transporter Network
                </p>
              </div>
              

              {/* Box 3 */}
              <div style={{ display: 'flex', width: '110%', height: '60px', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '1px solid #000', background: 'var(--Cream, #F1E6DF)', boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.10) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginTop: '20px' }}>
                <p style={{ color: '#000', fontFamily: '  ', fontSize: '25px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal', margin: 0,paddingLeft:'100px' }}>
                  {/* Replace with actual content or lorem ipsum */}
                  Real-Time Tracking and Updates
                </p>
              </div>

              <div style={{ display: 'flex', width: '110%', height: '60px', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '1px solid #000', background: 'var(--Cream, #F1E6DF)', boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.10) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginTop: '20px', textAlign: 'center' }}>
                <p style={{ color: '#000', fontFamily: '  ', fontSize: '25px', fontWeight: 400, lineHeight: 'normal', margin: 0 ,paddingLeft:'170px'}}>
                  {/* Replace with actual content or lorem ipsum */}
                  Customer Support
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyChooseUsSection;
