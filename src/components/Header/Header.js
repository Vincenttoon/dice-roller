import React, { useState, useEffect } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Dice Roller</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/classic" onClick={menuToggleHandler}>
                Classic
              </a>
            </li>
            <li>
              <a href="/d20" onClick={menuToggleHandler}>
                D-20
              </a>
            </li>
            <li>
              <a href="/d10" onClick={menuToggleHandler}>
                D-10
              </a>
            </li>
            <li>
              <a href="/d8" onClick={menuToggleHandler}>
                D-8
              </a>
            </li>
            <li>
              <a href="/d6" onClick={menuToggleHandler}>
                D-6
              </a>
            </li>
            <li>
              <a href="/d4" onClick={menuToggleHandler}>
                D-4
              </a>
            </li>
          </ul>
          <button onClick={menuToggleHandler}>
            <a href="/future-link">Game Box</a>
          </button>
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
