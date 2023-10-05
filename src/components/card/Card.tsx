import { useState } from "react";
import "./card.css";

type cardProps = {
  cardImg: string;
  name: string;
  price: string;
  info: string;
};

function Card({ cardImg, name, price, info }: cardProps) {
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="pre-order">
        <span>PRE-ORDER</span>
      </div>
      <img src={cardImg} alt="card image" />
      <div className="title-wrapper">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <p>{info}</p>
      {showButton ? <button>SHOP NOW</button> : null}
    </div>
  );
}

export default Card;
