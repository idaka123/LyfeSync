import React from "react";
import { Icon } from "../../../assets/icon";
import {
  PodcastAdd,
  PodcastCardId,
  PodcastLength,
  PodcastOption,
  PodcastShare,
  PodcastThumbnails,
  PodcastTitle,
  StyledPodcastCard,
} from "../Knowledge.desktop";

const PodcastCard = ({
  id, order, title, author, thumbnail, length, url, description, date,
  cardId, setCardId,
  isHoverId, setIsHoverId,
  isPlayingId, setIsPlayingId,
  podcastsDataFilter, setPodcastsDataFilter,
  setIsFavourite, podcastStatus, setPodcastStatus,
  setIsPodcastShareDisplay, setPodcastShare,
  setIsPodcastInfoDisplay, setPodcastInfo,
}) => {

  // Event Handlers
  const handleMouseEnter = () => setIsHoverId(id);
  const handleMouseLeave = () => setIsHoverId(-1);
  const handleClick = () => setCardId(id);
  const handlePlaying = () => setIsPlayingId(prev => ({
    isPlaying: prev.id !== id || !prev.isPlaying,
    id
  }));
  const handleAddClick = (id) => {
    const updatedData = [...podcastsDataFilter];
    const podcastToUpdate = updatedData.find(podcast => podcast.id === id);
    if (podcastToUpdate) {
      podcastToUpdate.type = [...podcastToUpdate.type, "Yêu thích"];
    }

    setPodcastsDataFilter(updatedData);

    setPodcastStatus({
      ...podcastStatus,
      [id]: { isFavourite: false, isAdded: false }
    });

    setIsFavourite({ id: id, isFavourite: false });
  };

  const handleRemoveClick = (id) => {
    const updatedData = [...podcastsDataFilter];
    const podcastToUpdate = updatedData.find(podcast => podcast.id === id);
    if (podcastToUpdate) {
      podcastToUpdate.type = podcastToUpdate.type.filter(type => type !== "Yêu thích");
    }

    setPodcastsDataFilter(updatedData);

    setPodcastStatus({
      ...podcastStatus,
      [id]: { isFavourite: true, isAdded: true }
    });
  };

  const currentStatus = podcastStatus[id] || { isFavourite: true, isAdded: true };

  const handleShareClick = (title, author, length, thumbnail, url) => {
    setIsPodcastShareDisplay(true);
    const newShare = {
      title: title,
      author: author,
      length: length,
      image: thumbnail,
      url: url,
    }
    setPodcastShare(newShare);
  }

  const handleInfoClick = (id, title, author, length, thumbnail, description, date) => {
    setIsPodcastInfoDisplay(true);
    const newInfo = {
      id: id,
      title: title,
      author: author,
      length: length,
      thumbnail: thumbnail,
      description: description,
      date: date,
    }
    setPodcastInfo(newInfo);
  }

  // Styles
  const cardStyled = isPlayingId.id === id
    ? { backgroundColor: "black" }
    : (cardId === id) ? { border: "2px solid black" } : {};

  const optionIconStyled = isPlayingId.id === id ? { color: "white" } : isHoverId === id
    ? { color: "#d8d7d7" }
    : {};
  const podcastTitleStyled = isPlayingId.id === id
    ? { color: "rgb(30,215,96)" }
    : isHoverId === id
      ? { color: "#d8d7d7" }
      : {};
  const podcastAuthorStyled = isPlayingId.id === id ? { color: "white" } : {};
  const podcastIdStyled = isPlayingId.id === id
    ? { color: "rgb(30,215,96)" }
    : isHoverId === id
      ? { color: "#d8d7d7" }
      : {};
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
        {isPlayingId.id === id
          ? (isHoverId === id
            ? (isPlayingId.isPlaying ? <Icon.pause /> : <Icon.play />)
            : (isPlayingId.isPlaying ? <img src="https://i.gifer.com/Nt6v.gif" alt="playing" /> : <Icon.play />)
          )
          : (isHoverId === id ? <Icon.play /> : <img src={thumbnail} alt="thumbnail" />)
        }
      </PodcastThumbnails>
      <PodcastTitle
        style={podcastTitleStyled}
        onClick={() => handleInfoClick(id, title, author, length, thumbnail, description, date)}
      >
        <p>{title}</p>
      </PodcastTitle>
      <PodcastLength
        onClick={() => handleInfoClick(id, title, author, length, thumbnail, description, date)}
        style={podcastAuthorStyled}
      >
        {`${author} | ${length}`}
      </PodcastLength>
      <PodcastOption>
        <PodcastAdd>
          {currentStatus.isAdded
            ? <Icon.add style={optionIconStyled} className="iconAdd" onClick={() => handleAddClick(id)} />
            : <Icon.check style={optionIconStyled} className="iconCheck" onClick={() => handleRemoveClick(id)} />
          }
        </PodcastAdd>
        <PodcastShare>
          <Icon.share
            style={optionIconStyled}
            onClick={() => { handleShareClick(title, author, length, thumbnail, url) }}
          />
        </PodcastShare>
      </PodcastOption>
    </StyledPodcastCard>
  );
};

export default PodcastCard;
