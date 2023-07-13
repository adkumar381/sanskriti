import React from "react";
import "./SectionSix.css";

function SectionSix() {
  return (
    <>
      <div className="section_six_sansk">
        <div className="heading_section5">Take a look at our University</div>
        <div className="subheading_section5">
          Complete BAMS Info of Sanskriti College of Ayurvedic Medical Science
          👇
        </div>

        <iframe
          className="youtube_video_sansk"
          src="https://www.youtube.com/embed/cxqjIb72R2I?autoplay=1&mute=1"
        ></iframe>

        <div className="fifteenseats_section5">
          Yes, I want to Pre-Book My Seat for BAMS!
        </div>

        <div className="last_text_section5">
          ONLY 17 SEATS LEFT! -{" "}
          <span className="without_donation">Without Donation</span>
        </div>
      </div>
    </>
  );
}

export default SectionSix;
