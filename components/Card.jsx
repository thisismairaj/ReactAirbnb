import React from "react"

export default function Card(props) {
  let imgsrc = `../images/${props.img}`;
  return (
    <div className="card">
      <img src={imgsrc} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>5.0</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}