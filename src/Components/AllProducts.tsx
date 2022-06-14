import React, { useState } from "react";
import "../Styling/AllProducts.scss";
import product1 from "../Media/grape.70083944.png";
import product2 from "../Media/mango.ccc09483.png";
import product3 from "../Media/product10.5ed793bb.png";
import product4 from "../Media/product7.99e23d10.png";
import product5 from "../Media/product3.983c17a0.png";
import product6 from "../Media/mango2.c720de81.png";
import product7 from "../Media/banana.jpeg";
import product8 from "../Media/dragonfruit.jpeg";

const products = [
  {
    picture: product1,
    name: "Grapes",
    price: "$1.20",
  },
  {
    picture: product2,
    name: "Mango",
    price: "$2.00",
  },
  {
    picture: product3,
    name: "Apple",
    price: "$1.00",
  },
  {
    picture: product4,
    name: "Strawberry",
    price: "$2.05",
  },
];
const products2 = [
  {
    picture: product5,
    name: "Lemon",
    price: "$1.00",
  },
  {
    picture: product6,
    name: "Sliced Mango",
    price: "$2.00",
  },
  {
    picture: product7,
    name: "Banana",
    price: "$1.02",
  },
  {
    picture: product8,
    name: "Dragon Fruit",
    price: "$2.03",
  },
];

const AllProducts = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="grid-container">
      <div className="container product-cards">
        <div className="allProducts">
          <h1>All Products</h1>
          <div className="product-card">
            {products.map((product: any) => {
              const { picture, name, price } = product;
              return (
                <div className="product">
                  <img src={picture} alt="productImage" />
                  <h1>{name}</h1>
                  <p>{price}</p>
                  <button>
                    <i className="bx bx-cart-download"></i>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="hide-product">
            <div className="product-card">
              {products2.map((product2: any) => {
                const { picture, name, price } = product2;
                return (
                  <div className="product">
                    <img src={picture} alt="productImage" />
                    <h1>{name}</h1>
                    <p>{price}</p>
                    <button>
                      <i className="bx bx-cart-download"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="show-btn">
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              Show more
            </button>
          </div>
          {show ? (
            <div className="product2">
              <div className="product-card">
                {products2.map((product2: any) => {
                  const { picture, name, price } = product2;
                  return (
                    <div className="product">
                      <img src={picture} alt="productImage" />
                      <h1>{name}</h1>
                      <p>{price}</p>
                      <button>
                        <i className="bx bx-cart-download"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
