import React from "react";
import Navbar from '../../components/common/Navbar/Navbar'
import Booking from './booking';
import Footer from '../../components/common/Footer/footer';

const Load = () => {
    return(
        <div>
        <Navbar></Navbar>
        <Booking></Booking>
        <Footer></Footer>
        </div>
    )
}

export default Load;