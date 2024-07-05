import series from "./series/series.js";

function getSeriesCount() {
  return series.length;
}
function getSeriesTitle(index) {
  return series[index].title;
}
function getSeriesCharacters(index) {
  return series[index].characters;
}

export { getSeriesCount, getSeriesTitle, getSeriesCharacters };
