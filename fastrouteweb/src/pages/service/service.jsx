import React from "react";
import "./service.css";
import Load from "../../pages/load-booking/load";
import Lorry from"../../pages//lorryBooking/LorryBooking";
import Insurance from"../../pages/CargoInsurance/CargoInsurance";
import Vehicle from"../../pages/vehicle-insurance/vehicle";
import Point from"../../pages/pointpickup/pointpage";
import Breakdown from './../breakdown/breakdownpg';
import Resting from "../../pages/restingpoints/RestingPoints"
import Washing from"../../pages/washingpts/washingpage";
import Servicing from './about';

const Service = () => {
    return(
        <div>
            <Servicing/>
            <Load/>
            <Lorry/>
            <Insurance/>
            <Vehicle/>
            <Point/>
            <Breakdown/>
            <Resting/>
            <Washing/>
        </div>
    )
}

export default Service;