import React from "react";
import "../Gallary/Gallary.css";
import images from "./GallaryImages";

const Gallary = () => {
  const addImage = images.map((imgurl, idx) => {
    return (
      <div className="col-md-6 col-xxl-3">
        <div className="image">
          <img src={imgurl} alt={idx} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="heading" style={{marginTop:"70px"}}>Gallary Images</h1>

      <div className="gallary-cont">
        <div className="container">
          <div className="row">{addImage}</div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
