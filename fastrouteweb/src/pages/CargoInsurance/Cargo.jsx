import React from 'react';
import '../../styles/Cargo.css'
import Calendar1 from '../lorryBooking/Calendar';

const Cargo = () =>{
    return (
        <div className = "cargo py-5 border-bottom">
            <div className = "row flex mb-5">
                <div className = "heading col-5 px-5">Cargo Insurance</div>
                <div className = "col-7 pr-5 box">
                    <p className = "basic">Securing cargo insurance is easy. Simply contact our team or log in to your account to 
                    explore your insurance options and get a quote today. Protect your cargo, protect your business.</p>
                </div>
            </div>
            <div className = "subHeading px-5 mb-5">Benefits of Choosing Our Cargo Insurance:</div>
            <div className = "features row flex px-5">
                <div className = "feature col-4">
                    <img src = "Secure Payments Icon.png" alt = "Secure Payments"/>
                    <p className = "fh">Financial Protection</p>
                    <p className='ft'>Our insurance coverage ensures that you won't suffer financial losses in case of unexpected events.</p>
                </div>
                <div className = "feature col-4 px-4">
                    <img src = "Stopwatch Icon.png" alt = "Stopwatch"/>
                    <p className = "fh">Timely Claims Processing</p>
                    <p className='ft'>In the unfortunate event of a claim, our team will process it promptly, ensuring minimal disruption to your operations.</p>
                </div>
                <div className = "feature col-4">
                    <img src = "mdi.png" alt = "Mdi Coupon"/>
                    <p className = "fh">Expert Guidance</p>
                    <p className='ft'>We have a team of experienced professionals who can guide you through the insurance process and help you make informed decisions.</p>
                </div>
            </div>
            <div className = "row flex">
            <div className = "form px-5 my-5 col-7">
                <h5>Cargo Insurance</h5>
                <input name = "Name" placeholder = "Name" value = "Name" type = "'text" className = "field mb-3 px-3"/><br/>
                <input name = "Address" placeholder = "Address" value = "Address" type = "'text" className = "field mb-3 px-3"/><br/>
                <input name = "Shipping Address" placeholder = "Shipping Address" value = "Shipping Address" type = "'text" className = "field mb-3 px-3"/><br/>
                <input name = "Height" placeholder = "Height" value = "Height" type = "'text" className = "field1  mb-3 px-3 mr-2"/>
                <span className = "mul">X</span>
                <input name = "Width" placeholder = "Width" value = "Width" type = "'text" className = "field1 mb-3 px-3 mx-2"/>
                <span className = "mul"> X </span>
                <input name = "Depth" placeholder = "Depth" value = "Depth" type = "'text" className = "field1 mb-3 px-3"/><br/>
                <input name = "Cargo Weight" placeholder = "Cargo Weight" value = "Cargo Weight" type = "'text" className = "field1 mb-3 px-3 mr-4"/>
                <span className = "mul">Kg </span>
                <select name="Cargos" className = "field1 mb-3 px-2">
                    <option value="Type of Cargo">Type of Cargo</option>
                    <option value="cargo1">Cargo 1</option>
                    <option value="cargo2">Cargo 2</option>
                    <option value="cargo3">Cargo 3</option>
                </select>
                <br/><br/>
                <button className = "proceed"><span className='proceedText'>Proceed</span></button>
            </div>
            <div className = "col-5 my-5 py-5 cal">
                <div className = "mb-3">Select a Shipping date</div>
                <Calendar1></Calendar1>
            </div>
            </div>
            
        </div>
    );
}

export default Cargo;