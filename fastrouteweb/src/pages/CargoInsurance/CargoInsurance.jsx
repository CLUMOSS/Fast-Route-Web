import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/footer';
import Cargo from './Cargo';

const CargoInsurance = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Cargo></Cargo>
            <Footer></Footer>
        </div>
    );
}

export default CargoInsurance;