import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styles/index";

const Main = () => {
  return (
    <Nav>
      <div>
        <img
          src="https://www.stickpng.com/assets/images/58f37731a4fa116215a92411.png"
          alt="meeseeks"
        />
        <Link to={"/"}>HOME</Link>
        <Link to={"/characters"}>CHARACTERS</Link>
        <Link to={"/episodes"}>EPISODES</Link>
        <Link to={"/register"}>REGISTER</Link>
      </div>
    </Nav>
  );
};

export default Main;
