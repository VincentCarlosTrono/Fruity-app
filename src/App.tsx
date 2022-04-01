import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content1 from "./Components/Content1";
import NewProducts from "./Components/NewProducts";
import Content2 from "./Components/Content2";
import AllProducts from "./Components/AllProducts";
import Additional from "./Components/Additional";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar-grid">
        <div></div>
        <div className="navbar">
          <Navbar />
        </div>
        <div></div>
      </div>

      <header className="App-header">
        <div></div>
        <div>
          <Content1 />
          <NewProducts />
          <Content2 />
          <AllProducts />
          <Additional />
          <Subscribe />
          <Footer />
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default App;
