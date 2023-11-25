import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/footer';
import RestingPoints from './RestingPoints';

const Resting = () =>{
    return (
        <div>
            <Navbar></Navbar>
            <RestingPoints></RestingPoints>
            <Footer></Footer>
        </div>
    );
}

export default Resting;