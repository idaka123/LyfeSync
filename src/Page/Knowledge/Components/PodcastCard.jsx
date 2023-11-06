// React related imports
import React from "react";
import { useState } from "react";

// Component imports
import {
  StyledPodcastCard,
  PodcastCardId,
  PodcastThumbnails,
  PodcastTitle,
  PodcastLength,
  PodcastOption,
  PodcastDownload,
  PodcastAdd,
  PodcastMore,
} from "../Knowledge.desktop";
import PodcastCardMore from "./PodcastCardMore";

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
  isPodcastMoreDisplay,
  setIsPodcastMoreDisplay,
  playListDataFilter,
  setPlayListDataFilter,
  isDisplayAddPlaylist,
  setIsDisplayAddPlaylist,
}) => {
  const [cardPosition, setCardPosition] = useState(null);
  const [isDisplayCreatePlaylist, setIsDisplayCreatePlaylist] = useState(null);
  // Event Handlers
  const handleMouseEnter = () => setIsHoverId(id);
  const handleMouseLeave = () => setIsHoverId(-1);
  const handleClick = () => setCardId(id);
  const handlePlaying = () => {
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
    setIsPlayingId(prev => ({
      isPlaying: prev.id !== id || !prev.isPlaying,
      id,
    }));
  }

  const handleAddClick = id => {
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
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
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
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

  const handleDownloadClick = () => {
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
    window.open(downloadUrl);
  }

  const currentStatus = podcastStatus[id] || { isFavourite: true, isAdded: true };

  const handleShareClick = (title, author, length, thumbnail, url) => {
    setIsPodcastShareDisplay(true);
    setPodcastShare({ title, author, length, image: thumbnail, url });
  };

  const handleInfoClick = (id, title, author, length, thumbnail, description, date, downloadUrl) => {
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
    setIsPodcastInfoDisplay(true);
    setPodcastInfo({ id, title, author, length, thumbnail, description, date, downloadUrl });
  };

  const handlePodcastMoreDisplay = () => {
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
      id
    }));
  }

  const handleMoreClick = (event) => {
    const element = event.currentTarget;
    const cardRect = element.getBoundingClientRect();
    const distanceFromBottomOfViewport = window.innerHeight - cardRect.bottom;
    const temp = distanceFromBottomOfViewport - window.innerHeight * 0.2;

    setCardPosition(temp >= window.innerHeight * 0.2 ? (window.innerHeight * 0.075) : (-window.innerHeight * 0.265));

    setIsPodcastMoreDisplay(prev => ({
      isDisplay: prev.id !== id || !prev.isDisplay,
      id
    }));
    setIsDisplayCreatePlaylist(false);
    setIsDisplayAddPlaylist(true);
  }

  // Styles
  const cardStyled = isPlayingId.id === id ? { backgroundColor: "black", zIndex: 2 } :
    cardId === id ? { border: "2px solid black", zIndex: 3 } : {};

  const optionIconStyled = isPlayingId.id === id ? { color: "white" } :
    isHoverId === id ? { color: "rgb(122,122,122)" } : {};

  const podcastTitleStyled = isPlayingId.id === id ? { color: "rgb(30,215,96)" } :
    isHoverId === id ? { color: "#d8d7d7" } : {};

  const podcastAuthorStyled = isPlayingId.id === id ? { color: "white" } : {};

  const podcastIdStyled = isPlayingId.id === id ? { color: "rgb(30,215,96)" } :
    isHoverId === id ? { color: "#d8d7d7" } : {};


  return (
    <>
      <StyledPodcastCard
        tabIndex="0"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onContextMenu={event => handleCardContextMenu(event)}
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
          <PodcastDownload onClick={handlePodcastMoreDisplay} >
            <Icon.download style={optionIconStyled} onClick={handleDownloadClick}></Icon.download>
          </PodcastDownload>
          <PodcastAdd onClick={handlePodcastMoreDisplay} >
            {currentStatus.isAdded ? (
              <Icon.love style={optionIconStyled} className="iconLove" onClick={() => handleAddClick(id)} />
            ) : (
              <Icon.checkCircle style={optionIconStyled} className="iconCheck" onClick={() => handleRemoveClick(id)} />
            )}
          </PodcastAdd>
          <PodcastMore onClick={event => { handleMoreClick(event) }} >
            <Icon.more style={optionIconStyled} /* onClick={() => handleShareClick(title, author, length, thumbnail, url)} */ />
          </PodcastMore>
        </PodcastOption>
        {isPodcastMoreDisplay.isDisplay && isPodcastMoreDisplay.id === id &&
          <PodcastCardMore
            title={title}
            isPodcastMoreDisplay={isPodcastMoreDisplay}
            setIsPodcastMoreDisplay={setIsPodcastMoreDisplay}
            playListDataFilter={playListDataFilter}
            setPlayListDataFilter={setPlayListDataFilter}
            isDisplayCreatePlaylist={isDisplayCreatePlaylist}
            isDisplayAddPlaylist={isDisplayAddPlaylist}
            setIsDisplayAddPlaylist={setIsDisplayAddPlaylist}
            setIsDisplayCreatePlaylist={setIsDisplayCreatePlaylist}
            cardPosition={cardPosition}
          />
        }
      </StyledPodcastCard >
    </>
  );
};

export default PodcastCard;
