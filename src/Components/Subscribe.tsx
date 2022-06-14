import React from "react";
import "../Styling/Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="grid-container">
      <div className="container subscription ">
        <div className="info">
          <h1>Subscribe for more videos</h1>
          <p>
            If you like this website make sure to leave a like, <br />
            comment and Subscribe
          </p>
        </div>
        <div className="email">
          <input type="text" placeholder="fruity@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
