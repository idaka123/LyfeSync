import { StyledPodcastCardMore } from "../Knowledge.desktop";
import { Icon } from "../../../assets/icon";
const PodcastCardMore = ({
  playListDataFilter,
  setPlayListDataFilter,
  isDisplayAddPlaylist,
  setIsDisplayAddPlaylist,
  isDisplayCreatePlaylist,
  setIsDisplayCreatePlaylist,
  cardPosition,
}) => {

  const handleAddToPlayList = () => {
    setIsDisplayAddPlaylist(!isDisplayAddPlaylist);
  }
  const handleCreatePlaylist = () => {
    setIsDisplayCreatePlaylist(!isDisplayCreatePlaylist);
  }


  return (
    <StyledPodcastCardMore
      className="podcastCardMore"
      style={{ top: cardPosition }}
    >
      {isDisplayAddPlaylist ? (
        <>
          <div className="moreOption addToPlaylist" onClick={handleAddToPlayList}>
            <p>Add to playlist</p>
            <Icon.rightArrow></Icon.rightArrow>
          </div>
          <div className="moreOption addToQueue">
            <p>Add to queue</p>
          </div>
          <div className="moreOption download">
            <p>Download</p>
            <Icon.check></Icon.check>
          </div>
          <div className="moreOption share">
            <p>Share</p>
            <Icon.share></Icon.share>
          </div>
        </>
      ) : (
        <div className="playlistList">
          <div className="playlistListTitle">
            <div className="backToMoreButton" onClick={handleAddToPlayList}>
              <Icon.leftArrow></Icon.leftArrow>
            </div>
            <div className="findPlaylistInput">
              <Icon.search></Icon.search>
              <input type="text" />
            </div>
            <div className="playlistCreate" onClick={handleCreatePlaylist} >
              <p>Create playlist</p>
            </div>
          </div>

          <div className="playlistListContent">
            {isDisplayCreatePlaylist &&
              <div className="createInput">
                <input type="text" />
                <Icon.send />
              </div>
            }
            {playListDataFilter.map((value, index) => (
              <p className="listName" key={index}>{value}</p>
            ))}
          </div>

        </div>
      )}
    </StyledPodcastCardMore>
  );
}

export default PodcastCardMore;
