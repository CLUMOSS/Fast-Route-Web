import React from "react";
import "./load.css";
const Booking = () => {
    const isSmallScreen = () => window.innerWidth <= 768;

    return (
        <div className="book">
            {/*-------HEADING-------*/}
        <div className="book-head">
            <h1>Online Load Booking</h1>
        </div>

            {/*-------LOGO-------*/}
        <div className="book-logo">

        <div className="logo1">
        <div className="lg1">
             <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
             <path d="M40.93 5.56501C40.3331 5.32579 39.6669 5.32579 39.07 5.56501L9.23 17.5L40 29.805L70.77 17.5L40.93 5.56501ZM75 21.195L42.5 34.195V73.805L75 60.805V21.195ZM37.5 73.81V34.19L5 21.195V60.81L37.5 73.81ZM37.215 0.920011C39.0028 0.205008 40.9972 0.205008 42.785 0.920011L78.43 15.18C78.8934 15.3657 79.2906 15.686 79.5705 16.0995C79.8503 16.5129 79.9999 17.0007 80 17.5V60.81C79.9994 61.8091 79.6994 62.7851 79.1389 63.6122C78.5783 64.4392 77.7828 65.0793 76.855 65.45L40.93 79.82C40.3331 80.0592 39.6669 80.0592 39.07 79.82L3.15 65.45C2.22126 65.0801 1.42471 64.4403 0.86321 63.6132C0.301709 62.7861 0.00103165 61.8097 0 60.81L0 17.5C0.0001162 17.0007 0.149719 16.5129 0.429535 16.0995C0.709351 15.686 1.10656 15.3657 1.57 15.18L37.215 0.920011Z" fill="#523B29"/>
             </svg>
        </div>
        <div className="logo-name">
            <h4>Posting Load<br/>Dettails</h4>
        </div>
        </div>

        <div className="logo1">
        <div className="lg1">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M77.3187 36.5625L72.9437 25.625C72.5726 24.6996 71.9321 23.907 71.1053 23.3498C70.2784 22.7926 69.3033 22.4966 68.3063 22.5H57.5V20C57.5 19.337 57.2366 18.7011 56.7678 18.2322C56.2989 17.7634 55.663 17.5 55 17.5H7.5C6.17392 17.5 4.90215 18.0268 3.96447 18.9645C3.02678 19.9021 2.5 21.1739 2.5 22.5V57.5C2.5 58.8261 3.02678 60.0979 3.96447 61.0355C4.90215 61.9732 6.17392 62.5 7.5 62.5H12.8125C13.3633 64.651 14.6143 66.5576 16.3683 67.9191C18.1223 69.2806 20.2796 70.0196 22.5 70.0196C24.7204 70.0196 26.8777 69.2806 28.6317 67.9191C30.3857 66.5576 31.6367 64.651 32.1875 62.5H47.8125C48.3633 64.651 49.6143 66.5576 51.3683 67.9191C53.1223 69.2806 55.2796 70.0196 57.5 70.0196C59.7204 70.0196 61.8777 69.2806 63.6317 67.9191C65.3857 66.5576 66.6367 64.651 67.1875 62.5H72.5C73.8261 62.5 75.0979 61.9732 76.0355 61.0355C76.9732 60.0979 77.5 58.8261 77.5 57.5V37.5C77.5008 37.1787 77.4393 36.8603 77.3187 36.5625ZM57.5 27.5H68.3063L71.3062 35H57.5V27.5ZM7.5 22.5H52.5V42.5H7.5V22.5ZM22.5 65C21.5111 65 20.5444 64.7068 19.7221 64.1573C18.8999 63.6079 18.259 62.827 17.8806 61.9134C17.5022 60.9998 17.4031 59.9945 17.5961 59.0245C17.789 58.0546 18.2652 57.1637 18.9645 56.4645C19.6637 55.7652 20.5546 55.289 21.5245 55.0961C22.4945 54.9031 23.4998 55.0022 24.4134 55.3806C25.327 55.759 26.1079 56.3999 26.6573 57.2221C27.2068 58.0444 27.5 59.0111 27.5 60C27.5 61.3261 26.9732 62.5979 26.0355 63.5355C25.0979 64.4732 23.8261 65 22.5 65ZM47.8125 57.5H32.1875C31.6367 55.349 30.3857 53.4424 28.6317 52.0809C26.8777 50.7194 24.7204 49.9804 22.5 49.9804C20.2796 49.9804 18.1223 50.7194 16.3683 52.0809C14.6143 53.4424 13.3633 55.349 12.8125 57.5H7.5V47.5H52.5V51.3469C51.3504 52.0114 50.3442 52.8974 49.5395 53.9536C48.7349 55.0098 48.1479 56.2152 47.8125 57.5ZM57.5 65C56.5111 65 55.5444 64.7068 54.7221 64.1573C53.8999 63.6079 53.259 62.827 52.8806 61.9134C52.5022 60.9998 52.4031 59.9945 52.5961 59.0245C52.789 58.0546 53.2652 57.1637 53.9645 56.4645C54.6637 55.7652 55.5546 55.289 56.5245 55.0961C57.4945 54.9031 58.4998 55.0022 59.4134 55.3806C60.327 55.759 61.1079 56.3999 61.6573 57.2221C62.2068 58.0444 62.5 59.0111 62.5 60C62.5 61.3261 61.9732 62.5979 61.0355 63.5355C60.0979 64.4732 58.8261 65 57.5 65ZM72.5 57.5H67.1875C66.6301 55.3542 65.3768 53.4539 63.6237 52.0967C61.8707 50.7395 59.717 50.0021 57.5 50V40H72.5V57.5Z" fill="#523B29"/>
            </svg>
        </div>
        <div className="logo-name">
            <h4>Transporter<br/>Biding</h4>
        </div>
        </div>

        <div className="logo1">
        <div className="lg1">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M39.5 39.5L50 77L58.5 64L74.5 80L80 74.5L63.5 58.5L77 50.5L39.5 39.5Z" fill="#523B29"/>
            <path d="M40 60H5V15H65V42L70 43V10H0V65H41L40 60Z" fill="#523B29"/>
            </svg>
        </div>
        <div className="logo-name">
            <h4>Load<br/>Selection</h4>
        </div>
        </div>

        <div className="logo1">
        <div className="lg1">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
            <path d="M10.5 40C10.5 23.4315 23.9315 10 40.5 10C57.0687 10 70.5 23.4315 70.5 40C70.5 56.5687 57.0687 70 40.5 70C23.9315 70 10.5 56.5687 10.5 40Z" stroke="#523B29" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.1665 40L37.1665 50L53.8332 33.3333" stroke="#523B29" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="logo-name">
            <h4>Booking<br/>Confirmation</h4>
        </div>
        </div>

        <div className="logo1">
        <div className="lg1">
             <img src="/Stopwatch Icon.svg" alt="time" />
        </div>
        <div className="logo-name">
            <h4>Load<br/>Tracking</h4>
        </div>
        </div>

        <div className="logo1">
        <div className="lg1">
        <img src="/Secure Payments Icon.svg" alt="time" />
        </div>
        <div className="logo-name">
            <h4>Payment<br/>Processing</h4>
        </div>
        </div>

    </div>

        {/* FORM */}
      <div className="book-form">
        <form>
          <div className="form-head">
            <h4>Posting Load Details</h4>
          </div>
          <div className="book-inputs">
            <div className="inputs">
              <input type="text" placeholder="Origin Address" className="in" />
              <input type="text" placeholder="Destination Address" className="in" />
              <div className="input">
                <input type="text" placeholder="Height" className="in2" />
                <input type="text" placeholder="Width" className="in2" style={{ marginLeft: "1vw" }} />
                <input type="text" placeholder="Depth" className="in2" style={{ marginLeft: "1vw" }} />
              </div>
              <div className="input">
                <input type="text" placeholder="Cargo Weight [KG]" className="in2" />
                <input type="text" placeholder="Type Of Cargo" className="in2" style={{ marginLeft: "1vw" }} />
              </div>
              <button type="button" className="btn">
                Post
              </button>
            </div>
          </div>
        </form>
{/* Render image conditionally based on screen size */}
{isSmallScreen() ? (
          <div className="book-image">
            <img src="/bos.png" alt="box" className="box"></img>
          </div>
        ) : null}
      </div>

      {/* Conditionally render image based on screen size */}
      </div>
  );
};

export default Booking;