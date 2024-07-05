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
    heartIcon.classList.add("animate-bounce");

    // Remove bounce animation after 1 second
    setTimeout(() => {
      heartIcon.classList.remove("animate-bounce");
    }, 100);
  }

  return (
    <div
      className="w-cardMobile sm:w-cardDesktop mx-auto rounded-lg m-4 overflow-hidden shadow-md"
      id={id}
    >
      {/* Image */}
      <a onClick={handleCardClick}>
        <img
          src={image} // Use the image prop directly
          className="p-2 rounded-lg hover:scale-105 cursor-pointer"
          alt={title}
        />
      </a>

      {/* Content */}
      <div className="p-4">
        {/* Price - Positioned just below the image */}
        <div className="bg-white">
          <h1 className="text-lg font-semibold">${price}</h1>
        </div>

        {/* Title */}
        <div className="inline-flex items-center">
          <h1 className="text-lg font-semibold mb-2 inline-flex">
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
                  addToFavorites ? "text-red-600" : "text-gray-500"
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
