import React from "react";
import "../Styling/Content1.scss";
import banner from "../Media/banner.5ff24b66.png";

const Content1 = () => {
  return (
    <div className="content1">
      <div className="banner-description">
        <h1>Fresh Juice</h1>
        <p>
          We Believe That Healthy Eating, Clean Air And,
          <br /> Gental Char Best Start To Genuine Well being
        </p>
        <button>Shop now</button>
      </div>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Content1;
