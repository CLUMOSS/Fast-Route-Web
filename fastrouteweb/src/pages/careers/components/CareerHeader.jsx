import styles from '../styles/career.module.css';

const CareerHeader = () => {
    return(
        <div className={styles.CareerHeader}>
            <div className={styles.CareerHeaderHeading}>
                <h1>Becoming a part of our team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eiusmod labore et magna aliqua.</p>
            </div>
            <div className={styles.CareerHeaderImage}>
                <img src="/image 1.png" alt="image1" />
                <img src="/image 2.png" alt="image1" />
                <img src="/image 3.png" alt="image1" />
            </div>
        </div>
    )
}

export default CareerHeader;