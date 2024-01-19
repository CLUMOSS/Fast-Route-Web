import React from "react";
import "./service.css"

const Servicing = () => {
    return (
        <div className="about">
        <div className="head">
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eiusmod labore et magna aliqua.</p>
        </div>
        <div>
            <div className="btns">
              <button type="button" className="btn">Online load booking</button>
              <button type="button" className="btn">Lorry Booking</button>
              <button type="button" className="btn">Cargo Insurance</button>
              <button type="button" className="btn">Vehicle Insurance</button>
              <button type="button" className="btn">Point-point pick up Drops of loads intercity</button>
              <button type="button" className="btn">Breakdown assistance 24/7</button>
              <button type="button" className="btn">Vehicle Washing Points</button>
              <button type="button" className="btn">Vehicle Resting Points</button>
              <button type="button" className="btn">Vehicle Service Points</button>
              <button type="button" className="btn">Drop of loads intercity</button>

            </div>
            <div className="btn-img">
                <img src="yay.png" alt="yay" />
            </div>
        </div>
        </div>
    )
}

export default Servicing;