import React from "react";
import "./SectionOne.css";
import HeroImage from "../assets/HeroImage.png";

function SectionOne() {
  return (
    <>
      <div className="section_one_sansk">
        <div className="leftside_section1_sansk">
          <div className="text1_section1">ADMISSION OPEN FOR 2023</div>
          <div className="text2_section1">
            Bachler of Ayurvedic Medicine and surgery (B.A.M.S)
          </div>
          <p className="text3_section1">
            <span className="ranked_first">
              Ranked 1<sup>st</sup>
            </span>{" "}
            in the list of Indian Academic Institutions for highest number of
            patents.
          </p>

          <p className="text4_section1">
            <span className="four_star_sansk">4*</span> rating by Careerkick out
            of 5.
          </p>
          <p className="text5_section1">
            <span className="number_one_sansk">No.1</span> ayurvedic university
            in north india
          </p>
        </div>
        <div className="rightside_section1_sansk">
          <div className="form_main_sansk">
            <div className="heading_form_section1">
              Get Started On Your Journey
            </div>
            <div className="subheading_form_section1">
              Fill your details to claim your Pre- Booking 👇
            </div>

            <input
              type="text"
              className="form_details1_section1 form_section1_details"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="form_details2_section1 form_section1_details"
              placeholder="Email"
              required
            />
            <input
              type="number"
              className="form_details3_section1 form_section1_details"
              placeholder="Mobile Number"
              required
            />
            <select
              name=""
              id=""
              className="form_details4_section1 form_section1_details"
            >
              <option value="" selected disabled>
                Select Course
              </option>
              <option value="">xyz</option>
              <option value="">xyz</option>
              <option value="">xyz</option>
            </select>
            <input
              type="number"
              className="form_details5_section1 form_section1_details"
              placeholder="NEET Score"
              required
            />

            <div className="reserve_seat_button">
              <a href="">Reserve A seat for me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
