"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ imageUrls }: { imageUrls: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isImageOverlayOpen, setIsImageOverlayOpen] = useState(false);
  const [overlayImage, setOverlayImage] = useState("");

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleGridView = () => {
    setIsGridView(!isGridView);
  };

  const handleImageClick = (url: string) => {
    setOverlayImage(url);
    setIsImageOverlayOpen(true);
  };

  const handleOverlayClick = () => {
    setIsImageOverlayOpen(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-8">
      {isImageOverlayOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <Image
            src={overlayImage}
            alt="Overlay Image"
            width={800}
            height={800}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>
      )}
      {!isGridView ? (
        <>
          <div className="overflow-hidden relative rounded-lg shadow-md">
            <div
              className="flex transition-transform duration-500 w-full h-64 lg:h-[30rem]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {imageUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`Slide ${index}`}
                  width={500}
                  height={500}
                  className="w-full flex-shrink-0 cursor-pointer"
                  style={{ objectFit: "contain" }}
                  onClick={() => handleImageClick(url)}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-white p-2 rounded-full border border-teal-500 shadow-md hover:bg-teal-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-white border border-teal-500 p-2 rounded-full shadow-md hover:bg-teal-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button
            onClick={toggleGridView}
            className="absolute right-4 bottom-4 text-teal-500 hover:text-white border border-teal-500 p-2 rounded-full shadow-md hover:bg-teal-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h7.5v7.5H3V4.5zm10.5 0h7.5v7.5h-7.5V4.5zM3 13.5h7.5v7.5H3v-7.5zm10.5 0h7.5v7.5h-7.5v-7.5z"
              />
            </svg>
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-teal-500" : "bg-teal-200"
                }`}
              ></button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => handleImageClick(url)}
              >
                <Image
                  src={url}
                  alt={`Grid Image ${index}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          <button
            onClick={toggleGridView}
            className="absolute right-4 bottom-4 text-teal-500 hover:text-white border border-teal-500 p-2 rounded-full shadow-md hover:bg-teal-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
