import { useState } from "react";
import { PodcastPlaylistBlockStyled } from "../Knowledge.desktop";
import { ANIMATIONS } from "../utils/animationConstants";
import { useEffect } from "react";

const PodcastPlaylistBlock = ({
  id,
  color,
  name,
  image,
  description,
  displayDeleteButton,
  numberPodcast,
  playListDataFilter,
  setPlayListDataFilter,
  podcastsDataFilter,
  setPodcastsDataFilter,
  isPodcastShowPlaylistDisplay,
  setIsPodcastShowPlaylistDisplay,
  podcastPlaylistShowData,
  setPodcastPlaylistShowData,
  setIsPodcastPlaylistDisplay
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const { FADE_OUT_DOWN, FADE_IN_UP } = ANIMATIONS;
  const handlePodcastPlaylistMouseEnter = () => {
    setIsHovered(true);
  }
  const handlePodcastPlaylistMouseLeave = () => {
    setIsHovered(false);
  }

  const handelDeletePlaylist = (name) => {
    const updatePlaylistDataFilter = playListDataFilter.filter(index => index !== name);
    setPlayListDataFilter(updatePlaylistDataFilter);
    const updatedPodcastsDataFilter = [...podcastsDataFilter];
    const updatedData = updatedPodcastsDataFilter.map(item => {
      const newItem = { ...item };
      newItem.playlist = newItem.playlist.filter(p => p !== name);
      return newItem;
    });
    setPodcastsDataFilter(updatedData);
  }
  const handleShowPlaylistClick = (name) => {
    setIsPodcastShowPlaylistDisplay(true);
    setIsPodcastPlaylistDisplay(false);
    setPodcastPlaylistShowData(prev => ({
      image: image,
      title: description,
      number: numberPodcast,
      name: name,
      color: color,
    }));

  }
  return (
    <PodcastPlaylistBlockStyled
      onMouseEnter={handlePodcastPlaylistMouseEnter}
      onMouseLeave={handlePodcastPlaylistMouseLeave}>
      <div className="playListBlockImage">
        <div
          className="playListBlockImageBlock"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="playListBlockImageShowButton">
            <div
              className={`button showButton ${isHovered ? FADE_IN_UP : FADE_OUT_DOWN} `}
              onClick={() => handleShowPlaylistClick(name)}
            >
              Show Playlist
            </div>
            {displayDeleteButton &&
              <div
                className={`button deleteButton ${isHovered ? FADE_IN_UP : FADE_OUT_DOWN} `}
                onClick={() => handelDeletePlaylist(name)}
              >
                Delete Playlist
              </div>
            }
          </div>
        </div>
      </div>
      <div className="playListBlockInfo">
        <div className="infoTitle">
          <p className="titleName">{name}</p>
          <p className="titleNumberPodcast">{numberPodcast}</p>
        </div>
        <div className="infoDescription">
          <p>
            {description}
          </p>
        </div>
      </div>
    </PodcastPlaylistBlockStyled>
  )

}

export default PodcastPlaylistBlock;