import { useState } from "react";
import Card from "./card";
import { scatter } from "../scatter";

function CardsContainer({series, increaseScore, onWin, onLose}) {
  const [clickedCards, setClickedCards] = useState([])
  const characters = series.characters;
  const scatteredCharacters = scatter(characters)

  if(clickedCards.length >= characters.length) {
    onWin();
  }

  function cardClicked(char) {
    console.log("clicked a card")
      for (let i = 0; i < clickedCards.length; i++) {
        if(clickedCards[i] === char.index) {
          onLose();
          return;
        }
      }
    setClickedCards([...clickedCards, char.index])
    increaseScore();
  }

  return (
    <div className="cards-container">
      {scatteredCharacters.map((char) => {
        return (
          <Card
            key={char.index}
            character={char}
            onClick={() => cardClicked(char)}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
