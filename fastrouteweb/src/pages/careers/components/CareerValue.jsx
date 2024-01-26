import styles from '../styles/career.module.css';

const CareerValues = () => {
    return(
        <div className={styles.CareerValues}>
            <div className={styles.CareerValuesHead}>
               <h1>Our Values</h1>
            </div>

            <div className={styles.CareerValue}>

            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
<g clip-path="url(#clip0_59_240)">
<path d="M36 14.3999C36.9458 14.3997 37.8822 14.2132 38.7559 13.851C39.6296 13.4889 40.4233 12.9582 41.0919 12.2893C41.7605 11.6204 42.2908 10.8263 42.6525 9.95249C43.0142 9.07863 43.2002 8.14209 43.2 7.19634C43.1998 6.25058 43.0133 5.31414 42.6511 4.44047C42.289 3.56679 41.7583 2.77301 41.0894 2.10442C40.4205 1.43584 39.6264 0.90556 38.7526 0.543854C37.8787 0.182148 36.9422 -0.00389828 35.9964 -0.00366188C34.0864 -0.00318447 32.2548 0.756032 30.9045 2.10697C29.5542 3.45791 28.7959 5.2899 28.7964 7.19994C28.7969 9.10997 29.5561 10.9416 30.907 12.2919C32.258 13.6421 34.09 14.4004 36 14.3999ZM57.5208 41.6987C56.1348 35.3087 53.712 24.8219 50.1696 20.4803C46.7244 16.2575 39.7836 16.0811 36 16.0811C32.2164 16.0811 25.2756 16.2575 21.8304 20.4803C18.288 24.8219 15.8652 35.3087 14.4792 41.6987C13.7124 45.2375 18.6336 46.5371 19.9188 42.9767C21.8304 37.6739 23.3064 33.2207 26.5392 29.5271C28.2384 39.9923 21.9672 58.2047 21.6 68.3999C21.5994 69.2415 21.8936 70.0567 22.4316 70.7038C22.9696 71.351 23.7172 71.7892 24.5448 71.9424C25.3723 72.0956 26.2273 71.954 26.9612 71.5423C27.6952 71.1306 28.2617 70.4747 28.5624 69.6887C30.2076 63.9755 36 48.0779 36 48.0779C36 48.0779 41.7924 63.9755 43.4376 69.6887C43.7383 70.4747 44.3048 71.1306 45.0388 71.5423C45.7728 71.954 46.6278 72.0956 47.4553 71.9424C48.2828 71.7892 49.0305 71.351 49.5684 70.7038C50.1064 70.0567 50.4006 69.2415 50.4 68.3999C50.0328 58.2047 43.7616 39.9923 45.4608 29.5307C48.6936 33.2243 50.1696 37.6775 52.0812 42.9803C53.3628 46.5371 58.2876 45.2375 57.5208 41.6987Z" fill="#724E31"/>
</g>
<defs>
<clipPath id="clip0_59_240">
<rect width="72" height="72" fill="white"/>
</clipPath>
</defs></svg>
                </div>
                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Customer First</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>


            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1586 4.73931C15.3985 4.52046 15.6794 4.35131 15.9851 4.24164C16.2908 4.13198 16.6152 4.08396 16.9395 4.10037C17.2638 4.11678 17.5817 4.19729 17.8748 4.33724C18.1678 4.4772 18.4302 4.67383 18.6468 4.91578C18.8634 5.15773 19.03 5.44021 19.1368 5.74688C19.2436 6.05356 19.2886 6.37837 19.2692 6.70254C19.2498 7.02671 19.1664 7.34382 19.0237 7.63555C18.881 7.92729 18.682 8.18786 18.438 8.40223C15.4709 11.0559 13.3789 14.5476 12.4386 18.4156C11.4983 22.2837 11.7539 26.346 13.1716 30.0657C14.5894 33.7854 17.1025 36.9873 20.3789 39.2481C23.6553 41.509 27.5406 42.7224 31.5213 42.7279H31.5753C34.8164 42.7256 38.0066 41.9214 40.8616 40.3871C43.7165 38.8529 46.1475 36.6361 47.938 33.9345C48.2989 33.3914 48.8607 33.0139 49.5 32.885C50.1392 32.7561 50.8034 32.8865 51.3465 33.2474C51.8896 33.6082 52.2671 34.1701 52.396 34.8093C52.5248 35.4485 52.3945 36.1127 52.0336 36.6558C50.021 39.689 47.3598 42.2372 44.2423 44.1164C41.1247 45.9955 37.6286 47.1586 34.0066 47.5217V50.1029L41.3816 50.1029C42.0336 50.1029 42.6589 50.3619 43.1199 50.823C43.581 51.284 43.84 51.9093 43.84 52.5613C43.84 53.2133 43.581 53.8385 43.1199 54.2996C42.6589 54.7606 42.0336 55.0196 41.3816 55.0196L21.715 55.0196C21.063 55.0196 20.4377 54.7606 19.9767 54.2996C19.5156 53.8385 19.2566 53.2133 19.2566 52.5613C19.2566 51.9093 19.5156 51.284 19.9767 50.823C20.4377 50.3619 21.063 50.1029 21.715 50.1029L29.09 50.1029V47.5217C16.668 46.2901 6.96497 35.8077 6.96497 23.0613C6.96149 19.6022 7.68973 16.1815 9.10186 13.0238C10.514 9.86611 12.5781 7.04282 15.1586 4.73931ZM31.5483 5.85294C36.1122 5.85294 40.4892 7.66595 43.7164 10.8931C46.9436 14.1203 48.7566 18.4973 48.7566 23.0613C48.7566 27.6252 46.9436 32.0022 43.7164 35.2294C40.4892 38.4566 36.1122 40.2696 31.5483 40.2696C26.9844 40.2696 22.6074 38.4566 19.3802 35.2294C16.153 32.0022 14.34 27.6252 14.34 23.0613C14.34 18.4973 16.153 14.1203 19.3802 10.8931C22.6074 7.66595 26.9844 5.85294 31.5483 5.85294Z" fill="#724E31"/>
</svg>
                </div>

                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Distributed</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>


            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <path d="M55.9643 39.5714H53.9286V12.7143C53.9286 10.9335 53.2851 9.22574 52.1398 7.96657C50.9945 6.7074 49.4411 6 47.8214 6H11.1786C9.55886 6 8.00548 6.7074 6.86017 7.96657C5.71486 9.22574 5.07143 10.9335 5.07143 12.7143V39.5714H3.03571C2.49581 39.5714 1.97802 39.8072 1.59625 40.227C1.21448 40.6467 1 41.2159 1 41.8095V46.2857C1 48.0665 1.64343 49.7743 2.78874 51.0334C3.93405 52.2926 5.48743 53 7.10714 53H51.8929C53.5126 53 55.066 52.2926 56.2113 51.0334C57.3566 49.7743 58 48.0665 58 46.2857V41.8095C58 41.2159 57.7855 40.6467 57.4038 40.227C57.022 39.8072 56.5042 39.5714 55.9643 39.5714ZM25.4286 12.7143H33.5714C34.1113 12.7143 34.6291 12.9501 35.0109 13.3698C35.3927 13.7895 35.6071 14.3588 35.6071 14.9524C35.6071 15.546 35.3927 16.1152 35.0109 16.535C34.6291 16.9547 34.1113 17.1905 33.5714 17.1905H25.4286C24.8887 17.1905 24.3709 16.9547 23.9891 16.535C23.6073 16.1152 23.3929 15.546 23.3929 14.9524C23.3929 14.3588 23.6073 13.7895 23.9891 13.3698C24.3709 12.9501 24.8887 12.7143 25.4286 12.7143ZM53.9286 46.2857C53.9286 46.8793 53.7141 47.4486 53.3323 47.8683C52.9506 48.288 52.4328 48.5238 51.8929 48.5238H7.10714C6.56724 48.5238 6.04945 48.288 5.66768 47.8683C5.28591 47.4486 5.07143 46.8793 5.07143 46.2857V44.0476H53.9286V46.2857Z" fill="#724E31"/>
</svg>
                </div>
                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Remote & Flexible</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>
           
            
        


            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <path d="M43.5764 32.0075L34.4166 39.3333H22.125V36.875H32.1181C32.3404 36.8749 32.5586 36.8145 32.7493 36.7002C32.94 36.5859 33.0961 36.422 33.2011 36.226C33.306 36.03 33.3558 35.8092 33.3452 35.5871C33.3346 35.365 33.2639 35.15 33.1408 34.9649L30.9578 31.6904C30.5099 31.0163 29.9023 30.4636 29.1889 30.0814C28.4756 29.6992 27.6788 29.4995 26.8695 29.5H7.37496C6.72297 29.5 6.09768 29.759 5.63666 30.22C5.17563 30.6811 4.91663 31.3063 4.91663 31.9583V46.7083C4.91663 48.0123 5.43463 49.2629 6.35668 50.1849C7.27874 51.107 8.52931 51.625 9.83329 51.625H33.5292C34.5804 51.6252 35.6195 51.4008 36.5768 50.9666C37.5342 50.5324 38.3877 49.8986 39.0801 49.1077L54.0833 31.9583L50.5138 30.7685C49.346 30.3792 48.0992 30.2887 46.8874 30.5051C45.6756 30.7215 44.5373 31.238 43.5764 32.0075ZM47.3425 18.1671C48.4513 17.024 49.1371 15.4432 49.1371 13.6978C49.1371 11.9524 48.4513 10.3717 47.3425 9.22858C46.7818 8.64345 46.1087 8.17764 45.3635 7.85911C44.6183 7.54059 43.8165 7.37593 43.006 7.375C43.006 7.375 39.9479 7.36762 36.875 10.5364C33.802 7.36762 30.7439 7.375 30.7439 7.375C29.9337 7.37603 29.1321 7.5405 28.387 7.85857C27.6418 8.17664 26.9685 8.64177 26.4074 9.22613C25.2987 10.3717 24.6128 11.95 24.6128 13.6954C24.6128 15.4408 25.2987 17.024 26.4074 18.1646L36.875 29.5L47.3425 18.1671Z" fill="#724E31"/>
</svg>
                </div>
                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Empathy at work</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>


            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <path d="M15.5367 31.983C17.8967 32.0321 20.0846 33.2121 21.5596 35.2771C22.4645 36.5367 23.6571 37.562 25.0383 38.2675C26.4194 38.973 27.9491 39.3385 29.5 39.3334C32.6713 39.3334 35.6459 37.8092 37.4405 35.2525C38.9155 33.1875 41.1034 32.0075 43.4634 31.9584C41.6934 28.9592 34.6134 27.0417 29.5 27.0417C24.4113 27.0417 17.3067 28.9592 15.5367 31.983ZM9.83337 31.9584C13.9142 31.9584 17.2084 28.6642 17.2084 24.5834C17.2084 20.5025 13.9142 17.2084 9.83337 17.2084C5.75254 17.2084 2.45837 20.5025 2.45837 24.5834C2.45837 28.6642 5.75254 31.9584 9.83337 31.9584ZM49.1667 31.9584C53.2475 31.9584 56.5417 28.6642 56.5417 24.5834C56.5417 20.5025 53.2475 17.2084 49.1667 17.2084C45.0859 17.2084 41.7917 20.5025 41.7917 24.5834C41.7917 28.6642 45.0859 31.9584 49.1667 31.9584ZM29.5 24.5834C33.5809 24.5834 36.875 21.2892 36.875 17.2084C36.875 13.1275 33.5809 9.83337 29.5 9.83337C25.4192 9.83337 22.125 13.1275 22.125 17.2084C22.125 21.2892 25.4192 24.5834 29.5 24.5834Z" fill="#724E31"/>
  <path d="M51.625 34.4166H43.5863C41.6934 34.4166 40.2675 35.5229 39.4563 36.6783C39.358 36.8258 36.113 41.7916 29.5 41.7916C25.9846 41.7916 22.0513 40.2183 19.5438 36.6783C18.585 35.3262 17.0855 34.4166 15.4138 34.4166H7.37504C4.67087 34.4166 2.45837 36.6291 2.45837 39.3333V49.1666H19.6667V43.6108C22.4938 45.5775 25.9109 46.7083 29.5 46.7083C33.0892 46.7083 36.5063 45.5775 39.3334 43.6108V49.1666H56.5417V39.3333C56.5417 36.6291 54.3292 34.4166 51.625 34.4166Z" fill="#724E31"/>
</svg>
                </div>
                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Diversity</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>


            <div className={styles.CareerValueContainer}>
                <div className={styles.CareerValueImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
  <g clip-path="url(#clip0_62_318)">
    <path d="M26.7285 -0.000136438C27.5964 -0.000136438 28.451 0.0561761 29.246 0.188676C30.029 0.291273 30.8015 0.461961 31.5548 0.698801C32.31 0.927364 33.0487 1.21224 33.7874 1.56999C34.5062 1.91118 35.2449 2.32855 35.9836 2.78236C37.2324 3.57736 38.4614 4.21999 39.7135 4.73343C42.1785 5.72 44.785 6.30706 47.4349 6.47249C48.7798 6.56855 50.1611 6.62486 51.5987 6.62486V19.8749C51.5987 22.3924 51.2774 24.7774 50.6348 27.0497C50.0175 29.2897 49.1404 31.4498 48.0212 33.4859C46.9068 35.5192 45.5883 37.4338 44.086 39.2C42.5606 41.0063 40.9091 42.7022 39.1437 44.2747C37.355 45.852 35.4711 47.3177 33.5025 48.6638C31.5349 50.0286 29.5474 51.2972 27.5599 52.45L26.7649 52.9237L25.9699 52.45C23.9268 51.2671 21.9311 50.0041 19.9875 48.6638C18.008 47.3329 16.1231 45.8664 14.3464 44.2747C12.5821 42.7021 10.9316 41.0063 9.40742 39.2C7.90916 37.4263 6.5847 35.5128 5.4523 33.4859C4.35232 31.4407 3.47607 29.2828 2.83873 27.0497C2.19203 24.7136 1.87319 22.2988 1.89136 19.8749V6.62486C3.3323 6.62486 4.71361 6.56855 6.05848 6.47249C7.38236 6.38053 8.69767 6.19121 9.99373 5.90605C11.2624 5.62118 12.5311 5.24355 13.7799 4.73343C15.0758 4.21043 16.3182 3.56371 17.4899 2.80224C18.9474 1.85486 20.4248 1.15593 21.8823 0.695489C23.452 0.214287 25.0868 -0.0203808 26.7285 -0.000136438ZM48.2664 9.88105C45.7589 9.75939 43.2748 9.34017 40.8662 8.63224C38.4704 7.91758 36.1885 6.86582 34.0889 5.50855C32.9998 4.7937 31.8171 4.23299 30.5743 3.84236C29.3329 3.46717 28.0419 3.28179 26.745 3.29249C25.4386 3.28404 24.1381 3.46935 22.886 3.84236C21.6414 4.22029 20.4602 4.78187 19.3814 5.50855C17.2781 6.87322 14.9902 7.9296 12.5874 8.64549C10.2389 9.32786 7.78098 9.74524 5.20386 9.89761V19.8914C5.20386 22.0876 5.48873 24.1877 6.05848 26.2117C6.63892 28.218 7.43875 30.1543 8.44348 31.9854C9.46025 33.8355 10.6587 35.5799 12.021 37.1926C13.4023 38.819 14.8764 40.3329 16.4664 41.7705C18.0564 43.2114 19.7225 44.5364 21.4649 45.7654C23.2239 46.9976 24.9861 48.1139 26.745 49.1342C28.5461 48.0857 30.3022 46.9617 32.0086 45.7654C33.7625 44.5403 35.4375 43.206 37.0237 41.7705C38.6137 40.3329 40.0911 38.819 41.4724 37.1926C42.8349 35.58 44.0333 33.8356 45.0499 31.9854C46.0502 30.1566 46.8382 28.2194 47.3985 26.2117C47.9855 24.1566 48.2778 22.0286 48.2664 19.8914V9.88105Z" fill="#724E31"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0776 15.5986L37.6201 14.3464L36.2752 14.4624L21.8327 31.5151L16.9137 24.4926L15.5887 24.2674L14.055 25.3638L13.8264 26.6888L20.15 35.7187L20.8688 36.1162L22.3826 36.2089L23.1577 35.8711L39.1737 16.9401L39.0776 15.5986Z" fill="#724E31"/>
  </g>
  <defs>
    <clipPath id="clip0_62_318">
      <rect width="53" height="53" fill="white"/>
    </clipPath>
  </defs>
</svg>
                </div>
                <div className={styles.CareerValueContainerHead}>
                    <h3 className={styles.CareerContainerHead}>Trust</h3>
                    <p style={{textAlign:'start'}} className={styles.CareerContainerPara}>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna<br/>aliqua.</p>
                </div>
            </div>
           
            </div>
        </div>
    )
}

export default CareerValues;