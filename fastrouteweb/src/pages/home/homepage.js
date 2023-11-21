import Navbar from "../../components/common/Navbar/Navbar";
import HeaderSection from "./header";
import ExclusiveSection from "./exclusive";
import AboutUsSection from "./about";
import WhyChooseUsSection from "./choose-us";
import Footer from "../../components/common/Footer/footer";

const Homepage = () => {
    return (
              <div className="">
                <Navbar></Navbar>
                  <HeaderSection></HeaderSection>
                  <ExclusiveSection></ExclusiveSection>
                  <AboutUsSection></AboutUsSection>
                  <WhyChooseUsSection></WhyChooseUsSection> 
                  <Footer></Footer>
              </div>
            );
          }
export default Homepage;
          