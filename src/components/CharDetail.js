import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MY_SERVICE from "../services/index";
import { CharDetail, DisplayWrapper } from "./styles/index.js";

const CharacterDetail = props => {
  const [character, setCharacter] = useState({
    image: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: { name: "" },
    location: { name: "" },
    episodes: []
  });

  useEffect(() => {
    MY_SERVICE.getCharDetail(props.location.state.char_id).then(data => {
      console.log(data);
      setCharacter(data.data);
    });
  }, []);

  return (
    <DisplayWrapper>
      <CharDetail>
        <img src={character.image} alt="char-image" />
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <div className="episodes">
          {character.episode.map(e => (
            <Link
              to={{
                pathname: "/episode-detail",
                state: { ep_id: e.match(/\d/) }
              }}
            >
              {e.match(/\d/)}
            </Link>
          ))}
        </div>
      </CharDetail>
    </DisplayWrapper>
  );
};

export default CharacterDetail;
