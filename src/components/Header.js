import Button from "./Button";

export default function Header() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl sm:text-5xl mt-20 sm:mt-40 wow animate__animated animate__fadeIn font-semibold">
        Wizzy Sneakers 2.0
      </h1>
      {/* <div className="mt-4 pb-20">
        <Button
          properties="hover:bg-orange-600 rounded font-medium border border-black"
          buttonText="Browse Shoes"
          link="#shoeSelect"
        />
      </div> */}
      <div
        className="flex flex-wrap items-center justify-center pt-20"
        id="shoeSelect"
      >
        <div className="p-5 wow animate__animated animate__fadeIn">
          <a href="/men">
            <img
              src="/assets/Men Shoes/air jordan 9g.webp"
              className="w-card rounded-full cursor-pointer hover:scale-105 shadow-inner opacity-100 hover:opacity-75"
            />
          </a>
          <h1 className="p-4">Men's Shoes</h1>
        </div>
        <div className="p-5 wow animate__animated animate__fadeIn">
          <a href="/women">
            <img
              src="/assets/Women Shoes/air force 1 shadow.webp"
              className="w-card rounded-full cursor-pointer hover:scale-105 shadow-inner opacity-100 hover:opacity-75"
            />
          </a>
          <h1 className="p-4">Women's Shoes</h1>
        </div>
        <div className="p-5 wow animate__animated animate__fadeIn">
          <a href="/kids">
            <img
              src="/assets/Kid Shoes/air jordan legacy 312.webp"
              className="w-card rounded-full cursor-pointer hover:scale-105 shadow-inner opacity-100 hover:opacity-75"
            />
          </a>
          <h1 className="p-4">Kid's Shoes</h1>
        </div>
      </div>
    </div>
  );
}
