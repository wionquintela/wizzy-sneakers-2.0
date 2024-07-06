import { useState } from "react";

export default function ProductCheckout({
  selected,
  setSelected,
  selectedShoe,
  onClick,
}) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selected.price * quantity;
  const deliveryFee = 12.99;
  console.log("Checkout Selected Shoe:", selected);

  return (
    <>
      {/* <h1 className="text-4xl mt-20 sm:text-5xl p-4 font-semibold">
        Checkout Shoes
      </h1> */}
      <div className=" container mx-auto flex justify-end">
        <button className=" text-md  p-3 m-2 rounded-full shadow-md text-white bg-red-500 hover:scale-105 border ">
          <a href="/">Cancel</a>
        </button>
      </div>
      <div
        className="flex container mx-auto m-3 flex-row flex-wrap justify-center"
        id={selected.id}
      >
        <div className="sm:w-1/2 flex-col p-5 justify-between">
          <h1 className=" text-4xl text-semibold pb-2 wow animate__animated animate__fadeInLeft">
            {selected.title}
          </h1>
          <p className="text-sm text-gray-600 wow animate__animated animate__fadeInLeft">
            {selected.description}
          </p>
          <p className="text-2xl sm:text-md  text-center sm:text-start sm:mt-10">
            Quantity:{" "}
            <button
              className=" text-2xl  p-5 sm:p-2 m-2 rounded-md shadow-md hover:scale-105 border border-gray-400 "
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            {quantity}
            {quantity > 1 && (
              <button
                className=" text-2xl  p-5 sm:p-2 m-2 rounded-md shadow-md hover:scale-105 border border-gray-400"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
            )}
          </p>
          <p className="text-xl sm:text-sm mt-5 sm:mt-20 text-gray-600 ">
            <div className="p-1">Total Product Cost: $ {totalPrice}</div>
            <div className="p-1 border-b">Delivery Fee: $ {deliveryFee}</div>
            <div className="pt-2 pl-1">
              Your Total Price is: $ {totalPrice + deliveryFee}
            </div>
            <div className="text-center">
              <button
                className=" text-xl p-4 sm:p-2 m-2 rounded-md shadow-md text-blue-500 hover:scale-105 border border-gray-400"
                onClick={onClick}
              >
                Checkout Order
              </button>
            </div>
          </p>
        </div>
        <div className=" w-cardMobile  m-1 border rounded-md justify-start">
          <img src={selected.image} alt="shoes" />
        </div>
      </div>
    </>
  );
}
