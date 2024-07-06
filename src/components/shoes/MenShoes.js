import ShoeCard from "../ShoeCard";
import { useState, useEffect } from "react";
import menShoesData from "../data/menShoes.json";

export default function MenShoes({ selected, setSelected, selectedShoe }) {
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    setShoesData(menShoesData);
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl mt-20 sm:text-5xl p-4 font-semibold wow animate__animated animate__fadeInLeft">
          Men's Shoes
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {shoesData.map((shoe) => (
          <div key={shoe.id}>
            <ShoeCard
              {...shoe}
              onClick={() => selectedShoe(shoe)} // Pass the shoe data
              selected={selected}
              // className="w-1/4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
