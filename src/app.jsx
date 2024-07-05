import { getSeriesCount, getSeriesTitle, getSeriesCharacters } from "./data.js";
import Card from "./components/card";

function App() {
  const characters = getSeriesCharacters(3);
  return (
    <div className="cards-container">
      {characters.map((char) => {
        return <Card key={char.name} character={char} />;
      })}
    </div>
  );
}

export default App;
