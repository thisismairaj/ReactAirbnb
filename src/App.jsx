import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
  const cardElements = cardData.map(function (card) {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cardElements}</section>
    </div>
  )
}
