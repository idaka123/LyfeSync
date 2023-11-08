// React related imports
import React, { useContext } from "react";

// Component imports
import {
  PodcastInfoStyled,
  PodcastInfoBlock,
  PodcastInfoBlockTitle,
  PodcastInfoBlockDescription
} from "../Knowledge.desktop";
import { KnowledgeContext } from "../Knowledge";

// Asset imports
import { ANIMATIONS } from "../utils/animationConstants";
import { Icon } from "../../../assets/icon";


const PodcastInfo = ({
}) => {
  const { FADE_IN } = ANIMATIONS;
  const {
    isPlayingId,
    setIsPlayingId,
    podcastsDataFilter,
    setPodcastsDataFilter,
    podcastStatus,
    setPodcastStatus,
    setIsFavourite,
    setIsPodcastInfoDisplay,
    podcastInfo,
  } = useContext(KnowledgeContext);

  const {
    id,
    title,
    author,
    length,
    description,
    thumbnail,
    date,
    downloadUrl
  } = podcastInfo;

  const handleCloseInfo = () => {
    setIsPodcastInfoDisplay(false);
  };

  const handlePlaying = () => setIsPlayingId(prev => ({
    isPlaying: prev.id !== id || !prev.isPlaying,
    id
  }));

  const handleDownload = () => {
    window.open(downloadUrl);
  };

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

  return (
    <PodcastInfoStyled className={`${FADE_IN} `}>
      <PodcastInfoBlock>
        <div
          onClick={handleCloseInfo}
          className="closeButton"
        >
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
            <div className="downloadButton" onClick={handleDownload}>
              <Icon.download className="download"></Icon.download>
            </div>
            <div className="loveButton">
              {currentStatus.isAdded
                ? <Icon.addOutline className="love" onClick={() => handleAddClick(id)} />
                : <Icon.check className="unLove" onClick={() => handleRemoveClick(id)} />
              }
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
