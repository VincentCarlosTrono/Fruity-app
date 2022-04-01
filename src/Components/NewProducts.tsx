import React from "react";
import "../Styling/NewProducts.scss";
import mango from "../Media/mango.ccc09483.png";
import grapes from "../Media/grape.70083944.png";
import mango2 from "../Media/mango2.c720de81.png";
import strawberry from "../Media/strawberry.f451ee30.png";

const NewProducts = () => {
  const fruits = [
    {
      photo: mango,
      name: "Mango",
      price: "$1",
    },
    {
      photo: grapes,
      name: "Grapes",
      price: "$1.2",
    },
    {
      photo: mango2,
      name: "Fresh Mango",
      price: "$2",
    },
    {
      photo: strawberry,
      name: "Strawberry",
      price: "$1",
    },
  ];

  return (
    <div className="cards" id="new-product">
      <h1>New Products</h1>
      <div className="card-container">
        {fruits.map((fruit: any) => {
          const { name, price, photo } = fruit;

          return (
            <div className="new-product">
              <div className="card">
                <div className="card-info">
                  <button>
                    <i className="bx bxs-cart-alt"></i>
                  </button>
                  <div>
                    <img src={photo} alt="mango" />
                  </div>
                  <div>
                    <h1>{name}</h1>
                    <p>{price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
