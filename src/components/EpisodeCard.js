import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./styles/index";

const EpisodeCard = ({ episode }) => {
  return (
    <CardStyle>
      <div className="content-box">
        <p>{episode.name}</p>
        <p>{episode.air_date}</p>
        <Link
          to={{ pathname: "/episode-detail", state: { ep_id: episode.id } }}
        >
          More Info
        </Link>
      </div>
    </CardStyle>
  );
};

export default EpisodeCard;
