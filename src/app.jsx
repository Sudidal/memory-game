import { useState } from "react";
import { getSeriesCount, getSeriesTitle, getSeriesCharacters } from "./data.js";
import Card from "./components/card";

function App() {
  const seriesIndex = 1;
  const characters = getSeriesCharacters(seriesIndex);
  const [clickedCards, setClickedCards] = useState([])

  console.log(clickedCards)
  if(clickedCards.length >= characters.length) {
    console.log("you win")
  }
  
  function cardClicked(char) {
    console.log("clicked a card")
    clickedCards.forEach(card => {
      if(card === char.index) {
        console.log("you looooooooose")
      }
    })
    setClickedCards([...clickedCards, char.index])
  }

  return (
    <div className="container">
      <h3>{getSeriesTitle(seriesIndex)}</h3>
      <div className="cards-container">
        {characters.map((char) => {
          return <Card key={char.index} character={char} onClick={() => cardClicked(char)} />;
        })}
      </div>
    </div>
  );
}

export default App;
