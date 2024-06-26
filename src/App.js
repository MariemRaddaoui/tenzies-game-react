import "./App.css";
import Die from "./components/Die";
import React from "react";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rollsNumber, setRollsNumber] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(
    parseInt(localStorage.getItem("bestScore") || 0)
  );

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstDie = dice[0].value;
    const allSame = dice.every((die) => die.value === firstDie);
    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, [dice]);

  React.useEffect(() => {
    localStorage.setItem("bestScore", bestScore.toString());
  }, [bestScore]);

  function allNewDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newArray.push({
        id: i,
        value: randomNumber,
        isHeld: false,
      });
    }
    return newArray;
  }

  function roll() {
    setDice(
      dice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.floor(Math.random() * 6) + 1,
            }
      )
    );
    setRollsNumber((oldValue) => oldValue + 1);
  }

  function holdDice(id) {
    setDice(
      dice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  return (
    <main>
      {tenzies && <Confetti />}

      <div className="dice-container">{elements}</div>
      <h4>Number of rolls: {rollsNumber}</h4>
      {bestScore !== 0 && <h4>Best Score: {bestScore}</h4>}
      <button className="roll-dice" onClick={tenzies ? newGame : roll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
