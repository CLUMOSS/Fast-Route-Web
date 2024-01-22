import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './point.css'
const Point = () => {
  return (
    <div>
      <Container fluid className="pt-5" style={{ paddingLeft: '3%', paddingRight: '6%', backgroundColor: 'white', marginBottom: '-36rem' }}>
        <Row className="align-items-center">
          {/* First Section */}
          <Col md={6} style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className="point-heading1">Point-point Pickup &</h1>
              <h1 className="point-heading2">Drop Of loads intercity</h1>
            </div>
            <div className="point-author">
              <h1>Pamela Andreus</h1>
              <div className="author-arrow">
                {/* Down Arrow SVG - Replace the link below with your SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                  <path d="M6 12L18.5 24.5L31 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            {/* Right side content */}
            <span className="point-divider">|</span>
            <p className="point-paragraph">
              {/* Replace this with your actual content */}
              Securing cargo insurance is easy. Simply contact our team or log in to your account to explore your insurance options and get a quote today. Protect your cargo, protect your business.
            </p>
          </Col>
        </Row>

        {/* Comment Box */}
        <div className="comment-box">
          {/* Your Comment Box SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="117" viewBox="0 0 28 117" fill="none" className="comment-svg">
            <path d="M13.8693 89.6673C6.50584 89.7395 0.595117 95.7673 0.667308 103.131C0.739498 110.494 6.76727 116.405 14.1307 116.333C21.4942 116.261 27.4049 110.233 27.3327 102.869C27.2605 95.5058 21.2327 89.5951 13.8693 89.6673ZM10.5001 1.02451L11.5001 103.025L16.4999 102.975L15.4999 0.975491L10.5001 1.02451Z" fill="#D0B5B5" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="50" viewBox="0 0 139 50" fill="none" className="comment-box-svg">
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" fill="#F1E6DF" />
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" strokeWidth="0.5" />
            {/* Text on the Comment Box */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
              Last Stop
            </text>
          </svg>

          {/* Small Box with 7:15 */}
          <div className="comment-time-box">
            <p>7:15 AM</p>
          </div>
        </div>
        <div className="comment-address">
          125 St Louis Street, Olympia, WA 98512
        </div>

        {/* Next Stop */}
        <div className="comment-box">
          {/* Your Comment Box SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="117" viewBox="0 0 28 117" fill="none" className="comment-svg">
            <path d="M13.8693 89.6673C6.50584 89.7395 0.595117 95.7673 0.667308 103.131C0.739498 110.494 6.76727 116.405 14.1307 116.333C21.4942 116.261 27.4049 110.233 27.3327 102.869C27.2605 95.5058 21.2327 89.5951 13.8693 89.6673ZM10.5001 1.02451L11.5001 103.025L16.4999 102.975L15.4999 0.975491L10.5001 1.02451Z" fill="#D0B5B5" />
          </svg>

          {/* Your Comment Box SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="50" viewBox="0 0 139 50" fill="none" className="comment-box-svg">
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" fill="white" />
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" strokeWidth="0.5" />
            {/* Text on the Comment Box */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
              Next Stop
            </text>
          </svg>

          {/* Small Box with 7:15 */}
          <div className="comment-time-box">
            <p>7:15 AM</p>
          </div>
        </div>
        <div className="comment-address">
          32 Bringhton Ln, Colchser, VT, 05446
        </div>

        {/* Your Stop */}
        <div className="comment-box">
          {/* Your Comment Box SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="50" viewBox="0 0 139 50" fill="none" className="comment-box-svg">
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" fill="white" />
            <rect x="0.25" y="0.25" width="138.5" height="49.5" rx="9.75" stroke="black" strokeWidth="0.5" />
            {/* Text on the Comment Box */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter" fontSize="18px" fill="var(--Black, #000)">
              Your Stop
            </text>
          </svg>

          {/* Small Box with 7:15 */}
          <div className="comment-time-box">
            <p>7:15 AM</p>
          </div>
        </div>
        <div className="comment-address">
          91 Queen Street, Colchser, VT, 05448
        </div>

        {/* Get Directions Button */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginBottom: '-65px' }}>
          <div className="get-directions-button">
            <p>Get Directions</p>
          </div>
        </div>

        {/* Delivery Image */}
        <Image src="/delivery.png" alt="Your Image" style={{ width: '800px', height: '800 px', flexShrink: 0, position: 'relative', top: '-687px', left: '390px' }} />

        {/* New Section */}
        <Row className="mt-5 align-items-center" style={{ marginBottom: '-65px' , position: 'relative', top: '-808px',marginBottom:'-65px' }}>
          {/* Image on the Left */}
          <Col md={6}>
          <Image src="/map-1.png" alt="Left Image" style={{ width: '614px', height: '410px', flexShrink: 0 }} />
          </Col>
          {/* Text on the Right */}
          <Col md={6} className="text-on-right">
            <h1 className="point-heading1">Schedule Easy</h1>
            <h1 className="point-heading2">Pickup & Dropped Off</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Point;
