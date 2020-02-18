import React, { useState, useEffect } from "react";
import MY_SERVICE from "../services/index";
import { DisplayWrapper, Feed } from "./styles/index";
import EpisodeCard from "./EpisodeCard";

const Episodes = props => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    MY_SERVICE.getEpisodes().then(data => {
      setEpisodes(data.data.results);
    });
  }, []);

  return (
    <DisplayWrapper>
      <Feed>
        <div className="title">
          <h1>All Episodes</h1>
        </div>
        <div className="iterator">
          {episodes.map(e => (
            <EpisodeCard episode={e} />
          ))}
        </div>
      </Feed>
    </DisplayWrapper>
  );
};
export default Episodes;
