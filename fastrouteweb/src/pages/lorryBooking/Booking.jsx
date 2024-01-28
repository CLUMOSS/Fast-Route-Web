import React from 'react';
import '../../styles/LorryBooking.css';
import Calendar1 from './Calendar';

const Booking = () => {
  return (
    <div className="booking mb-5 pt-4">
      <div className="row flex">
        <div className="heading col-lg-4 col-md-12 px-5 ml-3 ml-md-5">
          <h1 className="">Lorry Booking</h1>
        </div>
        <p className="col-lg-8 col-md-12 basicText">
          <span className="bar">|</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore magna aliqua.
        </p>
      </div>
      <div className="form m-3 m-md-5">
        <form>
          <input className="field my-2 p-2" placeholder="Name" type="text" />
          <select name="Select type" id="lorry" className="px-3 mx-2 mx-md-5">
            <option value="option 1">
              <span className="font-weight-bold">Select Type</span>
            </option>
            <option value="lorry 1">Lorry 1</option>
            <option value="lorry 2">Lorry 2</option>
            <option value="lorry 3">Lorry 3</option>
          </select>
          <input className="field my-2 p-2" placeholder="Origin Address" type="text" />
          <br />
          <input className="field my-2 p-2" placeholder="Destination Address" type="text" />
          <br />
        </form>
      </div>
      <div className="row flex mr-0">
        <div className="cal mx-2 mx-md-5 col-12 col-md-5" style={{ position: "relative",
       left: "-10%"
}}>
          <Calendar1></Calendar1>
          <button type="submit" className="bookNow" style={{}}>
            <span className="bookText">Book</span>
          </button>
        </div>
        <div className="col-12 col-md-7">
          <img className="image" src="truck.png" alt="truck" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
