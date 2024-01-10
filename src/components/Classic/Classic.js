import React, { useEffect, useState } from "react";

import "../Classic/Classic.scss";

import ClassicDice1 from "../../assets/classic/dice-1.jpg";
import ClassicDice2 from "../../assets/classic/dice-2.jpg";
import ClassicDice3 from "../../assets/classic/dice-3.jpg";
import ClassicDice4 from "../../assets/classic/dice-4.jpg";
import ClassicDice5 from "../../assets/classic/dice-5.jpg";
import ClassicDice6 from "../../assets/classic/dice-6.jpg";

const Classic = () => {
  const images = [
    ClassicDice1,
    ClassicDice2,
    ClassicDice3,
    ClassicDice4,
    ClassicDice5,
    ClassicDice6,
  ];

  const [dieOneSrc, setDieOneSrc] = useState(images[0]);
  const [dieTwoSrc, setDieTwoSrc] = useState(images[1]);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      const dieOneValue = Math.floor(Math.random() * 6);
      const dieTwoValue = Math.floor(Math.random() * 6);

      setDieOneSrc(images[dieOneValue]);
      setDieTwoSrc(images[dieTwoValue]);

      document.querySelector("#total").innerHTML =
        "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));
    }, 1000); // Adjust the timeout duration as needed for the animation
  };

  useEffect(() => {
    roll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="dice-wrapper">
        <img
          src={dieOneSrc}
          className={isRolling ? "dice shake" : "dice"}
          alt="Die 1"
        />
        <img
          src={dieTwoSrc}
          className={isRolling ? "dice shake" : "dice"}
          alt="Die 2"
        />
        {/* Add src attribute with the state variables */}
      </div>
      <p id="total"></p>
      <button onClick={roll} disabled={isRolling}>
        ROLL
      </button>
    </div>
  );
};

export default Classic;
