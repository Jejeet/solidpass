import banner from "../src/assets/Assets 3/banner_mens.png";
import Card from "./components/Card";


function App() {
  return (
   <div>
    <header>
      <h1>JEJEET</h1>
    </header>
    <img src={banner} alt="" />

    <Card />
    <Card />
    <Card />
   </div>
  );
}

export default App;
