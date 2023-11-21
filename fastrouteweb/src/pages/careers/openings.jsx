import React from "react";
import './career.css';

const Opening = () => {
    return(
        <div className="openings">
            <div className="open-head">
            <h1 className="opn">Job Openings</h1>
            </div>
            <div className="inputs">
                <input type="text" placeholder="Search" className="int"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70" fill="none">
  <path d="M29.3929 51.1175L34.0234 55.118C35.0384 55.9965 35.1539 57.5365 34.2859 58.562C34.08 58.8052 33.8278 59.0051 33.544 59.1501C33.2603 59.2952 32.9505 59.3824 32.6328 59.4068C32.315 59.4312 31.9956 59.3923 31.693 59.2924C31.3904 59.1924 31.1106 59.0334 30.8699 58.8245L25.3924 54.0925C25.1263 53.8623 24.9129 53.5774 24.7668 53.2573C24.6206 52.9372 24.5451 52.5894 24.5454 52.2375V27.783L4.09843 4.0425C2.72993 2.4605 3.84993 0 5.92893 0H64.0709C66.1499 0 67.2629 2.464 65.9014 4.0425L45.4264 27.7865V67.557C45.4264 68.908 44.3414 70 43.0044 70C42.685 69.9986 42.3689 69.9343 42.0743 69.8108C41.7797 69.6873 41.5124 69.507 41.2875 69.2801C41.0626 69.0533 40.8845 68.7843 40.7636 68.4887C40.6426 68.193 40.581 67.8764 40.5824 67.557V26.873C40.5818 26.2846 40.793 25.7155 41.1774 25.27L58.7579 4.8825H11.2349L28.7979 25.27C29.1823 25.7155 29.3935 26.2846 29.3929 26.873V51.1175Z" fill="#724E31"/>
</svg>
<button className="btn2" type="button">Filters</button>
            </div>

            <div className="open-box">
                <div className="open-text">
                    <h2 className="open-h">Product Designer</h2>
                    <p className="open-para">We’re looking for a mid-level product designer to jon our team</p>
                </div>
                <div className="open-btn">
                    <button type="button" className="btn3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 2.8125C8.26934 2.8125 2.8125 8.26934 2.8125 15C2.8125 21.7307 8.26934 27.1875 15 27.1875C21.7307 27.1875 27.1875 21.7307 27.1875 15C27.1875 8.26934 21.7307 2.8125 15 2.8125ZM20.625 16.875H15C14.7514 16.875 14.5129 16.7762 14.3371 16.6004C14.1613 16.4246 14.0625 16.1861 14.0625 15.9375V7.5C14.0625 7.25136 14.1613 7.0129 14.3371 6.83709C14.5129 6.66127 14.7514 6.5625 15 6.5625C15.2486 6.5625 15.4871 6.66127 15.6629 6.83709C15.8387 7.0129 15.9375 7.25136 15.9375 7.5V15H20.625C20.8736 15 21.1121 15.0988 21.2879 15.2746C21.4637 15.4504 21.5625 15.6889 21.5625 15.9375C21.5625 16.1861 21.4637 16.4246 21.2879 16.6004C21.1121 16.7762 20.8736 16.875 20.625 16.875Z" fill="#5C5C5C"/>
</svg><b> Full-Time</b></button>
                </div>
                <div className="open-apply">
                    <a href="#" className="apply-link">Apply </a>
                </div>
            </div>
            <div className="open-box">
                <div className="open-text">
                    <h2 className="open-h">Engineer Manager</h2>
                    <p className="open-para">We're looking for a experienced engineering manager to jon our team</p>
                </div>
                <div className="open-btn">
                    <button type="button" className="btn3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 2.8125C8.26934 2.8125 2.8125 8.26934 2.8125 15C2.8125 21.7307 8.26934 27.1875 15 27.1875C21.7307 27.1875 27.1875 21.7307 27.1875 15C27.1875 8.26934 21.7307 2.8125 15 2.8125ZM20.625 16.875H15C14.7514 16.875 14.5129 16.7762 14.3371 16.6004C14.1613 16.4246 14.0625 16.1861 14.0625 15.9375V7.5C14.0625 7.25136 14.1613 7.0129 14.3371 6.83709C14.5129 6.66127 14.7514 6.5625 15 6.5625C15.2486 6.5625 15.4871 6.66127 15.6629 6.83709C15.8387 7.0129 15.9375 7.25136 15.9375 7.5V15H20.625C20.8736 15 21.1121 15.0988 21.2879 15.2746C21.4637 15.4504 21.5625 15.6889 21.5625 15.9375C21.5625 16.1861 21.4637 16.4246 21.2879 16.6004C21.1121 16.7762 20.8736 16.875 20.625 16.875Z" fill="#5C5C5C"/>
</svg><b> Full-Time</b></button>
                </div>
                <div className="open-apply">
                    <p className="apply-link">Apply</p>
                </div>
            </div>
        </div>
    )
}

export default Opening;