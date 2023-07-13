import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import Placement from './components/Placement';
import Location from './components/Location'
import SanskritiLogo from "./assets/SanskritiLogo.png";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
function App() {
  return (
    <>
    <div className="yellowspace_sansk">
        <p>
          Important : Only <span className="fifteen_sansk">15</span> Seats Left!
        </p>
      </div>

      <div className="bluespace_sansk">
        <div className="leftside_blue">
          <img src={SanskritiLogo} className="logo_blue_sansk" />
        </div>
        <div className="rightside_blue">Contact us on: 12345678</div>
      </div>
    <div className="App">
      {/* <Testimonial/> */}
      
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      
      <SectionThree></SectionThree>
      <Testimonial/>
      
      <Placement/>
      <Location/>
      <SectionFour></SectionFour>
      

      {/* <div className="grey_space"></div> */}
      
      {/* <div className="grey_space"></div> */}
      
      
    </div>
    </>
  );
}

export default App;
