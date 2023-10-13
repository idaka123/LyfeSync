import { useState } from "react";
import { PodcastTitle, PodcastThumbnails, PodcastLength, StyledPodcastCard } from "../Knowledge.desktop"
const PodcastCard = (props) => {
  const [image, setImage] = useState(props.thumbnail);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFocus, setisFocus] = useState(false);
  const switchPlayStop = (condition) => {
    const url1 = "https://cdn-icons-png.flaticon.com/512/4153/4153091.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const url2 = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const result = condition ? url1 : url2;
    return result;
  }
  const handleMouseEnter = () => {
    if (!isFocus) {
      setImage("https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879");
    }
  }
  const handleMouseLeave = () => {
    if (!isFocus) {
      setImage(props.thumbnail);
    }
  }

  const handleFocus = (e) => {
    setisFocus(true);
  }

  const handleBlur = () => {
    setImage(props.thumbnail);
    setisFocus(false);
    setIsPlaying(false);
  }

  const handleThumbnailsClick = (e) => {
    setIsPlaying(!isPlaying);
    setImage(switchPlayStop(!isPlaying));
    console.log("click")
  }
  return (
    <StyledPodcastCard
      tabIndex="0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={isFocus ? { "border": "2px solid black" } : { "border": "none" }}
    >
      <PodcastThumbnails onClick={handleThumbnailsClick}>
        <img src={image} />
      </PodcastThumbnails>
      <PodcastTitle>
        <p>
          {`${props.author} | ${props.title}`}
        </p>
      </PodcastTitle>
      <PodcastLength>
        {props.length}
      </PodcastLength>
    </StyledPodcastCard >
  );
}

export default PodcastCard
