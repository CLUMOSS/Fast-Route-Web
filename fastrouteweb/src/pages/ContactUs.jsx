import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/ContactUs.css';

const ContactUs = () => {
    return(
        <div>
        <Navbar></Navbar>
        <div className = "contact">
        <img src = "/Receiver.png" alt = "receiver"/>
            <div className = "main my-5 mx-5 px-5">
                <h1 className = "heading px-3">Contact Us</h1>
                <h2 className = "main-text mx-4 my-4">At FastRoute we bridge the gap between businesses and transporters by offering a platform that harbors collaboration, reliability, and speed.</h2>
                <div className = "info my-5 py-5">
                    <div className = "px-5"><img src = "./Phone Icon.png" alt = "phone"></img>
                    <div><strong>Phone</strong>
                    <br/><br/>
                    <p>+91 87660 457XXX<br/> +91 98765 423XXX</p>
                    </div>
                    </div>
                    <div className = "mx-5 px-5"><img src = "./Location Icon.png" alt = "location"/>
                    <div><strong>Location <br/>FastRoute Company</strong>
                    <br/><br/>
                    <p>811 Indian Summer Rd.<br/>
                        Sun City, AZ 85351</p>
                    </div></div>
                </div>
            </div>
        </div>
        <div className = "follow my-5 py-5" style={{marginBottom:'0'}}>
            <div className = "col-3 fleft">
                <h2 className = "mx-5">Follow Us</h2>
                <div className='handles mx-5 py-2'>
                    <div className='handle my-3 mx-5 px-4 py-3'>
                        <img src = "./Instagram Icon.png" alt = "Instagram"></img><span className = "handletext mx-5">Instagram</span>
                    </div>
                    <div className='handle my-3 mx-5 px-4 py-3'>
                        <img src = "./Facebook Icon.png" alt = "Facebook"></img><span className = "handletext mx-5">Facebook</span>
                    </div>
                    <div className='handle my-2 mx-5 px-4 py-3'>
                        <img src = "./Vector.png" alt = "Twitter"></img><span className = "handletext mx-5">Twitter</span>
                    </div>
                </div>
            </div>
            <div className = "col-9 my-4 fleft">
            <p className = "basic mx-3"><span className = "bar">|</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3 className='knowMore mx-3'>To know About Us</h3>
            <button className = "about mx-3"><div className='aboutText'>About Us</div></button>
            </div>
        </div>
    </div>
    );
}

export default ContactUs;

