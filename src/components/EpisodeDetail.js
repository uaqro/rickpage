import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MY_SERVICE from "../services/index";
import { DisplayWrapper, EpDetail, CharMiniCard } from "./styles/index";
const EpisodeDetail = props => {
  const [episode, setEpisode] = useState({});
  const [charsArr, setCharsArr] = useState([]);

  useEffect(() => {
    MY_SERVICE.getEpisode(props.location.state.ep_id).then(data => {
      setEpisode(data.data);
      MY_SERVICE.getMultipleChars(
        data.data.characters.map(e => e.match(/\d+/))
      ).then(data => {
        setCharsArr(data.data);
      });
    });
  }, []);
  return (
    <DisplayWrapper>
      <EpDetail>
        <div className="content">
          <p>{episode.name}</p>
          <p>
            {episode.episode} - {episode.air_date}
          </p>
          <p>Characters:</p>
          <div className="characters">
            {charsArr.map(e => (
              <CharMiniCard>
                <img src={e.image} alt="char-img" />
                <Link
                  to={{
                    pathname: "/character-detail",
                    state: { char_id: e.id }
                  }}
                >
                  Ver más
                </Link>
              </CharMiniCard>
            ))}
          </div>
        </div>
      </EpDetail>
    </DisplayWrapper>
  );
};

export default EpisodeDetail;
