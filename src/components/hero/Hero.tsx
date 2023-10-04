import "./hero.css";

type PropTypes = {
  bgImage: string;
  title: string;
  text: string;
  textColor: string;
};

function Hero({ bgImage, title, text, textColor }: PropTypes) {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${bgImage})`, color: textColor }}
    >
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Hero;
