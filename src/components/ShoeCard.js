import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShoeCard({
  id,
  title,
  price,
  onClick,
  image,
  description,
  selected,
}) {
  const [addToFavorites, setAddToFavorites] = useState(false);
  const navigate = useNavigate();

  function handleCardClick() {
    onClick();
    navigate("/productCheckout");
  }

  function clickedHeart() {
    setAddToFavorites(!addToFavorites);

    // Toggle bounce animation on click
    const heartIcon = document.getElementById(`heartIcon-${id}`);
    heartIcon.classList.add("animate__bounce");

    // Remove bounce animation after 1 second
    setTimeout(() => {
      heartIcon.classList.remove("animate__bounce");
    }, 100);
  }

  return (
    <div
      className="w-cardMobile sm:w-cardDesktop  rounded-lg m-2 overflow-hidden shadow-md border-gray-400 border wow animate__animated animate__fadeIn"
      id={id}
      data-wow-delay={`${id}s`}
    >
      {/* Image */}
      <a onClick={handleCardClick}>
        <img
          src={image} // Use the image prop directly
          className="p-2 rounded-lg hover:scale-105 cursor-pointer transition delay-150 duration-300 ease-in-out"
          alt={title}
        />
      </a>

      {/* Content */}
      <div className="p-4">
        {/* Price - Positioned just below the image */}
        <div className="bg-[#f0f0f0]">
          <h1 className="text-2xl font-semibold">${price}</h1>
        </div>

        {/* Title */}
        <div className="inline-flex items-center">
          <h1 className="text-lg font-semibold mb-2 inline-flex text-gray-900">
            {title}{" "}
            <button
              className="pl-2"
              onClick={clickedHeart}
              // Dynamically add or remove bounce animation
              id={`heartIcon-${id}`}
            >
              {/* Inline SVG */}
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className={`fill-current ${
                  addToFavorites ? "text-red-600" : "text-slate-400"
                }`}
              >
                <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
              </svg>
            </button>
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
