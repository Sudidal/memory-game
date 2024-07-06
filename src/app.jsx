import { useState } from "react";
import {
  getSeries,
  getSeriesCount,
  getSeriesTitle,
  getSeriesCharacters,
  getAllSeries,
  getAllSeriesTitles,
} from "./data.js";
import CardsContainer from "./components/cardsContainer.jsx";
import DropDownSelect from "./components/dropDownSelect.jsx";
import { getCurScore, setHighScore, getHighScore } from "./scoreManager.js";

function App() {
  const [seriesIndex, setSeriesIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sessionKey, setSessionKey] = useState(0);
  const seriesTitlesList = getAllSeriesTitles();
  const series = getSeries(seriesIndex);

  function seriesChanged(e) {
    endGame();
    setSeriesIndex(e.target.value);
  }
  function increaseScore() {
    setScore(score + 1);
  }

  function onWin() {
    console.log("WIIIIIIIN");
    endGame();
  }
  function onLose() {
    console.log("LOOOOOOSE");
    endGame();
  }
  function endGame() {
    setHighScore(score);
    setScore(0);
    setSessionKey(sessionKey + 1);
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
      />
    </div>
  );
}

export default App;
