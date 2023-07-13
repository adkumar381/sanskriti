import React from "react";
import "./SectionTwo.css";
import Icon1 from "../assets/icon1.png.png";
import Icon2 from "../assets/icon2.png.png";
import Icon3 from "../assets/icon3.png.png";
import Icon4 from "../assets/icon4.png.png";
import Icon5 from "../assets/icon5.png.png";

function SectionTwo() {
  return (
    <>
      <div className="section_two_sansk">
        <p className="section_two_heading_sansk">
          Why you should consider studying BAMS here... 👇
        </p>
        <p className="section_two_subheading_sansk">
          Here are the various facilities available at our Medical College
        </p>

        <div className="row_one_sansk">
          <div className="box1_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon1} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
                State of the Art Infrastructure
              </p>
            </div>
          </div>
          <div className="box2_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon2} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Cosmopolitan Culture</p>
            </div>
          </div>
          <div className="box3_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon3} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Top Academicians</p>
            </div>
          </div>
          <div className="box4_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon4} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Premium Placements</p>
            </div>
          </div>
          <div className="box5_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon5} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Research & Innovation</p>
            </div>
          </div>

          <div className="box6_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon1} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
                State of the Art Infrastructure
              </p>
            </div>
          </div>
          <div className="box7_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon2} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Cosmopolitan Culture</p>
            </div>
          </div>
          <div className="box8_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon3} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Top Academicians</p>
            </div>
          </div>
          <div className="box9_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon4} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Premium Placements</p>
            </div>
          </div>
          <div className="box10_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon5} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Research & Innovation</p>
            </div>
          </div>
        </div>

        <div className="seat_booking_sansk">
          Yes, I want to Pre-Book My Seat !
        </div>

        <p className="last_text_section2">
          ONLY 15 SEATS LEFT! - <span>Without Donation</span>
        </p>
      </div>
    </>
  );
}

export default SectionTwo;
