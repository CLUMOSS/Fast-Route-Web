import Navbar from "../../components/common/Navbar/Navbar";
import HeaderSection from "./header";
import ExclusiveSection from "./exclusive";
import AboutUsSection from "./about";
import WhyChooseUsSection from "./choose-us";

const Homepage = () => {
    return (
              <div className="">
                <header className="App-header">
                  <a>
                  {/* <SignUp></SignUp> */}
          
                  </a>
          
                </header>
                <Navbar></Navbar>
                  <HeaderSection></HeaderSection>
                  <ExclusiveSection></ExclusiveSection>
                  <AboutUsSection></AboutUsSection>
                  <WhyChooseUsSection></WhyChooseUsSection> 
          
              </div>
            );
          }
export default Homepage;
          