import React from "react";
import { Icon } from "../../../assets/icon";
import {
  PodcastTitle,
  PodcastThumbnails,
  PodcastLength,
  StyledPodcastCard,
  PodcastCardId
} from "../Knowledge.desktop";

const PodcastCard = (props) => {
  const {
    author, title, thumbnail, length, id,
    cardId, setCardId,
    isHoverId, setIsHoverId,
    isPlayingId, setIsPlayingId
  } = props;

  // Event Handlers
  const handleMouseEnter = () => setIsHoverId(id);

  const handleMouseLeave = () => setIsHoverId(-1);

  const handleClick = (id) => setCardId(id);

  const handlePlaying = (id) => {
    if (isPlayingId.id === id) {
      setIsPlayingId({ isPlaying: !isPlayingId.isPlaying, id: id });
    } else {
      setIsPlayingId({ isPlaying: true, id: id });
    }
  }

  // Conditional Styles
  const cardStyle = isPlayingId.id === id
    ? { transition: "all 0.1s ease", backgroundColor: "black" }
    : cardId === id
      ? { border: "2px solid black" }
      : {};

  const thumbnailStyle = { transition: "all 1s ease" };

  const playIconStyle = isPlayingId.id === id ? { color: "#ffffffb8" } : {};

  const titleStyle = isPlayingId.id === id
    ? { color: "#ffffffb8" }
    : {};

  return (
    <StyledPodcastCard
      tabIndex="0"
      onClick={() => handleClick(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <PodcastCardId>{id}</PodcastCardId>
      <PodcastThumbnails onClick={() => handlePlaying(id)} style={thumbnailStyle}>
        {isPlayingId.id === id
          ? (
            isHoverId === id
              ? isPlayingId.isPlaying
                ? <Icon.pause style={playIconStyle} />
                : <Icon.play style={playIconStyle} />
              : isPlayingId.isPlaying
                ? <img src="https://i.gifer.com/Nt6v.gif" alt="playing" />
                : <Icon.play style={playIconStyle} />
          )
          : (isHoverId === id ? <Icon.play></Icon.play> : <img src={thumbnail} alt="thumbnail" />)
        }
      </PodcastThumbnails>
      <PodcastTitle style={titleStyle}>
        <p>
          {`${author} | ${title}`}
        </p>
      </PodcastTitle>
      <PodcastLength>
        {length}
      </PodcastLength>
    </StyledPodcastCard>
  );
}

export default PodcastCard;
