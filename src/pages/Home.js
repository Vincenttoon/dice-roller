import React from "react";

import ClassicDi from "../assets/classic/dice-4.jpg";
import D2020 from "../assets/d20/d20-20.jpg";
import D1212 from "../assets/d12/d12-12.jpg";
import D1010 from "../assets/d10/d10-10.jpg";
import D88 from "../assets/d8/d8-8.jpg";
import D66 from "../assets/d6/d6-6.jpg";
import D44 from "../assets/d4/d4-4.jpg";
import Logo from "../assets/Logo/DR-Logo.jpg";

import "../pages/Home.scss";

const Home = () => {
  return (
    <div className="card-container">
      <h1 className="welcome">
        Welcome to the Dice Roller. Please choose your Di and enjoy!
      </h1>
      <div className="row">
        {/* Classic */}
        <a className="a-card" href="/classic">
          <div className="card">
            <h3>Classic</h3>
            <img className="home-di" src={ClassicDi} alt="Classic Di" />
          </div>
        </a>

        {/* D20 */}
        <a className="a-card" href="/d20">
          <div className="card">
            <h3>D20</h3>
            <img className="home-di" src={D2020} alt="D20 Di" />
          </div>
        </a>
      </div>

      <div className="row">
        {/* D12 */}
        <a className="a-card" href="/d12">
          <div className="card">
            <h3>D12</h3>
            <img className="home-di" src={D1212} alt="D12 Di" />
          </div>
        </a>

        {/* D10 */}
        <a className="a-card" href="/d10">
          <div className="card">
            <h3>D10</h3>
            <img className="home-di" src={D1010} alt="D10 Di" />
          </div>
        </a>
      </div>

      <div className="row">
        {/* D8 */}
        <a className="a-card" href="/d8">
          <div className="card">
            <h3>D8</h3>
            <img className="home-di" src={D88} alt="D8 Di" />
          </div>
        </a>

        {/* D6 */}
        <a className="a-card" href="/d6">
          <div className="card">
            <h3>D6</h3>
            <img className="home-di" src={D66} alt="D6 Di" />
          </div>
        </a>
      </div>

      <div className="row">
        {/* D4 */}
        <a className="a-card" href="/d4">
          <div className="card">
            <h3>D4</h3>
            <img className="home-di" src={D44} alt="D4 Di" />
          </div>
        </a>

        {/* Game Box */}
        <a className="a-card" href="/coming-soon">
          <div className="card">
            <img className="home-di" src={Logo} alt="Classic Di" />
            <h3>Game Box</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
