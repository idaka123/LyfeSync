import {
  PodcastInfoStyled,
  PodcastInfoBlock,
  PodcastInfoBlockTitle,
  PodcastInfoBlockDescription
} from "../Knowledge.desktop";
import { Icon } from "../../../assets/icon";

const PodcastInfo = ({
  setIsPodcastInfoDisplay,
  podcastInfo,
  isPlayingId,
  setIsPlayingId,
  isFavourite,
  setIsFavourite,
}) => {
  const {
    id,
    title,
    author,
    length,
    description,
    thumbnail,
    date,
  } = podcastInfo;

  const handleCloseInfo = () => {
    setIsPodcastInfoDisplay(false);
  }

  const handlePlaying = () => setIsPlayingId(prev => ({
    isPlaying: prev.id !== id || !prev.isPlaying,
    id
  }));

  return (
    <PodcastInfoStyled>
      <PodcastInfoBlock>
        <div
          onClick={handleCloseInfo}
          className="closeButton">
          <Icon.x className="close"></Icon.x>
        </div>
        <PodcastInfoBlockTitle>
          <div className="infoThumbnail">
            <img src={thumbnail} alt="Thumbnail" />
          </div>
          <div className="infoTitle">
            <p className="title">{title}</p>
            <p className="author">{author}</p>
          </div>
        </PodcastInfoBlockTitle>
        <PodcastInfoBlockDescription>
          <div className="dateAndTime">
            <p className="date">{date} · </p>
            <p className="dot">·</p>
            <p className="time">{length}</p>
          </div>
          <div className="descriptionButton">
            <div className="playButton" onClick={handlePlaying}>
              {isPlayingId.id === id ?
                isPlayingId.isPlaying ? <Icon.pause className="pause"></Icon.pause> : < Icon.play className="play"></Icon.play>
                : < Icon.play className="play"></Icon.play>
              }
            </div>
            <div className="downloadButton">
              <Icon.download className="download"></Icon.download>
            </div>
            <div className="addButton">
              <Icon.addOutline className="add"></Icon.addOutline>
            </div>
          </div>
          <div className="descriptionTitle">
            <p className="title">Description</p>
          </div>
          <div className="descriptionContent">
            <p className="content">{description}</p>
          </div>
        </PodcastInfoBlockDescription>
      </PodcastInfoBlock>
    </PodcastInfoStyled >
  )
}

export default PodcastInfo;
