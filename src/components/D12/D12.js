import React, { useEffect, useState, useRef } from "react";

import "../D12/D12.scss";

import D12Dice1 from "../../assets/d12/d1-12.jpg";
import D12Dice2 from "../../assets/d12/d2-12.jpg";
import D12Dice3 from "../../assets/d12/d3-12.jpg";
import D12Dice4 from "../../assets/d12/d4-12.jpg";
import D12Dice5 from "../../assets/d12/d5-12.jpg";
import D12Dice6 from "../../assets/d12/d6-12.jpg";
import D12Dice7 from "../../assets/d12/d7-12.jpg";
import D12Dice8 from "../../assets/d12/d8-12.jpg";
import D12Dice9 from "../../assets/d12/d9-12.jpg";
import D12Dice10 from "../../assets/d12/d10-12.jpg";
import D12Dice11 from "../../assets/d12/d11-12.jpg";
import D12Dice12 from "../../assets/d12/d12-12.jpg";

const D12 = () => {
  const images = [
    D12Dice1,
    D12Dice2,
    D12Dice3,
    D12Dice4,
    D12Dice5,
    D12Dice6,
    D12Dice7,
    D12Dice8,
    D12Dice9,
    D12Dice10,
    D12Dice11,
    D12Dice12,
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

      const dieValue1 = Math.floor(Math.random() * 12);
      setDieSrc1(images[dieValue1]);

      if (rollTwo) {
        const dieValue2 = Math.floor(Math.random() * 12);
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
          alt="D12"
        />
        {rollTwo && (
          <img
            src={dieSrc2}
            className={isRolling ? "dice shake" : "dice"}
            alt="D12"
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

export default D12;
