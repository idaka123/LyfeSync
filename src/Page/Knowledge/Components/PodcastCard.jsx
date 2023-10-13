import { useContext, useState } from "react";
import { PodcastTitle, PodcastThumbnails, PodcastLength, StyledPodcastCard } from "../Knowledge.desktop"
import { PodcastListContext } from "./PodcasList";
const PodcastCard = (props) => {
  const { onMouseEnter, onMouseLeave, onClick, style, author, title, thumbnail, length } = props;
  const { handleThumbnailsClick } = useContext(PodcastListContext);

  return (
    <StyledPodcastCard
      tabIndex="0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={style}
    >
      <PodcastThumbnails onClick={handleThumbnailsClick}>
        <img src={thumbnail} />
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
