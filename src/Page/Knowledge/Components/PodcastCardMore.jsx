import { StyledPodcastCardMore } from "../Knowledge.desktop";
import { Icon } from "../../../assets/icon";
import { useState, useEffect } from "react";
import search from "../utils/search";
import { KnowledgeContext } from "../Knowledge";
import { useContext } from "react";
import { ANIMATIONS } from "../utils/animationConstants";
const PodcastCardMore = ({
  isDisplayAddPlaylist,
  setIsDisplayAddPlaylist,
  isDisplayCreatePlaylist,
  setIsDisplayCreatePlaylist,
  cardPosition,
  setIsPodcastShareDisplay,
  setPodcastShare,
  id,
  title,
  author,
  length,
  thumbnail,
  url,
  downloadUrl
}) => {
  const { FADE_IN } = ANIMATIONS;
  const { playListDataFilter, setPlayListDataFilter } = useContext(KnowledgeContext);
  const [searchData, setSearchData] = useState(playListDataFilter);
  const [playListSearchInput, setPlaylistSearchInput] = useState('');
  const [newPlaylist, setNewPlaylist] = useState('');
  const handleAddToPlayList = () => {
    setIsDisplayCreatePlaylist(false);
    setIsDisplayAddPlaylist(!isDisplayAddPlaylist);
  }
  const handleCreatePlaylist = () => {
    setIsDisplayCreatePlaylist(!isDisplayCreatePlaylist);
  }
  const handleShareClick = (id, title, author, length, thumbnail, url) => {
    setIsPodcastShareDisplay(true);
    setPodcastShare({ title, author, length, image: thumbnail, url });
  };

  const handleDownloadClick = () => window.open(downloadUrl);

  const handlePlaylistSearchInput = (event) => setPlaylistSearchInput(event.target.value);

  useEffect(() => {
    if (playListSearchInput) {
      let temp = search(playListSearchInput, playListDataFilter);
      setSearchData(temp);
    } else {
      setSearchData(playListDataFilter);
    }
    return () => {

    }
  }, [playListSearchInput, playListDataFilter]);


  const handleCreatePlaylistClick = (event) => setNewPlaylist(event.target.value)

  const createNewPlaylist = () => {
    if (!playListDataFilter.includes(newPlaylist) && newPlaylist) {
      setPlayListDataFilter(prev => [newPlaylist, ...prev]);
      setNewPlaylist("");
    }
  }
  const handleCreatePlaylistEnter = (event) => {
    if (!playListDataFilter.includes(newPlaylist) && event.key === 'Enter' && newPlaylist) {
      setPlayListDataFilter(prev => [newPlaylist, ...prev]);
      setNewPlaylist("");
    }
  }

  return (
    <StyledPodcastCardMore
      className={`podcastCardMore ${FADE_IN}`}
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
          <div className="moreOption download" onClick={handleDownloadClick}>
            <p>Download</p>
            <Icon.download />
          </div>
          <div className="moreOption share" onClick={() => handleShareClick(id, title, author, length, thumbnail, url)}>
            <p>Share</p>
            <Icon.share></Icon.share>
          </div>
        </>
      ) : (
        <div className="playlistList">
          <div className="playlistListTitle">
            <div className="backToMoreButton">
              <Icon.leftArrow onClick={handleAddToPlayList}></Icon.leftArrow>
            </div>
            <div className="findPlaylistInput">
              <Icon.search></Icon.search>
              <input
                type="text"
                onChange={(event) => handlePlaylistSearchInput(event)}
              />
            </div>
            <div className="playlistCreate" onClick={handleCreatePlaylist} >
              <p>Create playlist</p>
            </div>
            {isDisplayCreatePlaylist &&
              <div className="createInput">
                <input
                  type="text"
                  value={newPlaylist}
                  onKeyDown={event => { handleCreatePlaylistEnter(event) }}
                  onChange={event => { handleCreatePlaylistClick(event) }}
                />
                <Icon.send onClick={createNewPlaylist} />
              </div>
            }
          </div>

          <div className="playlistListContent">
            {searchData.map((value, index) => (
              <p className="listName" key={index}>{value}</p>
            ))}
          </div>

        </div>
      )}
    </StyledPodcastCardMore>
  );
}

export default PodcastCardMore;
