import React from "react";
import { Link } from "react-router-dom";
import { EpisodeStyleCard } from "./styles/index";

const EpisodeCard = ({ episode }) => {
  return (
    <EpisodeStyleCard>
      <div className="content-box">
        <div className="main-content">
          <p>{episode.name}</p>
          <p>{episode.air_date}</p>
          <Link
            to={{ pathname: "/episode-detail", state: { ep_id: episode.id } }}
          >
            More Information
          </Link>
        </div>
      </div>
    </EpisodeStyleCard>
  );
};

export default EpisodeCard;
