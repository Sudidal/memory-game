import { getData } from "./data.js";
import Card from "./components/card";

function App() {
  return (
    <Card
      img={
        "https://static1.personality-database.com/profile_images/9e31b789328647c4b1e738ad7e14127b.png"
      }
      name={"Gohan"}
    />
  );
}

export default App;
