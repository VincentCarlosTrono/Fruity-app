import React from "react";
import "../Styling/Content2.scss";
import cat1 from "../Media/cat1.678c4b10.png";
import cat2 from "../Media/banner.5ff24b66.png";

const Content2 = () => {
  return (
    <div className="grid-container">
      <div className="cat1 container" id="feature">
        <div className="cat-context">
          <div>
            <h1>
              Daily Fresh
              <br /> Fresh Fruits
            </h1>
            <button>Buy now</button>
          </div>
          <img src={cat1} alt="cat1" />
        </div>
        <div className="cat-context">
          <div>
            <h1>
              Always New
              <br />
              Healthy Fruits
            </h1>
            <button>Buy now</button>
          </div>
          <img src={cat2} alt="cat2" />
        </div>
      </div>
    </div>
  );
};
export default Content2;
