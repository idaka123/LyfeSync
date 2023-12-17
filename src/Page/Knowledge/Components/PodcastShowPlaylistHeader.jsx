import React from "react";
import { PodcastShowPlayllistHeaderStyled } from "../Knowledge.desktop";
const PodcastShowPlayllistHeader = ({ podcastPlaylistShowData }) => {
  const backgroundcolor = podcastPlaylistShowData.color;
  return (
    <PodcastShowPlayllistHeaderStyled style={{ background: `linear-gradient(to bottom, ${backgroundcolor}` }}>
      <div
        className="headerImage"
      >
        <img src={podcastPlaylistShowData.image} alt="" />
      </div>
      <div className="headerInfo">
        <p className="child1">Admin {podcastPlaylistShowData.number} </p>
        <p className="child2">{podcastPlaylistShowData.name}</p>
        <p className="child3">{podcastPlaylistShowData.title}</p>
      </div>
    </PodcastShowPlayllistHeaderStyled >
  )
}

export default PodcastShowPlayllistHeader;
