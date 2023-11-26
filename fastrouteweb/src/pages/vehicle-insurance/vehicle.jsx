import React from "react";
import Insurance  from "./insurance";
import Footer from "../../components/common/Footer/footer";
import Navbar from "../../components/common/Navbar/Navbar";

const VEHICLE = () => {
    return(
        <div>
        <Navbar></Navbar>
        <Insurance></Insurance>
        <Footer></Footer>
        </div>
  )        
}

export default VEHICLE;