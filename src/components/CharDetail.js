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
    episode: []
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
        <div className="left-side">
          <img src={character.image} alt="char-image" />
        </div>
        <div className="right-side">
          <p>{character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <p>Episodes:</p>
          <div className="episodes">
            {character.episode.map(e => (
              <Link
                to={{
                  pathname: "/episode-detail",
                  state: { ep_id: e.match(/\d+/) }
                }}
              >
                {e.match(/\d+/)}
              </Link>
            ))}
          </div>
        </div>

        {/* {character.episode.map(e => (
            <Link
              to={{
                pathname: "/episode-detail",
                state: { ep_id: e.match(/\d/) }
              }}
            >
              {e.match(/\d/)}
            </Link>
          ))} */}
      </CharDetail>
    </DisplayWrapper>
  );
};

export default CharacterDetail;
