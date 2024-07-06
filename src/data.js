import series from "./series/series.js";

function getSeries(index) {
  return series[index];
}
function getSeriesCount() {
  return series.length;
}
function getAllSeries() {
  return series;
}
function getSeriesTitle(index) {
  return series[index].title;
}
function getAllSeriesTitles() {
  let titles = [];
  series.forEach((ser) => titles.push(ser.title));
  return titles;
}
function getSeriesCharacters(index) {
  return series[index].characters;
}

export {
  getSeries,
  getSeriesCount,
  getSeriesTitle,
  getSeriesCharacters,
  getAllSeries,
  getAllSeriesTitles,
};
