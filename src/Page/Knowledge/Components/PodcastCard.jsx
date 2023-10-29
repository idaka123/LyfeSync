import React from "react";
import {
  PodcastTitle,
  PodcastThumbnails,
  PodcastLength,
  StyledPodcastCard,
  PodcastCardId,
  PodcastOption,
  PodcastShare,
  PodcastAdd
} from "../Knowledge.desktop";
import { Icon } from "../../../assets/icon";

const PodcastCard = ({
  author, title, thumbnail, length, id, url,
  cardId, setCardId,
  isHoverId, setIsHoverId,
  isPlayingId, setIsPlayingId, order,
  podcastsDataFilter, setPodcastsDataFilter,
  setIsFavourite, podcastStatus, setPodcastStatus,
  setIsPodcastShareDisplay, setShareTitle,
  setShareAuthor, setShareLength, setShareImage, setShareUrl
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

  const handleShareClick = (title, author, length, thumbnail) => {
    setIsPodcastShareDisplay(true);
    setShareTitle(title);
    setShareAuthor(author);
    setShareLength(length);
    setShareImage(thumbnail);
    setShareUrl(url);
  }

  // Styles
  const cardStyle = isPlayingId.id === id
    ? { backgroundColor: "black" }
    : (cardId === id) ? { border: "2px solid black" } : {};

  const iconStyle = isPlayingId.id === id ? { color: "#ffffffb8" } : {};
  const titleStyle = isPlayingId.id === id ? { color: "#ffffffb8" } : {};

  return (
    <StyledPodcastCard
      tabIndex="0"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <PodcastCardId>{order}</PodcastCardId>
      <PodcastThumbnails onClick={handlePlaying}>
        {isPlayingId.id === id
          ? (isHoverId === id
            ? (isPlayingId.isPlaying ? <Icon.pause style={iconStyle} /> : <Icon.play style={iconStyle} />)
            : (isPlayingId.isPlaying ? <img src="https://i.gifer.com/Nt6v.gif" alt="playing" /> : <Icon.play style={iconStyle} />)
          )
          : (isHoverId === id ? <Icon.play /> : <img src={thumbnail} alt="thumbnail" />)
        }
      </PodcastThumbnails>
      <PodcastTitle style={titleStyle}>
        <p>{title}</p>
      </PodcastTitle>
      <PodcastLength>{`${author} | ${length}`}</PodcastLength>
      <PodcastOption>
        <PodcastAdd>
          {currentStatus.isAdded
            ? <Icon.add style={iconStyle} className="iconAdd" onClick={() => handleAddClick(id)} />
            : <Icon.check style={iconStyle} className="iconCheck" onClick={() => handleRemoveClick(id)} />
          }
        </PodcastAdd>
        <PodcastShare>
          <Icon.share
            style={iconStyle}
            onClick={() => { handleShareClick(title, author, length, thumbnail) }}
          />
        </PodcastShare>
      </PodcastOption>
    </StyledPodcastCard>
  );
};

export default PodcastCard;
