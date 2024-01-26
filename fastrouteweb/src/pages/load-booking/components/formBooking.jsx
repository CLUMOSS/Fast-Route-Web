import  styles from  "../styles/load.module.css";

const FormBooking = () => {
    return (

        <div className={styles.bookForm}>

        <form>
            <div className={styles.formHead}>
                <h4>Posting Load Details</h4>
            </div>
            
            <div className={styles.bookingFormInputs}>
                 <div className={styles.inputs}>
                    <input type="text" placeholder="Origin Address" className={styles.in}/>
                    <input type="text" placeholder="Destination Address" className={styles.in}/>
                      <div className={styles.input}>
                    <input type="number" placeholder="Height" className={styles.in2}/> 
                    <input type="number" placeholder="Width" className={styles.in2} style={{marginLeft: '20px'}}/> 
                    <input type="number" placeholder="Depth" className={styles.in2} style={{marginLeft: '20px'}}/>
                      </div>
                      <div className={styles.input}>
                    <input type="number" placeholder="Cargo Weight [KG]" className={styles.in2}/>
                    <input type="text" placeholder="Type Of Cargo" className={styles.in2} style={{marginLeft: '20px'}}/>
                      </div>
                      <button type="button" className={styles.btn}>Post</button>
                 </div>
            </div>
        </form>

            <div className={styles.bookImage}>
              <img src="/loadBooking/bos.png" alt="box" className={styles.box} />
            </div>
            
        </div>
        
        
    )
}

export default FormBooking;