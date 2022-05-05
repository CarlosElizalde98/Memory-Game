import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar.js";
import CharacterCard from "./components/CharacterCard.js";
import characters from "./characters.json"


function App() {
  
  const [cards, setCards] = useState(characters)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [clicked, setClicked] = useState(false)

  const handleClick = (id) => {
    shuffleCharacters()
    handleScore(id)
  }

  const handleScore = (id) => {
    Object.values(cards).forEach(card => {
      if (id === card.id && card.clicked === false) {
        card.clicked = true;
        setClicked(false)
      } else if(id === card.id && card.clicked === true) {
        if(currentScore > highScore) {
          setHighScore(currentScore)
        }
        setCurrentScore(0);
        setClicked(true);
        Object.values(cards).forEach(card => card.clicked = false);
      }
    })
  }

  const shuffleCharacters = () => {
    const deck = [...cards]
    const shuffled = shuffle(deck)
    setCards(shuffled)
  }

  const shuffle = (array) => {
    let newArray = array;

    newArray = newArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) =>  value)

    return newArray;
  }

  const renderItems = (props) => {
    const items = props
    let displays = Object.values(items).map((item) => 
      <CharacterCard
      handleClick={handleClick}
      id={item.id}
      key={item.id}
      name={item.name}
      image={item.image}
      type={item.type}
    />
    )
    
    return displays
}
  return (

    <div className='game-container'>
      <Navbar score={currentScore} highScore={highScore}/>
      <div id='game'>{renderItems(cards)}</div>
    </div>
  );

}

export default App;
