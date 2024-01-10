import React, { useEffect, useState, useRef } from "react";

import D8Dice1 from "../../assets/d8/d1-8.jpg";
import D8Dice2 from "../../assets/d8/d2-8.jpg";
import D8Dice3 from "../../assets/d8/d3-8.jpg";
import D8Dice4 from "../../assets/d8/d4-8.jpg";
import D8Dice5 from "../../assets/d8/d5-8.jpg";
import D8Dice6 from "../../assets/d8/d6-8.jpg";
import D8Dice7 from "../../assets/d8/d7-8.jpg";
import D8Dice8 from "../../assets/d8/d8-8.jpg";

const D8 = () => {
  const images = [
    D8Dice1,
    D8Dice2,
    D8Dice3,
    D8Dice4,
    D8Dice5,
    D8Dice6,
    D8Dice7,
    D8Dice8,
  ];

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

      const dieValue1 = Math.floor(Math.random() * 8);
      setDieSrc1(images[dieValue1]);

      if (rollTwo) {
        const dieValue2 = Math.floor(Math.random() * 8);
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
    <div className="container">
      <div className="dice-wrapper">
        <img
          src={dieSrc1}
          className={isRolling ? "dice shake" : "dice"}
          alt="D8"
        />
        {rollTwo && (
          <img
            src={dieSrc2}
            className={isRolling ? "dice shake" : "dice"}
            alt="D8"
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
  );
};

export default D8;
