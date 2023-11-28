import Footer from "../components/common/Footer/footer";
import Navbar from "../components/common/Navbar/Navbar";
import WhyChooseUsSection from "./home/choose-us";

const WhyChooseUs = () => {
    return (
              <div>
                <Navbar></Navbar>
                <div className = "border bottonm mb-5">
                  <WhyChooseUsSection></WhyChooseUsSection> 
                  </div>
                    <Footer></Footer>          
              </div>
            );
          }
export default WhyChooseUs;