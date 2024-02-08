import banner from "../src/assets/Assets 3/banner_mens.png";
import Card from "./components/Card";


function App() {
  return (
   <div class="container m-auto">
    <header>
      <h1>JEJEET</h1>
    </header>
    <img class="rounded-md" src={banner} alt="" />

    <div  class="grid grid-cols-4 gap-10 my-4">
    <Card rounded={true} flat={false}> 
    <h2>Jejeet Tee,Black</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam facere minima, totam dolorum autem qui quis eveniet doloribus consequatur temporibus,
                 pariatur iure doloremque alias dolores eum veniam harum molestias.</p>
                 <button class="btn ">View</button>
                 </Card>
    <Card rounded={false} flat={true}>
    <h2>Jejeet Tee,White</h2>
    <button class="btn ">Click Me</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam facere minima, totam dolorum autem qui quis eveniet doloribus consequatur temporibus,
                 pariatur iure doloremque alias dolores eum veniam harum molestias.</p>
                 <p>Only $10</p>
                 
    </Card>
    
    </div>
    
   </div>
  );
}

export default App;
