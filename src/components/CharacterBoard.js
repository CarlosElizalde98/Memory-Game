import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import Navbar from "./Navbar.js";
import ion_titan from "./images/ion-titan.webp";
import tone_titan from "./images/tone-titan.webp";
import scorch from "./images/scorch-titan.webp";
import northstar from "./images/northstar-titan.webp";
import legion from "./images/legion-titan.webp";
import ronin from "./images/ronin-titan.webp";
import monarch from "./images/monarch-titan.webp";
import cooper from "./images/cooper-pilot.webp";
import bt from "./images/bt-titan.webp";
import lastimosa from ".//images/lastimosa.webp";
import kuben from "./images/kuben-blisk.webp";
import sarah from "./images/sarah-briggs.webp";

function CharacterBoard() {
  let images = [
    {
      id: 1,
      clicked: false,
      name: "Ion",
      image: ion_titan,
      type: "Titan",
    },
    {
      id: 2,
      clicked: false,
      name: "Tone",
      image: tone_titan,
      type: "Titan",
    },
    {
      id: 3,
      clicked: false,
      name: "Scorch",
      image: scorch,
      type: "Titan",
    },
    {
      id: 4,
      clicked: false,
      name: "Legion",
      image: legion,
      type: "Titan",
    },
    {
      id: 5,
      clicked: false,
      name: "Northstar",
      image: northstar,
      type: "Titan",
    },
    {
      id: 6,
      clicked: false,
      name: "Ronin",
      image: ronin,
      type: "Titan",
    },
    {
      id: 7,
      clicked: false,
      name: "Monarch",
      image: monarch,
      type: "Titan",
    },
    {
      id: 8,
      clicked: false,
      name: "Jack Cooper",
      image: cooper,
      type: "pilot",
    },
    {
      id: 9,
      clicked: false,
      name: "BT-7274",
      image: bt,
      type: "Titan",
    },
    {
      id: 10,
      clicked: false,
      name: "Tai Lastimosa",
      image: lastimosa,
      type: "Pilot",
    },
    {
      id: 11,
      clicked: false,
      name: "Kuben Blisk",
      image: kuben,
      type: "Pilot",
    },
    {
      id: 12,
      clicked: false,
      name: "Sarah Briggs",
      image: sarah,
      type: "Pilot",
    },
  ];

  const [cards, setCards] = useState(images);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    shuffleCharacters();
  }, []);

  useEffect(() => {
    document.title = "Memory Game";
  });

  const handleClick = (id) => {
    shuffleCharacters();
    handleScore(id);
  };

  const handleScore = (id) => {
    Object.values(cards).forEach((card) => {
      if (id === card.id && card.clicked === false) {
        card.clicked = true;
        setCurrentScore(currentScore + 1);
      } else if (id === card.id && card.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore);
          setCurrentScore(0);
        }
        setCurrentScore(0);
        Object.values(cards).forEach((card) => (card.clicked = false));
      }
    });
  };

  const shuffleCharacters = () => {
    const deck = [...cards];
    const shuffled = shuffle(deck);
    setCards(shuffled);
  };

  const shuffle = (array) => {
    let newArray = array;

    newArray = newArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return newArray;
  };

  const renderItems = (props) => {
    const items = props;
    let displays = Object.values(items).map((item) => (
      <CharacterCard
        handleClick={handleClick}
        id={item.id}
        key={item.id}
        name={item.name}
        image={item.image}
        type={item.type}
      />
    ));

    return displays;
  };

  return (
    <div className="gameboard-container">
      <Navbar score={currentScore} highScore={highScore} />
      <div id="game">{renderItems(cards)}</div>
    </div>
  );
}

export default CharacterBoard;
