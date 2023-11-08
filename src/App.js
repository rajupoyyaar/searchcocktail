import React from "react"
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Error from "./Pages/Error"
import SingleCocktail from "./Pages/SingleCocktail"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // <Route path="/*" element={<Error />} />
        <Route path="/cocktail/:id" element={<SingleCocktail /> } />
      </Routes>
    </div>
    
  );
}

export default App;
