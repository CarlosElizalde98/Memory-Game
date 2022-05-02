import React, {useState} from "react";
import Navbar from "./components/Navbar.js";


function App() {
  const [characters, setCharacters] = useState()
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [clicked, setClicked] = useState(false)

  const handleClick = (id) => {
    shuffleCharacters()
    handleScore(id)
  }

  const handleScore = (id) => {
    characters.forEach(character => {
      if (id === character.id && character.clicked === false) {
        character.clicked = true;
        setClicked(false)
      } else if(id === character.id && character.clicked === true) {
        if(currentScore > highScore) {
          setHighScore(currentScore)
        }
        setCurrentScore(0);
        setClicked(true);
        characters.forEach(character => character.clicked = false);
      }
    })
  }

  const shuffleCharacters = () => {
    const shuffled = shuffle(characters)
    setCharacters({shuffled})
  }

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;
    let newArray = array;

    while (0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }

    return newArray;
  }
  return (
    <div>
      <Navbar score={currentScore} highScore={highScore}/>
    </div>
  );

}

export default App;
