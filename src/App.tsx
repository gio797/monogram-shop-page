import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import bgImage1 from "./assets/pexels-dmitry-demidov-3784221.jpg";
import bgImage3 from "./assets/pexels-pixabay-256381.jpg";
import bgImage2 from "./assets/pexels-pavel-danilyuk-8438976.jpg";
import card1 from "../src/assets/pexels-emirhan-sucu-18411634.jpg";
import card2 from "../src/assets/pexels-francesco-ungaro-1670977.jpg";
import card3 from "../src/assets/pexels-hendrik-b-744318.jpg";
import card4 from "../src/assets/pexels-mindscape-18442268.jpg";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero
        bgImage={bgImage3}
        textColor="var(--orange)"
        title="A CONSOLE FOR EVERY WORKFLOW"
        text="Discover the perfect console for yours."
      />
      <div className="cards grid">
        <Card
          cardImg={card1}
          name="MINI CONSOLE"
          price="$249"
          info="Ideal for everyday shortcuts. Adaptable to any workflow."
        />
        <Card
          cardImg={card2}
          name="AUDIO CONSOLE"
          price="$499"
          info="Ideal for music & audio. Adaptable to any workflow."
        />
        <Card
          cardImg={card3}
          name="PHOTO CONSOLE"
          price="$599"
          info="Ideal for photo & video. Adaptable to any workflow."
        />
        <Card
          cardImg={card4}
          name="VIDEO CONSOLE"
          price="$899"
          info="Ideal for Video & Film. Adaptable to any workflow."
        />
      </div>
      <Hero
        textColor="var(--purple)"
        bgImage={bgImage2}
        title="CREATE YOUR OWN CONSOLE"
        text="Add-on to make it perfect."
      />
      <div className="cards grid2">
        <Card
          cardImg={card1}
          name="MINI CONSOLE"
          price="$249"
          info="Ideal for everyday shortcuts. Adaptable to any workflow."
        />
        <Card
          cardImg={card2}
          name="AUDIO CONSOLE"
          price="$499"
          info="Ideal for music & audio. Adaptable to any workflow."
        />
        <Card
          cardImg={card3}
          name="PHOTO CONSOLE"
          price="$599"
          info="Ideal for photo & video. Adaptable to any workflow."
        />
        <Card
          cardImg={card4}
          name="VIDEO CONSOLE"
          price="$899"
          info="Ideal for Video & Film. Adaptable to any workflow."
        />
        <Card
          cardImg={card1}
          name="MINI CONSOLE"
          price="$249"
          info="Ideal for everyday shortcuts. Adaptable to any workflow."
        />
        <Card
          cardImg={card2}
          name="AUDIO CONSOLE"
          price="$499"
          info="Ideal for music & audio. Adaptable to any workflow."
        />
        <Card
          cardImg={card3}
          name="PHOTO CONSOLE"
          price="$599"
          info="Ideal for photo & video. Adaptable to any workflow."
        />
        <Card
          cardImg={card4}
          name="VIDEO CONSOLE"
          price="$899"
          info="Ideal for Video & Film. Adaptable to any workflow."
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
