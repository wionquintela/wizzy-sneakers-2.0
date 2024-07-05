import ShoeCard from "../ShoeCard";
import { useState, useEffect } from "react";
import kidsShoesData from "../data/kidShoes.json";

export default function KidsShoes({ selected, setSelected, selectedShoe }) {
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch logic if fetching from an API)
    setShoesData(kidsShoesData);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mt-20 sm:text-5xl p-4 font-semibold">
        Kids' Shoes
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {shoesData.map((shoe) => (
          <div key={shoe.id}>
            <ShoeCard
              {...shoe}
              onClick={() => selectedShoe(shoe)}
              selected={selected}
              className="w-1/4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
