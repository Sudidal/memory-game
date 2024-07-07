import { useState } from "react";
import Card from "./card";
import { scatter } from "../scatter";
import { playSound } from "../audioPlayer";

function CardsContainer({ series, increaseScore, onWin, onLose, gameEnded }) {
  const [clickedCards, setClickedCards] = useState([]);
  const characters = series.characters;
  const scatteredCharacters = scatter(characters);

  playSound("tap-on-table.mp3")
  playSound("card-flip.mp3")
  playSound("swoosh.mp3")

  if (clickedCards.length >= characters.length) {
    onWin();
  }

  function cardClicked(char) {
    if (gameEnded) return;

    console.log("clicked a card");
    for (let i = 0; i < clickedCards.length; i++) {
      if (clickedCards[i] === char.index) {
        onLose();
        return;
      }
    }
    setClickedCards([...clickedCards, char.index]);
    increaseScore();
  }

  return (
    <div className="cards-container">
      {scatteredCharacters.map((char) => {
        const random = Math.random();
        return (
          <Card
            key={(char.index + 1) * random}
            character={char}
            onClick={() => cardClicked(char)}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
