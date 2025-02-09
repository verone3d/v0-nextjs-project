"use client"

import { useState } from "react"
import ChristmasCardCarousel from "../components/ChristmasCardCarousel"

export default function ChristmasCards() {
  const [cards] = useState(
    Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      year: 2025 - i,
      imageUrl: `/christmas-cards/${2025 - i}.jpg`, // Assuming you'll have images named by year
    })),
  )

  return (
    <div className="decorative-border">
      <h1 className="text-4xl font-bold mb-8 text-center">Christmas Card Designs</h1>
      <ChristmasCardCarousel cards={cards} />
    </div>
  )
}

