import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <div className="aboutpage">
      <h3 className="quote">
        <q>
          “ I really hope that there will be millions of kids all over the world
          who will be captivated and inspired about the possibility of them
          going to space one day.”
        </q>
        <cite style={{ fontSize: "15px" }}>
          – Richard Branson, Founder, Virgin Galactic
        </cite>
      </h3>

      <div className="keymem">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="image">
                <img
                  src="https://www.northeasttoday.in/assets/resources/2021/08/richard-branson-1.jpg"
                  alt="Richard Branson"
                />
                <p className="name">Richard Branson</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="image">
                <img
                  src="https://d1titnu6se1qmv.cloudfront.net/uploads/2020/07/Michael.jpg"
                  alt="Richard Branson"
                />
                <p className="name">Doug Ahrens (CEO)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="image">
                <img
                  src="https://d1titnu6se1qmv.cloudfront.net/uploads/2021/03/Swami-Iyer-Profile.png"
                  alt="Richard Branson"
                />
                <p className="name">Swami Iyer (CFO)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="image">
                <img
                  src="https://d1titnu6se1qmv.cloudfront.net/uploads/2020/01/Michelle-Kley-square.jpg"
                  alt="Richard Branson"
                />
                <p className="name">Michelle Kley(Executive VP)</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="key">Key Members</h1>
      </div>
      <p className="about">
        <b> Virgin Galactic</b> is the world's first commercial spaceline and
        vertically integrated aerospace company. We are developing and operating
        a new generation of space vehicles to open space for everyone. ... We
        believe we can inspire future generations and make it possible to
        experience our planet from a different perspective.
      </p>
    </div>
  );
};

export default About;
