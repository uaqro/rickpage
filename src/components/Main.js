import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styles/index";

const Main = () => {
  return (
    <Nav>
      <div>
        <img
          src="https://f0.pngfuel.com/png/177/132/blue-alien-waving-his-hand-clip-art-png-clip-art.png"
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
