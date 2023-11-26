import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/footer';
import Booking from './Booking';

const LorryBooking = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Booking></Booking>
            <Footer></Footer>
        </div>
    );
}

export default LorryBooking;