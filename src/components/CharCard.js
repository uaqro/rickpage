import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./styles/index";

const CharacterCard = ({ char }) => {
  return (
    <CardStyle>
      <div className="content-box">
        <p>{char.name}</p>
        <p>{char.origin.name.toUpperCase()}</p>
        <Link
          to={{ pathname: "/character-detail", state: { char_id: char.id } }}
        >
          More Info
        </Link>
      </div>
    </CardStyle>
  );
};

export default CharacterCard;
