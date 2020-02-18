import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MY_SERVICE from "../services/index";
import { DisplayWrapper, EpDetail, CharMiniCard } from "./styles/index";
const EpisodeDetail = props => {
  const [episode, setEpisode] = useState({});
  const [charsArr, setCharsArr] = useState([]);

  useEffect(() => {
    MY_SERVICE.getCharDetail(props.location.state.char_id).then(data => {
      setEpisode(data.data);
    });
    MY_SERVICE.getMultipleChars(
      episode.characters.map(e => e.match(/\d/))
    ).then(data => {
      setCharsArr(data.data);
    });
  }, []);

  return (
    <DisplayWrapper>
      <EpDetail>
        <p>Episode: {episode.name}</p>
        <p>Air Date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>

        <div className="episodes">
          {charsArr.map(e => (
            <CharMiniCard>
              <img src={e.image} alt="char-img" />
              <p>{e.name}</p>
              <Link
                to={{
                  pathname: "/character-detail",
                  state: { char_id: e.match(/\d/) }
                }}
              >
                Ver más
              </Link>
            </CharMiniCard>
          ))}
        </div>
      </EpDetail>
    </DisplayWrapper>
  );
};

export default EpisodeDetail;
