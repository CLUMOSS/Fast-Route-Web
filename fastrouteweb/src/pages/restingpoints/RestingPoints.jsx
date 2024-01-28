import React from 'react';
import '../../styles/Resting.css';

const RestingPoints = () =>{
    return (
        <div className = "border-bottom" >
            <div className = "head row flex my-4">
           <h1 className = "col-4 px-5">Resting points</h1>
           
           <p className = "col-8 start"><span className='bar'>|</span> We offer comprehensive vehicle insurance services tailored to meet the unique needs of our clients.</p>
           </div>

           <div className = "resting row flex px-3 my-5">
                <div className = "text1 col-6 row flex">
                    <div className = "l col-3">
                    <img src = "restingLogo.png" alt ="logo"  />
                    </div>
                    <div className = "col-7  py-5">
                    <p className = "basic"><br/>Our Resting Points are everywhere! No matter where you are, we ensure safe and secure journey to reach your doorstep. </p>
                    <br/>
                    <br/><br/>
                    <button className = "locate"><span className = "locateText">Locate Our Centers</span></button>
                    </div>
                    <div className = "find px-5 mt-5 mb-5">
                        <span className = "nearest">Find our nearest Resting point</span><br/>
                        <span className = "shipping">Enter your shipping details and you will find us!</span>
                        <form className = "mt-5">
                            <input placeholder='Name' type = "text" className='field mb-3 px-3'/><br/>
                            <input placeholder='Shipping pincode' type = 'text' className = 'field mb-3 px-3'/><br/>
                            <button type =  'submit' className = 'pincodeButton mt-5'><span className = "pincodeText">Get details</span></button>
                        </form>
                    </div>
                </div>
                <div className = "text2 col-6">
                    <img src = "inventory.png" alt = "inventory store"/>
                    <br/>
                    <br/>
                    <img src = "map.png" alt = "map of fastroute centers" className = "map mt-5"/>
                </div>
           </div>
        </div>
    );
}

export default RestingPoints;