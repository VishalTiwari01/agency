import React, { useState } from "react";
import manpower from "../assets/Gallery/manpower-service-1570218202-5105560.jpg";
import cap from "../assets/Gallery/cap.png";
import Gard from "../assets/Gallery/guard-copy-696x465.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PhotoGallery = () => {
  const photos = [
    { image: manpower, author: "Manpower Service" },
    { image: cap, author: "Cap Service" },
    { image: Gard, author: "Guard Service" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-12">
        Photo Gallery
      </h1>

      {/* Navigation for Screens Smaller than 425px */}
      <div className="relative w-full h-64 sm:h-96 overflow-hidden flex flex-col items-center sm:hidden">
        <img
          src={photos[currentIndex].image}
          alt={photos[currentIndex].author}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
          >
            <FaArrowLeft className="text-gray-800" size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextImage}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
          >
            <FaArrowRight className="text-gray-800" size={20} />
          </button>
        </div>
      </div>

      {/* Gallery Grid for Screens 425px and Larger */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={photo.image}
              alt={photo.author}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">{photo.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
