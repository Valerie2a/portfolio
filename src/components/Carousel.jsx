import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/components.scss";

export default function Carousel({ images = [], alt, className = "" }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return null; // rien à afficher si pas d'image
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`carousel ${className}`}>
      {/* Bouton précédent */}
      {images.length > 1 && (
        <button
          className="carousel__btn prev"
          onClick={prevSlide}
          aria-label="Image précédente"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Image courante */}
      <img
        src={images[current]}
        alt={alt || `Image ${current + 1}`}
        className="carousel__img"
        loading="lazy"
      />

      {/* Bouton suivant */}
      {images.length > 1 && (
        <button
          className="carousel__btn next"
          onClick={nextSlide}
          aria-label="Image suivante"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Petits points de navigation */}
      {images.length > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Navigation des images">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Aller à l'image ${index + 1}`}
              aria-selected={index === current}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
