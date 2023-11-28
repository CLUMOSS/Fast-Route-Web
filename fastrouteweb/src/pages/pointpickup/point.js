import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import CustomButton from '../../components/button/button';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/footer';

const Point = () => {
  return (
    <div>
      <Container fluid className="pt-5" style={{ paddingLeft: '3%', paddingRight: '6%', backgroundColor: 'white' ,marginBottom:'-36rem'}}>
      <Row className="align-items-center">
        {/* First Section */}
        <Col md={6} style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '38px', fontWeight: 500, lineHeight: 'normal' }}>
              Point-point Pickup &  
            </h1>
          </div>
          <div>
            <h1 style={{ color: 'var(--Black, #000)', fontFamily: '', fontSize: '28px', fontWeight: 500, lineHeight: 'normal' }}>
              Drop Of loads intercity
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ paddingTop:'20px'}}>
              <h1 style={{ color: 'var(--Black, #000)', fontFamily: 'Inter', fontSize: '22px', fontWeight: 600, lineHeight: 'normal', width: '250px', display: 'flex', alignItems: 'center' }}>
                Pamela Andreus                          
                <span style={{
                  width: '37px',
                  height: '37px',
                  flexShrink: 0,
                  borderRadius: '40px',
                  background: 'var(--Light-Gray, #E7E7E7)',
                  display: 'inline-block',
                  marginLeft: '10px'
                  
                }}>
                  {/* Down Arrow SVG - Replace the link below with your SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" style={{ width: '100%', height: '100%' }}>
                    <path d="M6 12L18.5 24.5L31 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </h1>
            </div>
          </div>        </Col>
        <Col md={6} className="d-flex justify-content-end">
          {/* Right side content */}
          <span style={{ color: '#523B29', fontFamily: '', fontSize: '50px', fontWeight: 700, lineHeight: 'normal' }}>|</span>
          <p style={{ color: 'var(--Gray, #5C5C5C)', fontFamily: '', fontSize: '18px', textAlign: 'justify', fontWeight: 400, lineHeight: 'normal' }}>
            {/* Replace this with your actual content */}
            Securing cargo insurance is easy. Simply contact our team or log in to your account to explore your insurance options and get a quote today. Protect your cargo, protect your business.
          </p>
        </Col>
      </Row>
      {/* Comment Box */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' ,position: 'relative',
    left: '25px'}}>
        {/* Your Comment Box SVG */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M0.666668 14C0.666668 21.3638 6.6362 27.3333 14 27.3333C21.3638 27.3333 27.3333 21.3638 27.3333 14C27.3333 6.6362 21.3638 0.666668 14 0.666668C6.6362 0.666668 0.666668 6.6362 0.666668 14ZM14 16.5H15V11.5H14V16.5Z" fill="#D0B5B5"/>
</svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="117" viewBox="0 0 28 117" fill="none" style={{ width: '28px', height: '117px', flexShrink: 0, stroke: '#D0B5B5', strokeWidth: '5px' }}>
          <path d="M13.8693 89.6673C6.50584 89.7395 0.595117 95.7673 0.667308 103.131C0.739498 110.494 6.76727 116.405 14.1307 116.333C21.4942 116.261 27.4049 110.233 27.3327 102.869C27.2605 95.5058 21.2327 89.5951 13.8693 89.6673ZM10.5001 1.02451L11.5001 103.025L16.4999 102.975L15.4999 0.975491L10.5001 1.02451Z" fill="#D0B5B5" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="50" viewBox="0 0 139 50" fill="none" style={{ width: '139px', height: '50px', flexShrink: 0 }}>
          <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" fill="white" />
          <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" strokeWidth="0.5" />
          {/* Text on the Comment Box */}
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
            Last Stop
          </text>
        </svg>
        {/* Small Box with 7:15 */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '10px', border: '2px solid #2393D1', borderRadius: '5px', padding: '5px' , height :'25px',width:'61px'  }}>
          <p style={{ color: '#2393D1', textAlign: 'justify', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', margin: '0'}}>7:15 AM</p>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left', fontFamily: 'Inter', fontSize: '18px', color: 'var(--Gray, #5C5C5C)' ,position: 'relative',
    top: '-75px',
    left: '49px'}}>
        125 St Louis Street, Olympia, WA 98512
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' ,position: 'relative',
    top: '-80px',left:'26px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="117" viewBox="0 0 28 117" fill="none" style={{ width: '28px', height: '117px', flexShrink: 0, stroke: '#D0B5B5', strokeWidth: '5px' }}>
          <path d="M13.8693 89.6673C6.50584 89.7395 0.595117 95.7673 0.667308 103.131C0.739498 110.494 6.76727 116.405 14.1307 116.333C21.4942 116.261 27.4049 110.233 27.3327 102.869C27.2605 95.5058 21.2327 89.5951 13.8693 89.6673ZM10.5001 1.02451L11.5001 103.025L16.4999 102.975L15.4999 0.975491L10.5001 1.02451Z" fill="#D0B5B5" />
        </svg>

      
        {/* Your Comment Box SVG */}        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="58" viewBox="0 0 147 58" fill="none">
          <g filter="url(#filter0_di_157_1788)">
            <rect x="4" width="139" height="50" rx="10" fill="#F1E6DF"/>
            <rect x="4.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" stroke-width="0.5"/>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
              Next Stop
            </text>
          </g>
          <defs>
            <filter id="filter0_di_157_1788" x="0" y="0" width="147" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_157_1788"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_157_1788" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_157_1788"/>
            </filter>
          </defs>
        </svg>

        {/* Small Box with 7:15 */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '10px', border: '2px solid #2393D1', borderRadius: '5px', padding: '5px' , height :'25px',width:'61px'}}>
          <p style={{ color: '#2393D1', textAlign: 'justify', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', margin: '0' }}>7:15 AM</p>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left', fontFamily: 'Inter', fontSize: '18px', color: 'var(--Gray, #5C5C5C)' ,position: 'relative',
    top:'-157px' ,
    left: '56px'}}>
      32 Bringhton Ln, Colchser, VT, 05446      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' ,position:'relative', 
    top: '-174px',
    left: '64px'}}>

        {/* Your Comment Box SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="50" viewBox="0 0 139 50" fill="none" style={{ width: '139px', height: '50px', flexShrink: 0 }}>
          <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" fill="white" />
          <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" strokeWidth="0.5" />
          {/* Text on the Comment Box */}
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
            Your Stop
          </text>
        </svg>
        {/* Small Box with 7:15 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', marginLeft: '10px', border: '2px solid #2393D1', borderRadius: '5px', padding: '5px', width: '68px', height :'25px',width:'61px' }}>
          <p style={{ color: '#2393D1', textAlign: 'justify', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', margin: '0' }}>7:15 AM</p>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left', fontFamily: 'Inter', fontSize: '18px', color: 'var(--Gray, #5C5C5C)' ,position:'relative' ,
    top: '-179px',
    left: '57px'}}>
      91 Queen Street, Colchser,VT, 05448 
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
              <div style={{ display: 'inline-flex', padding: '19px 50px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '10px', background: 'var(--Medium-Brown, #724E31)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginTop: '' }}>
        <p style={{ color: 'white', fontFamily: 'Inter', fontSize: '18px', fontWeight: 600, lineHeight: 'normal', margin: '0' }}>Get Directions</p>
        {/* You can replace the text above with an SVG for the icon if needed */}
      </div>

      </div>
      <Image src="/delivery.png" alt="Your Image" style={{ width: '800px', height: '800 px', flexShrink: 0, position: 'relative', top: '-687px', left: '390px' }} />

      {/* New Section */}
      <Row className="mt-5 align-items-center" style={{ position: 'relative', top: '-808px',left:'-76px',marginBottom:'-65px' }}>
        {/* Image on the Left */}
        <Col md={6}>
          <Image src="/map-1.png" alt="Left Image" style={{ width: '614px', height: '410px', flexShrink: 0 }} />
        </Col>
        {/* Text on the Right */}
        <Col md={6}>
          <h1 style={{ color: 'var(--Black, #000)', fontFamily: 'Inter', fontSize: '60px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', textAlign: 'left' }}>
            Schedule Easy
          </h1>
          <h1 style={{ color: 'var(--Dark-Brown, #523B29)', fontFamily: 'Inter', fontSize: '45px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', textAlign: 'left' }}>
            Pickup & Dropped Off
          </h1>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default Point;
