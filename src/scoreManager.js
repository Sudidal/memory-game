const HIGH_SCORE_KEY = "highscore";

function setHighScore(curScore) {
  const prevHighScore = window.localStorage.getItem(HIGH_SCORE_KEY);
  if (curScore > prevHighScore) {
    window.localStorage.setItem(HIGH_SCORE_KEY, curScore);
  }
}
function getHighScore() {
  const score = window.localStorage.getItem(HIGH_SCORE_KEY);
  return score ? score : 0;
}

export { getHighScore, setHighScore };
