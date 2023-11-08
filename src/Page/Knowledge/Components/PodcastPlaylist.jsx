import {
  StyledPodcastPlaylist,
  PodcastPlaylistBackButton,
  PodcastPlaylistTitle,
  PodcastPlayListContent,
  PodcastPlaylistBlock,
  PodcastPlaylistType
} from "../Knowledge.desktop";
import { KnowledgeContext } from "../Knowledge";

import { playlistsData } from "../Knowledge.data";

// Asset imports
import { Icon } from "../../../assets/icon";
import { ANIMATIONS } from "../utils/animationConstants";
import { useContext, useState } from "react";

const PodcastPlayList = () => {
  const { FADE_IN } = ANIMATIONS;
  const {
    setIsPodcastPlaylistDisplay
  } = useContext(KnowledgeContext);
  const handlePodcastPlaylistButton = () => {
    setIsPodcastPlaylistDisplay(false);
  }
  const [isTitleSearchInputFocus, setIsTilteSearchInputFocus] = useState(false);
  const [titleSearchInputValue, setTitleSearchInputValue] = useState('');

  const handleSearchInputFocus = () => {
    setIsTilteSearchInputFocus(true);
  }
  const handleSearchInputBlur = () => {
    setIsTilteSearchInputFocus(false);
  }
  const handleTitleSearchInputValue = (event) => {
    setTitleSearchInputValue(event.target.value);
  }

  //styles 
  const searchInputStyled = isTitleSearchInputFocus ? { border: "2px solid black", color: "black" } : {};
  return (
    <StyledPodcastPlaylist className={`${FADE_IN}`}>
      <PodcastPlaylistBackButton onClick={handlePodcastPlaylistButton}>
        <Icon.back></Icon.back>
        <p>Podcast Series</p>
      </PodcastPlaylistBackButton>
      <PodcastPlaylistTitle>
        <div className="playListTitle">
          <div className="titleIcon">
            <Icon.playlist></Icon.playlist>
          </div>
          <p>Danh sách Playlist</p>
        </div>
        <div className="titleSearch" style={searchInputStyled}>
          <div className="titleSearchIcon">
            <Icon.search></Icon.search>
          </div>
          <input
            placeholder="Tìm Playlist"
            value={titleSearchInputValue}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            onChange={(event) => handleTitleSearchInputValue(event)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') setTitleSearchInputValue('');
            }}
            type="text"
          />
        </div>
      </PodcastPlaylistTitle>
      <PodcastPlaylistType>
        <div className="listTypeIcon">
          <Icon.dot></Icon.dot>
        </div>
        Tạo bởi LFM
      </PodcastPlaylistType>
      <PodcastPlayListContent>
        <PodcastPlaylistBlock>
          <div className="playListBlockImage">
            <img src={playlistsData[0].image} alt="" />
          </div>
          <div className="playListBlockInfo">

          </div>
        </PodcastPlaylistBlock>
      </PodcastPlayListContent>
    </StyledPodcastPlaylist>
  )
}

export default PodcastPlayList;