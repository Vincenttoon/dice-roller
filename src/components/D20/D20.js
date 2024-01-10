import React, { useEffect, useState } from "react";

import "../D20/D20.scss";

import D20Dice1 from "../../assets/d20/d1-20.jpg";
import D20Dice2 from "../../assets/d20/d2-20.jpg";
import D20Dice3 from "../../assets/d20/d3-20.jpg";
import D20Dice4 from "../../assets/d20/d4-20.jpg";
import D20Dice5 from "../../assets/d20/d5-20.jpg";
import D20Dice6 from "../../assets/d20/d6-20.jpg";
import D20Dice7 from "../../assets/d20/d7-20.jpg";
import D20Dice8 from "../../assets/d20/d8-20.jpg";
import D20Dice9 from "../../assets/d20/d9-20.jpg";
import D20Dice10 from "../../assets/d20/d10-20.jpg";
import D20Dice11 from "../../assets/d20/d11-20.jpg";
import D20Dice12 from "../../assets/d20/d12-20.jpg";
import D20Dice13 from "../../assets/d20/d13-20.jpg";
import D20Dice14 from "../../assets/d20/d14-20.jpg";
import D20Dice15 from "../../assets/d20/d15-20.jpg";
import D20Dice16 from "../../assets/d20/d16-20.jpg";
import D20Dice17 from "../../assets/d20/d17-20.jpg";
import D20Dice18 from "../../assets/d20/d18-20.jpg";
import D20Dice19 from "../../assets/d20/d19-20.jpg";
import D20Dice20 from "../../assets/d20/d20-20.jpg";

const D20 = () => {
  const images = [
    D20Dice1,
    D20Dice2,
    D20Dice3,
    D20Dice4,
    D20Dice5,
    D20Dice6,
    D20Dice7,
    D20Dice8,
    D20Dice9,
    D20Dice10,
    D20Dice11,
    D20Dice12,
    D20Dice13,
    D20Dice14,
    D20Dice15,
    D20Dice16,
    D20Dice17,
    D20Dice18,
    D20Dice19,
    D20Dice20,
  ];

  const [dieSrc, setDieSrc] = useState(images[0]);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      const dieValue = Math.floor(Math.random() * 20);

      setDieSrc(images[dieValue]);

      document.querySelector("#total").innerHTML =
        "Your roll is " + (dieValue + 1);
    }, 1000);
    document.querySelector("#total").style.fontSize = "1.5rem";
  };

  useEffect(() => {
    roll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="dice-wrapper">
        <img
          src={dieSrc}
          className={isRolling ? "dice shake" : "dice"}
          alt="D20"
        />
      </div>
      <p id="total"></p>
      <button onClick={roll} disabled={isRolling}>
        ROLL
      </button>
    </div>
  );
};

export default D20;
