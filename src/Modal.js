import React from "react";

const Modal = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-full h-full max-w-5xl max-h-full p-4 overflow-y-auto flex items-center justify-center"> 
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 w-12 text-2xl hover:bg-red-700 transition"
          aria-label="Close modal"
        >
          &times; 
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700 transition"
          aria-label="Previous image"
        >
          &#10094; 
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700 transition"
          aria-label="Next image"
        >
          &#10095; 
        </button>

        <img
          src={image}
          alt="Gallery"
          className="w-auto h-auto max-h-[80vh] max-w-full rounded-lg shadow-lg bg-cover" 
        />
      </div>
    </div>
  );
};

export default Modal;