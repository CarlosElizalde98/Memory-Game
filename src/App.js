import React, {useState} from "react";
import Navbar from "./components/Navbar.js"

function App() {
  const [characters, setCharacters] = useState()
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [clicked, setClicked] = useState(false)


  return (
    <div>
      <Navbar />
    </div>
  );

}

export default App;
