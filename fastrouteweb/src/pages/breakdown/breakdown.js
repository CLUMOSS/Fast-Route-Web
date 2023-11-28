import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Breakdown = () => {
  return (
    <Container fluid className="bg py-5" style={{ paddingLeft: '3%', paddingRight: '3%' ,backgroundColor:'#F1E6DF'}}>
      <Row className="align-items-center">
        <Col md={6} style={{ textAlign: 'left' }}>
          <div>
            <h1 style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '30px', fontWeight: 500, lineHeight: 'normal' }}>
              Breakdown Assistance 24/7
            </h1>
          </div>

          {/* Left side content */}
        </Col>
        <Col md={6} className="d-flex align-items-center">
          {/* Right side content */}
          <span style={{ color: '#523B29', fontFamily: '', fontSize: '50px', fontWeight: 700, lineHeight: 'normal' }}>|</span>
          <p style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            {/* Replace this with your actual content  */}
            We offer comprehensive vehicle insurance services tailored to meet the unique needs of our clients.
          </p>
        </Col>
      </Row>

      {/* Additional Columns */}
      <Row className="mt-5">
        {/* First Column */}
        <Col md={4} className="d-flex flex-column align-items-start">
          <div style={{ color: 'var(--Black, #000)', fontFamily: 'Inter', fontSize: '60px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', width: '513px' ,textAlign:'left' }}>
            24/7 live chat support if you need a hand
          </div>
          <div style={{ color: 'var(--Gray, #5C5C5C)', textAlign: 'justify', fontFamily: 'Inter', fontSize: '25px', fontWeight: 400, lineHeight: 'normal', width: '443px' }}>
            If you ever need a hand, our team is here to help & usually responds on live chat within a minute
          </div>
        </Col>

        {/* Second Column */}
        <Col md={4} className="d-flex flex-column align-items-center" style={{position:'relative',left:"55px"}}>
          <div style={{ display: 'inline-flex', height: '137px', padding: '0px 88px 0px 89px', justifyContent: 'center', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '0.5px solid var(--Black, #000)', background: 'var(--White, #FFF)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' ,position:'relative' ,top: '-1rem' }}>
          <p style={{ margin: '0', color: '#000', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>Knowledge Base </p>
          </div>
          <div style={{ display: 'inline-flex', height: '137px', padding: '0px 88px 0px 89px', justifyContent: 'center', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '0.5px solid var(--Black, #000)', background: 'var(--White, #FFF)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' ,position:'relative' ,top: '1rem'}}>
          <p style={{ margin: '0', color: '#000', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>24/7 Live Chat Support</p>
          </div>
          <div style={{ display: 'inline-flex', height: '137px', padding: '0px 88px 0px 89px', justifyContent: 'center', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '0.5px solid var(--Black, #000)', background: 'var(--White, #FFF)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' ,position:'relative' ,top: '2rem'}}>
          <p style={{ margin: '0', color: '#000', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>Video Guides</p>
          </div>
        </Col>

        <Col md={4} className="d-flex flex-column align-items-center" style={{ position: 'relative', left: '26px' }}>
          <div style={{ display: 'inline-flex', padding: '16px 27px 60px 28px', flexDirection: 'column', alignItems: 'center', gap: '56px', borderRadius: '10px', border: '0.5px solid var(--Black, #000)', background: 'var(--White, #FFF)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset', position: 'relative', top: '-1rem' }}>
            <p style={{ margin: '0', color: '#000', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>How can we help you?</p>

            <div style={{ width: '229px', height: '139px', flexShrink: 0, borderRadius: '8px', border: '5px solid #000', background: '#D0B5B5' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none" style={{position: "relative",top: '29px',
    left:'63px' 
}}>
                <path opacity="0.2" d="M53.4571 33.1144L19.8019 54.3795C19.5211 54.5557 19.2002 54.6522 18.8717 54.6594C18.5432 54.6665 18.2187 54.5841 17.9309 54.4204C17.6431 54.2566 17.4021 54.0174 17.2324 53.7268C17.0626 53.4362 16.97 53.1045 16.9639 52.7651V10.2349C16.97 9.89556 17.0626 9.56384 17.2324 9.27322C17.4021 8.98261 17.6431 8.74338 17.9309 8.57965C18.2187 8.41593 18.5432 8.3335 18.8717 8.34067C19.2002 8.34785 19.5211 8.44437 19.8019 8.62052L53.4571 29.8856C53.726 30.0537 53.9483 30.2906 54.1026 30.5734C54.2569 30.8562 54.3379 31.1754 54.3379 31.5C54.3379 31.8247 54.2569 32.1438 54.1026 32.4266C53.9483 32.7094 53.726 32.9463 53.4571 33.1144Z" fill="black" />
                <path d="M54.4307 28.2398L20.7756 6.96989C20.2081 6.61093 19.5583 6.41497 18.893 6.40224C18.2278 6.38952 17.5713 6.56048 16.9915 6.89749C16.4171 7.22926 15.9386 7.7131 15.6053 8.29925C15.2719 8.88539 15.0957 9.55269 15.0947 10.2325V52.7675C15.0991 53.7873 15.4952 54.7635 16.196 55.4817C16.8968 56.1998 17.845 56.6011 18.8321 56.5972C19.5211 56.5969 20.1967 56.4007 20.7849 56.0301L54.4307 34.7602C54.9716 34.4197 55.4185 33.9412 55.7287 33.3706C56.0388 32.8001 56.2017 32.1568 56.2017 31.5024C56.2017 30.8481 56.0388 30.2047 55.7287 29.6342C55.4185 29.0637 54.9716 28.5852 54.4307 28.2446V28.2398ZM18.8321 52.7216V10.2639L52.4289 31.5L18.8321 52.7216Z" fill="black" />
              </svg>
            </div>
          </div>
          <div style={{ display: 'inline-flex', height: '137px', padding: '0px 88px 0px 89px', justifyContent: 'center', alignItems: 'center', flexShrink: 0, borderRadius: '10px', border: '0.5px solid var(--Black, #000)', background: 'var(--White, #FFF)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <p style={{ margin: '0', color: '#000', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>Email Support</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Breakdown;
