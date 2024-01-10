import React, { useEffect, useState, useRef } from "react";

import D10Dice1 from "../../assets/d10/d1-10.jpg";
import D10Dice2 from "../../assets/d10/d2-10.jpg";
import D10Dice3 from "../../assets/d10/d3-10.jpg";
import D10Dice4 from "../../assets/d10/d4-10.jpg";
import D10Dice5 from "../../assets/d10/d5-10.jpg";
import D10Dice6 from "../../assets/d10/d6-10.jpg";
import D10Dice7 from "../../assets/d10/d7-10.jpg";
import D10Dice8 from "../../assets/d10/d8-10.jpg";
import D10Dice9 from "../../assets/d10/d9-10.jpg";
import D10Dice10 from "../../assets/d10/d10-10.jpg";

const D10 = () => {
  const images = [
    D10Dice1,
    D10Dice2,
    D10Dice3,
    D10Dice4,
    D10Dice5,
    D10Dice6,
    D10Dice7,
    D10Dice8,
    D10Dice9,
    D10Dice10,
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

      const dieValue1 = Math.floor(Math.random() * 10);
      setDieSrc1(images[dieValue1]);

      if (rollTwo) {
        const dieValue2 = Math.floor(Math.random() * 10);
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
        <h1 className="page-title-2">D-10</h1>
      </div>
      <div className="container">
        <div className="dice-wrapper">
          <img
            src={dieSrc1}
            className={isRolling ? "dice shake" : "dice"}
            alt="D10"
          />
          {rollTwo && (
            <img
              src={dieSrc2}
              className={isRolling ? "dice shake" : "dice"}
              alt="D10"
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

export default D10;
