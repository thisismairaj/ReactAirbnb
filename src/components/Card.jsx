import React from "react"
import star from "../images/star.png"
import mountainbike from "../images/mountain-bike.png"
import katiezeferes from "../images/katie-zaferes.png"
import weddingphoto from "../images/wedding-photography.png"

export default function Card(props) {
  let imgsrc = `../images/${props.img}`
  switch (props.img) {
    case "mountain-bike.png":
      imgsrc = mountainbike
      break
    case "katie-zaferes.png":
      imgsrc = katiezeferes
      break
    case "wedding-photography.png":
      imgsrc = weddingphoto
      break
  }
  // if (props.img == "mountain-bike.png") {
  //   imgsrc = mountainbike
  // }
  return (
    <div className="card">
      <img src={imgsrc} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  )
}
