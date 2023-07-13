import React from "react";
import "./SectionThree.css";
import MainBuildingImage from "../assets/MainBuildingImage.png";

function SectionThree() {
  return (
    <>
      <div className="section3_sansk">
        <div className="blue_box_section3">
          <p className="heading_section_three1">
            We're rewriting the rules and redefining the way you 
          </p>
          <p className="heading_section_three2">
            learn, practice, and revolutionize healthcare.
          </p>
        </div>

        <div className="main_section3">
          <div className="left_side_section3">
            <img src={MainBuildingImage} className="logo_image_section3" />
          </div>

          <div className="right_side_section3">
            <p className="subheading_section3_one">
              What really makes us different from 
            </p>
            <p className="subheading_section3_two">
              other Ayurvedic Medical Colleges 👇
            </p>

            <div className="section3_yellowbox">
              State of the Art Infrastructure
            </div>
            <div className="section3_yellowbox">Cosmopolitan Culture</div>
            <div className="section3_yellowbox">Top Academicians</div>
            <div className="section3_yellowbox">Premium Placements</div>
            <div className="section3_yellowbox">
               Innovative Research Opportunities
            </div>
            <div className="section3_yellowbox">
              Incubation CenterIncubation Center
            </div>
          </div>
        </div>

        <div className="seat_booking_section3">
          Yes, I want to Pre-Book My Seat !
        </div>

        <p className="last_text_section3">
          Reminder : "17 Seats" Available - Without Donation
        </p>
      </div>
    </>
  );
}

export default SectionThree;
