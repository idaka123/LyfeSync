import {
  PodcastInfoStyled,
  PodcastInfoBlock,
  PodcastInfoBlockTitle,
  PodcastInfoBlockDescription
} from "../Knowledge.desktop";
import { Icon } from "../../../assets/icon";
const PodcastInfo = ({
  infoTitle,
  infoAuthor,
  infoLength,
  infoDescription,
  infoThumbnail,
  infoDate, setIsPodcastInfoDisplay
}) => {
  const handleCloseInfo = () => {
    setIsPodcastInfoDisplay(false);
  }
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
            <img src={infoThumbnail} />
          </div>
          <div className="infoTitle">
            <p className="title">{infoTitle}</p>
            <p className="author">{infoAuthor}</p>
          </div>
        </PodcastInfoBlockTitle>
        <PodcastInfoBlockDescription>
          <div className="dateAndTime">
            <p className="date">{infoDate} · </p>
            <p className="dot">·</p>
            <p className="time">{infoLength}</p>
          </div>
          <div className="descriptionButton">
            <div className="playButton">
              <Icon.play className="play"></Icon.play>
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
            <p className="content">{infoDescription}</p>
          </div>
        </PodcastInfoBlockDescription>
      </PodcastInfoBlock>
    </PodcastInfoStyled>
  )
}

export default PodcastInfo; 