import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="container mx-auto text-xs sm:text-sm md:text-sm lg:text-sm  border border-black">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Link at the start */}
        <div className="w-1/8 text-center  p-2">
          <a
            className="inline-flex item-center cursor-pointer navLinks"
            href="/"
          >
            Home
          </a>
        </div>

        {/* Links at the end */}
        <div className="flex space-x-4">
          {" "}
          {/* Aligning the end links together */}
          <div className="w-1/8 text-center  p-2">
            <a className="cursor-pointer navLinks hover:underline" href="/men">
              Men
            </a>
          </div>
          <div className="w-1/8 text-center  p-2">
            <a
              className="cursor-pointer navLinks hover:underline"
              href="/women"
            >
              Women
            </a>
          </div>
          <div className="w-1/8 text-center  p-2">
            <a className="cursor-pointer navLinks hover:underline" href="/kids">
              Kids
            </a>
          </div>
          <div className="w-1/8 text-center  p-2">
            <a className="cursor-pointer navLinks hover:underline" href="/cart">
              <button>
                <h1 className="inline-flex">Cart</h1>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
