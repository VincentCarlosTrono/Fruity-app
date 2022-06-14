import React from "react";
import "../Styling/Additional.scss";
import avocado from "../Media/avocado.jpeg";
import blueberry from "../Media/blueberry.jpeg";
import watermelon from "../Media/watermelon.jpeg";

const addProducts = [
  {
    picture: avocado,
    name: "Avocado",
    price: "$2",
  },
  {
    picture: blueberry,
    name: "Blueberry",
    price: "$1",
  },
  {
    picture: watermelon,
    name: "Watermelon",
    price: "$1.03",
  },
];

const Additional = () => {
  return (
    <div className="grid-container">
      <div className="container additional-product">
        <h1>Additional Products</h1>
        <div className="addCards">
          {addProducts.map((addProduct: any) => {
            const { picture, name, price } = addProduct;
            return (
              <div className="addCard">
                <img src={picture} alt="" />
                <div className="addcard-info">
                  <h2>{name}</h2>
                  <p>{price}</p>
                  <button>
                    <i className="bx bx-cart-download"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Additional;
