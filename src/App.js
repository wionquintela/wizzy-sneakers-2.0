import "animate.css";
import WOW from "wowjs";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenShoes from "./components/shoes/MenShoes";
import WomenShoes from "./components/shoes/WomenShoes";
import KidsShoes from "./components/shoes/KidsShoes";
import Checkout from "./components/productCheckout"; // Ensure this follows the component naming conventions
import { useState, useEffect } from "react";

function App() {
  const [selected, setSelected] = useState({});
  const [cartNotif, setCartNotif] = useState("");

  function addToCart() {
    console.log("Add to cart");
  }

  function selectedShoe(shoe) {
    setSelected(shoe);
    console.log("Selected shoe:", selected);
  }

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className=" App text-black">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/men"
            element={
              <MenShoes
                selected={selected}
                setSelected={setSelected}
                selectedShoe={selectedShoe}
              />
            }
          />
          <Route
            path="/women"
            element={
              <WomenShoes
                selected={selected}
                setSelected={setSelected}
                selectedShoe={selectedShoe}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <KidsShoes
                selected={selected}
                setSelected={setSelected}
                selectedShoe={selectedShoe}
              />
            }
          />
          <Route path="/" element={<Header />} />
          <Route
            path="/productCheckout"
            element={
              <Checkout
                selected={selected}
                setSelected={setSelected}
                selectedShoe={selectedShoe}
                onClick={() => addToCart()}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
