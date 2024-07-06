const HIGH_SCORE_KEY = "highscore";
let curScore = 0;

function setCurScore(n) {
  curScore = n;
}
function getCurScore() {
  return curScore;
}

function setHighScore(curScore) {
  const prevHighScore = window.localStorage.getItem(HIGH_SCORE_KEY);
  if (curScore > prevHighScore) {
    window.localStorage.setItem(HIGH_SCORE_KEY, curScore);
  }
}
function getHighScore() {
  return window.localStorage.getItem(HIGH_SCORE_KEY);
}

export { getCurScore, setCurScore, getHighScore, setHighScore };
