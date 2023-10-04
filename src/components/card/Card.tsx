import "./card.css";

type cardProps = {
  cardImg: string;
  name: string;
  price: string;
  info: string;
};

function Card({ cardImg, name, price, info }: cardProps) {
  return (
    <div className="card">
      <div className="pre-order">
        <span>PRE-ORDER</span>
      </div>
      <img src={cardImg} alt="card image" />
      <div className="title-wrapper">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <p>{info}</p>
    </div>
  );
}

export default Card;
