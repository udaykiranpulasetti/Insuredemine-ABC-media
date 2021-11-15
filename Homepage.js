import React from "react";
// import UserDb from "../../userData";
import "../Homepage/Homepage.css";
import Branson from "../Homepage/Branson.jpg"

const Homepage = () => {
  return (
    <div className="homepage">
      <iframe
        width="1000"
        height="515"
        src="https://www.youtube.com/embed/ZPrB3WvnZpE?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h5 className="hometext">
        This was when <b>Virgin Galactic</b> enters into the sapce. Virgin
        Galactic founder Richard Branson launched company's first fully crewed
        flight on July 11, 2021, as part of a six-person mission named "Unity
        22." The crewmembers are, Dave Mackay, chief pilot. Colin Bennett, lead
        operations engineer. Beth Moses, chief astronaut instructor. Our mission
        – to be the spaceline for Earth – means we focus on using space for good
        while delivering an unparalleled customer experience. Through our work,
        we believe we can help inspire future generations and make it possible
        to see our beautiful home planet from a new perspective.
      </h5>

      <div>
        <h2 className="heading">Our Story</h2>

        <div className="mainImage">
          <img
            width="100%"
            height='100%'
            src={Branson}
            alt="imageRichard"
          />
        </div>
        <h5 className="hometext">
          <b>Galactic Unite</b> is Virgin Galactic’s outreach initiative born out of a
          unique collaboration between the Future Astronaut customer community
          and Virgin Unite, the independent entrepreneurial foundation of the
          Virgin Group and the Branson family. Together we seek to drive
          positive change for young people by channeling our collective energy
          and resources – working to ensure that future generations are equipped
          to apply the space perspective to Earth’s greatest challenges.
          Galactic Unite offers both practical support and a planetary
          perspective to the engineers of the future. It harnesses the power of
          space to support and inspire young people to pursue an education in
          STEM (Science, Technology, Engineering and Mathematics).
        </h5>
      </div>


      {/* <form>
        <input list="suggestions" name="options" />
        <datalist id="suggestions">
          {UserDb.map((name, idx) => {
            return <option key={idx} value={name.username} />;
          })}
        </datalist>
      </form> */}
    </div>
  );
};

export default Homepage;
