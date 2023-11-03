// React related imports
import React from "react";

// Component imports
import {
  StyledPodcastCard,
  PodcastCardId,
  PodcastThumbnails,
  PodcastTitle,
  PodcastLength,
  PodcastOption,
  PodcastAdd,
  PodcastShare,
} from "../Knowledge.desktop";

// Asset imports
import { Icon } from "../../../assets/icon";


const PodcastCard = ({
  id,
  order,
  title,
  author,
  thumbnail,
  length,
  url,
  description,
  date,
  downloadUrl,
  cardId,
  setCardId,
  isHoverId,
  setIsHoverId,
  isPlayingId,
  setIsPlayingId,
  podcastsDataFilter,
  setPodcastsDataFilter,
  setIsFavourite,
  podcastStatus,
  setPodcastStatus,
  setIsPodcastShareDisplay,
  setPodcastShare,
  setIsPodcastInfoDisplay,
  setPodcastInfo,
}) => {
  // Event Handlers
  const handleMouseEnter = () => setIsHoverId(id);
  const handleMouseLeave = () => setIsHoverId(-1);
  const handleClick = () => setCardId(id);
  const handlePlaying = () => setIsPlayingId(prev => ({
    isPlaying: prev.id !== id || !prev.isPlaying,
    id,
  }));

  const handleAddClick = id => {
    const updatedData = [...podcastsDataFilter];
    const podcastToUpdate = updatedData.find(podcast => podcast.id === id);
    if (podcastToUpdate) {
      podcastToUpdate.type = [...podcastToUpdate.type, "Yêu thích"];
    }
    setPodcastsDataFilter(updatedData);
    setPodcastStatus({
      ...podcastStatus,
      [id]: { isFavourite: false, isAdded: false },
    });
    setIsFavourite({ id: id, isFavourite: false });
  };

  const handleRemoveClick = id => {
    const updatedData = [...podcastsDataFilter];
    const podcastToUpdate = updatedData.find(podcast => podcast.id === id);
    if (podcastToUpdate) {
      podcastToUpdate.type = podcastToUpdate.type.filter(type => type !== "Yêu thích");
    }
    setPodcastsDataFilter(updatedData);
    setPodcastStatus({
      ...podcastStatus,
      [id]: { isFavourite: true, isAdded: true },
    });
  };

  const currentStatus = podcastStatus[id] || { isFavourite: true, isAdded: true };

  const handleShareClick = (title, author, length, thumbnail, url) => {
    setIsPodcastShareDisplay(true);
    setPodcastShare({ title, author, length, image: thumbnail, url });
  };

  const handleInfoClick = (id, title, author, length, thumbnail, description, date, downloadUrl) => {
    setIsPodcastInfoDisplay(true);
    setPodcastInfo({ id, title, author, length, thumbnail, description, date, downloadUrl });
  };

  // Styles
  const cardStyled = isPlayingId.id === id ? { backgroundColor: "black" } :
    cardId === id ? { border: "2px solid black" } : {};

  const optionIconStyled = isPlayingId.id === id ? { color: "white" } :
    isHoverId === id ? { color: "#d8d7d7" } : {};

  const podcastTitleStyled = isPlayingId.id === id ? { color: "rgb(30,215,96)" } :
    isHoverId === id ? { color: "#d8d7d7" } : {};

  const podcastAuthorStyled = isPlayingId.id === id ? { color: "white" } : {};

  const podcastIdStyled = isPlayingId.id === id ? { color: "rgb(30,215,96)" } :
    isHoverId === id ? { color: "#d8d7d7" } : {};

  return (
    <StyledPodcastCard
      tabIndex="0"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyled}
    >
      <PodcastCardId style={podcastIdStyled}>{order}</PodcastCardId>
      <PodcastThumbnails onClick={handlePlaying}>
        {isPlayingId.id === id ? (
          isHoverId === id ? (
            isPlayingId.isPlaying ? <Icon.pause /> : <Icon.play />
          ) : isPlayingId.isPlaying ? (
            <img src="https://i.gifer.com/Nt6v.gif" alt="playing" />
          ) : (
            <Icon.play />
          )
        ) : isHoverId === id ? (
          <Icon.play />
        ) : (
          <img src={thumbnail} alt="thumbnail" />
        )}
      </PodcastThumbnails>
      <PodcastTitle style={podcastTitleStyled} onClick={() => handleInfoClick(id, title, author, length, thumbnail, description, date, downloadUrl)}>
        <p>{title}</p>
      </PodcastTitle>
      <PodcastLength style={podcastAuthorStyled} onClick={() => handleInfoClick(id, title, author, length, thumbnail, description, date, downloadUrl)}>
        {`${author} | ${length}`}
      </PodcastLength>
      <PodcastOption>
        <PodcastAdd>
          {currentStatus.isAdded ? (
            <Icon.love style={optionIconStyled} className="iconLove" onClick={() => handleAddClick(id)} />
          ) : (
            <Icon.checkCircle style={optionIconStyled} className="iconCheck" onClick={() => handleRemoveClick(id)} />
          )}
        </PodcastAdd>
        <PodcastShare>
          <Icon.share style={optionIconStyled} onClick={() => handleShareClick(title, author, length, thumbnail, url)} />
        </PodcastShare>
      </PodcastOption>
    </StyledPodcastCard>
  );
};

export default PodcastCard;
