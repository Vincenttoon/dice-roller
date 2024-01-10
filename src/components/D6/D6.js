import React, { useEffect, useState, useRef } from "react";

import D6Dice1 from "../../assets/d6/d1-6.jpg";
import D6Dice2 from "../../assets/d6/d2-6.jpg";
import D6Dice3 from "../../assets/d6/d3-6.jpg";
import D6Dice4 from "../../assets/d6/d4-6.jpg";
import D6Dice5 from "../../assets/d6/d5-6.jpg";
import D6Dice6 from "../../assets/d6/d6-6.jpg";

const D6 = () => {
  const images = [D6Dice1, D6Dice2, D6Dice3, D6Dice4, D6Dice5, D6Dice6];

  const [dieSrc1, setDieSrc1] = useState(images[0]);
  const [dieSrc2, setDieSrc2] = useState(images[0]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollTwo, setRollTwo] = useState(false);
  const [rollResult, setRollResult] = useState("");

  const timeoutRef = useRef(null);

  const rollDice = () => {
    setIsRolling(true);
    timeoutRef.current = setTimeout(() => {
      setIsRolling(false);

      const dieValue1 = Math.floor(Math.random() * 6);
      setDieSrc1(images[dieValue1]);

      if (rollTwo) {
        const dieValue2 = Math.floor(Math.random() * 6);
        setDieSrc2(images[dieValue2]);

        const higherRoll = Math.max(dieValue1 + 1, dieValue2 + 1);
        const combinedTotal = dieValue1 + 1 + dieValue2 + 1;

        setRollResult(
          `Higher roll is ${higherRoll}. Combined total is ${combinedTotal}`
        );
      } else {
        setRollResult(`Your roll is ${dieValue1 + 1}`);
      }
    }, 1000);
  };

  useEffect(() => {
    rollDice();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rollTwo]);

  return (
    <div className="page">
      <div className="title-div">
        <h1 className="page-title-2">D-6</h1>
      </div>
      <div className="container">
        <div className="dice-wrapper">
          <img
            src={dieSrc1}
            className={isRolling ? "dice shake" : "dice"}
            alt="D6"
          />
          {rollTwo && (
            <img
              src={dieSrc2}
              className={isRolling ? "dice shake" : "dice"}
              alt="D6"
            />
          )}
        </div>
        <p className="resultText">{rollResult}</p>
        <button
          onClick={() => {
            setRollTwo(false);
            rollDice();
          }}
          disabled={isRolling}
        >
          ROLL ONE
        </button>
        <button
          onClick={() => {
            setRollTwo(true);
            rollDice();
          }}
          disabled={isRolling}
        >
          ROLL TWO
        </button>
      </div>
    </div>
  );
};

export default D6;
