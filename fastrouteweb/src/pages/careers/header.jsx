import React from "react";
import './career.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header-head">
                <h1 style={{fontWeight:'bold', marginLeft:'60px'}}>Becoming a part of our team</h1>
                <p style={{color:'#5C5C5C', textAlign:'start', marginLeft:'60px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>magna aliqua. Eiusmod labore et magna aliqua.</p>
            </div>
            <div className="header-image">
                <img src="/image 1.png" alt="image1" style={{marginRight:'20px'}}/>
                <img src="/image 2.png" alt="image1"style={{marginRight:'20px'}}/>
                <img src="/image 3.png" alt="image1"style={{marginRight:'20px'}}/>
            </div>
        </div>
    )
}

export default Header;