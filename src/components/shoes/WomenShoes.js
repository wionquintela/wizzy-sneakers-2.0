import ShoeCard from "../ShoeCard";
import { useState, useEffect } from "react";
import womenShoesData from "../data/womenShoes.json";

export default function Women({ selected, setSelected, selectedShoe }) {
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    setShoesData(womenShoesData);
  });

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl mt-20 sm:text-5xl p-4 font-semibold">
          Women's Shoes
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          {shoesData.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard
                {...shoe}
                onClick={() => selectedShoe(shoe)}
                selected={selected}
                // className="w-1/4"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
