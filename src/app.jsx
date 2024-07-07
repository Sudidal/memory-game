import { useState, useRef } from "react";
import {
  getSeries,
  getSeriesTitle,
  getAllSeriesTitles,
} from "./data.js";
import CardsContainer from "./components/cardsContainer.jsx";
import DropDownSelect from "./components/dropDownSelect.jsx";
import Popup from "./components/popup.jsx";
import { setHighScore, getHighScore } from "./scoreManager.js";

function App() {
  const [seriesIndex, setSeriesIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sessionKey, setSessionKey] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [win, setWin] = useState(false)
  const seriesTitlesList = getAllSeriesTitles();
  const series = getSeries(seriesIndex);


  function seriesChanged(e) {
    endGame();
    setSeriesIndex(e.target.value);
    newGame();
  }
  function increaseScore() {
    setScore(score + 1);
  }

  function onWin() {
    endGame();
    setWin(true)
    console.log("WIIIIIIIN");
  }
  function onLose() {
    endGame();
    setWin(false)
    console.log("LOOOOOOSE");
  }
  function endGame() {
    setHighScore(score);
    setGameEnded(true);
  }
  function newGame() {
    setScore(0);
    setSessionKey(sessionKey + 1);
    setGameEnded(false)
    setWin(false)
  }

  return (
    <div className="container">
      <DropDownSelect
        options={seriesTitlesList}
        title={"Select Series"}
        onChange={seriesChanged}
      />
      <div className="score-container">
        <p>Score: {score}</p>
        <p>High Score: {getHighScore()}</p>
      </div>
      <h3 className="header series-header">{getSeriesTitle(seriesIndex)}</h3>
      <CardsContainer
        key={sessionKey}
        series={series}
        increaseScore={increaseScore}
        onWin={onWin}
        onLose={onLose}
        gameEnded={gameEnded}
      />
      {gameEnded && (
        <Popup
          title={win? "You Won": "You Lost"}
          para={win? "You clicked every card once" : "You clicked the same card twice"}
          open={gameEnded}
          onClose={newGame}
        />
      )}
    </div>
  );
}

export default App;
