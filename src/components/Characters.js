import React, { useState, useEffect } from "react";
import MY_SERVICE from "../services/index";
import CharacterCard from "./CharCard";
import { Feed, DisplayWrapper } from "./styles/index";

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    MY_SERVICE.getCharacters().then(data => {
      setCharacters(data.data.results);
    });
  }, []);

  return (
    <DisplayWrapper>
      <Feed>
        <div className="title">
          <h1>All Characters</h1>
        </div>
        <div className="iterator">
          {characters.map(e => (
            <CharacterCard char={e} />
          ))}
        </div>
      </Feed>
    </DisplayWrapper>
  );
};

export default Characters;
