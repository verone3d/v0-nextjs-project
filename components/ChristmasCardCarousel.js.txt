"use client"

import { useState } from "react"
import Image from "next/image"

export default function ChristmasCardCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={cards[currentIndex].imageUrl || "/placeholder.svg"}
          alt={`Christmas card from ${cards[currentIndex].year}`}
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Next slide"
      >
        &#10095;
      </button>
      <div className="text-center mt-4">
        <p className="text-xl font-semibold">{cards[currentIndex].year} Design</p>
      </div>
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-1 ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

