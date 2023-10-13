import { useContext, useState } from "react";
import { Icon } from "../../../assets/icon";
import { PodcastTitle, PodcastThumbnails, PodcastLength, StyledPodcastCard } from "../Knowledge.desktop"
const PodcastCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    author, title, thumbnail, length, id,
    handlePodcastCardClick, cardId } = props;

  const handleMouseEnter = () => {
    if (cardId !== id) {
      setIsHover(true);
    }
  }

  const handleMouseLeave = () => {
    if (cardId !== id) {
      setIsHover(false);
    }
  }

  const handleIsPlaying = () => {
    setIsClicked(true);
    if (cardId === id) {
      setIsPlaying(!isPlaying);
    }
    console.log(isPlaying);
  }

  return (
    <StyledPodcastCard
      tabIndex="0"
      onClick={handlePodcastCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardId === id ? { "border": "2px solid black" } : { "border": "none" }}
    >
      <PodcastThumbnails
        onClick={handleIsPlaying}
      >
        {
          isHover ?
            <Icon.play></Icon.play>
            : <img src={thumbnail} />
        }
      </PodcastThumbnails>
      <PodcastTitle>
        <p>
          {`${author} | ${title}`}
        </p>
      </PodcastTitle>
      <PodcastLength>
        {length}
      </PodcastLength>
    </StyledPodcastCard >
  );
}

export default PodcastCard
