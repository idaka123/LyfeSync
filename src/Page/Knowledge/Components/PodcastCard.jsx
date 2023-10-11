import { PodcastTitle, PodcastThumbnails, PodcastLength, StyledPodcastCard } from "../Knowledge.desktop"
const PodcastCard = (props) => {
  return (
    <StyledPodcastCard>
      <PodcastThumbnails>
        <img src={props.thumbnail} />
      </PodcastThumbnails>
      <PodcastTitle>
        {props.title}
      </PodcastTitle>
      <PodcastLength>
        {props.length}
      </PodcastLength>
    </StyledPodcastCard >
  );
}

export default PodcastCard
