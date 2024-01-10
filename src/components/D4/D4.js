import React, { useEffect, useState, useRef } from "react";

import D4Dice1 from "../../assets/d4/d1-4.jpg";
import D4Dice2 from "../../assets/d4/d2-2.jpg";
import D4Dice3 from "../../assets/d4/d3-4.jpg";
import D4Dice4 from "../../assets/d4/d4-4.jpg";

const D4 = () => {
  const images = [D4Dice1, D4Dice2, D4Dice3, D4Dice4];

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

      const dieValue1 = Math.floor(Math.random() * 4);
      setDieSrc1(images[dieValue1]);

      if (rollTwo) {
        const dieValue2 = Math.floor(Math.random() * 4);
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
          alt="D4"
        />
        {rollTwo && (
          <img
            src={dieSrc2}
            className={isRolling ? "dice shake" : "dice"}
            alt="D4"
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

export default D4;
