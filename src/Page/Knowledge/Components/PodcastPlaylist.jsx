import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  StyledPodcastPlaylist,
  PodcastPlaylistBackButton,
  PodcastPlaylistTitle,
  PodcastPlayListContent,
  PodcastPlaylistType,
} from "../Knowledge.desktop";
import { KnowledgeContext } from "../Knowledge";
import PodcastPlaylistBlock from "./PodcastPlaylistBlock";
import { playlistsData, playlistsDataByLS } from "../Knowledge.data";
import { Icon } from "../../../assets/icon";
import { ANIMATIONS } from "../utils/animationConstants";
import search from "../utils/search";

const PodcastPlayList = () => {
  const {
    FADE_IN,
    FADE_IN_UP,
    FADE_IN_LEFT,
    FADE_IN_RIGHT
  } = ANIMATIONS;

  const {
    setIsPodcastPlaylistDisplay,
    playListDataFilter,
    setPlayListDataFilter,
    podcastsDataFilter,
    setPodcastsDataFilter,
    isPodcastShowPlaylistDisplay,
    setIsPodcastShowPlaylistDisplay,
    podcastPlaylistShowData,
    setPodcastPlaylistShowData
  } = useContext(KnowledgeContext);

  const [isTitleSearchInputFocus, setIsTilteSearchInputFocus] = useState(false);
  const [titleSearchInputValue, setTitleSearchInputValue] = useState('');
  const [playlistSearchData, setPlaylistSearchData] = useState(playListDataFilter);
  const [playlistSearchDataByLS, setPlaylistSearchDataByLS] = useState(playlistsDataByLS);
  const [countNewPlaylist, setCountNewPlaylist] = useState(1);
  const [isRename, setIsRename] = useState({ value: false, id: -1 });

  const handlePodcastPlaylistButton = () => {
    setIsPodcastPlaylistDisplay(false);
  }

  const handleSearchInputFocus = () => {
    setIsTilteSearchInputFocus(true);
  }

  const handleSearchInputBlur = () => {
    setIsTilteSearchInputFocus(false);
  }

  const handleTitleSearchInputValue = (event) => {
    setTitleSearchInputValue(event.target.value);
  }

  const handleAddPlaylist = () => {
    const newPlaylist = "#NewPlaylist " + countNewPlaylist;
    setCountNewPlaylist(prev => prev + 1)
    setPlayListDataFilter([newPlaylist, ...playListDataFilter]);
  }

  const searchInputStyled = isTitleSearchInputFocus ? { border: "2px solid black", color: "black" } : {};

  const renderPodcastPlaylistContent = (data, displayDeleteButton) => {
    return data.map((value, index) => {
      let temp = 0;
      let id;
      let name;
      let image = "https://i.pinimg.com/originals/e2/84/bd/e284bdf1d4bb3ecbac814138dcc3db6a.png";
      let numberPodcast;
      let color;
      let description = "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!";
      if (displayDeleteButton === true) {
        color = "#ffff, #000"
        name = value;
        id = index;
        playlistsData.map(index => {
          if (index.name === value) {
            description = index.description;
          }
        })

        podcastsDataFilter.map(index => {
          if (index.playlist.includes(value)) {
            temp++;
          } else temp;
        })

        const countNumberPodcast = () => (temp > 1 ? temp + " Podcasts" : temp + " Podcast")

        numberPodcast = countNumberPodcast();
      } else {
        color = value.color;
        name = value.name;
        image = value.image;
        description = value.description;
        const countNumberPodcast = () => {
          let temp = value.number;
          return temp + " Podcasts";
        }
        numberPodcast = countNumberPodcast();
      }
      return (
        <PodcastPlaylistBlock
          id={id}
          key={name}
          name={name}
          image={image}
          color={color}
          numberPodcast={numberPodcast}
          description={description}
          displayDeleteButton={displayDeleteButton}
          playListDataFilter={playListDataFilter}
          setPlayListDataFilter={setPlayListDataFilter}
          podcastsDataFilter={podcastsDataFilter}
          setPodcastsDataFilter={setPodcastsDataFilter}
          isRename={isRename}
          setIsRename={setIsRename}
          isPodcastShowPlaylistDisplay={isPodcastShowPlaylistDisplay}
          setIsPodcastShowPlaylistDisplay={setIsPodcastShowPlaylistDisplay}
          podcastPlaylistShowData={podcastPlaylistShowData}
          setPodcastPlaylistShowData={setPodcastPlaylistShowData}
          setIsPodcastPlaylistDisplay={setIsPodcastPlaylistDisplay}
        />
      );
    });
  }

  useEffect(() => {
    if (titleSearchInputValue) {
      const updatePlaylist = search(titleSearchInputValue, playListDataFilter);
      setPlaylistSearchData(updatePlaylist);
      const updatePlaylistByLS = search(titleSearchInputValue, playlistsDataByLS.map(index => index.name));
      const newPlaylistByLS = [...playlistsDataByLS].filter(index => updatePlaylistByLS.includes(index.name));
      setPlaylistSearchDataByLS(newPlaylistByLS);
    } else {
      setPlaylistSearchData(playListDataFilter);
      setPlaylistSearchDataByLS(playlistsDataByLS);
    }
  }, [titleSearchInputValue, playListDataFilter, playlistsDataByLS])

  return (
    <StyledPodcastPlaylist className={`${FADE_IN}`}>
      <PodcastPlaylistBackButton>
        <Icon.back onClick={handlePodcastPlaylistButton}></Icon.back>
        <p onClick={handlePodcastPlaylistButton}>Back</p>
      </PodcastPlaylistBackButton>
      <PodcastPlaylistTitle>
        <div className={`playListTitle ${FADE_IN_LEFT}`}>
          <div className="titleIcon">
            <Icon.playlist></Icon.playlist>
          </div>
          <p>Danh sách Playlist</p>
        </div>
        <div className={`titleSearch ${FADE_IN_RIGHT}`} style={searchInputStyled}>
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
      {
        titleSearchInputValue ? (
          <Fragment>
            <PodcastPlayListContent>
              {renderPodcastPlaylistContent(playlistSearchData, true)}
            </PodcastPlayListContent>
            <PodcastPlayListContent>
              {renderPodcastPlaylistContent(playlistSearchDataByLS, false)}
            </PodcastPlayListContent>
          </Fragment>
        ) : (
          <Fragment>
            <PodcastPlaylistType className={`${FADE_IN_UP}`}>
              <div className="listTypeIcon">
                <Icon.podcast></Icon.podcast>
              </div>
              <p>Tạo bởi bạn</p>
              <div className="listTypeIcon">
                <Icon.addplaylist className="addPlaylistIcon" onClick={handleAddPlaylist} />
              </div>
            </PodcastPlaylistType>
            <PodcastPlayListContent className={`${FADE_IN_UP}`}>
              {renderPodcastPlaylistContent(playListDataFilter, true, true)}
            </PodcastPlayListContent>
            <PodcastPlaylistType className={`${FADE_IN_UP}`}>
              <div className="listTypeIcon">
                <Icon.podcast className="podcastIcon"></Icon.podcast>
              </div>
              <p>Tạo bởi LFM</p>
            </PodcastPlaylistType>
            <PodcastPlayListContent className={`${FADE_IN_UP}`}>
              {renderPodcastPlaylistContent(playlistsDataByLS, false)}
            </PodcastPlayListContent>
          </Fragment>
        )
      }
    </StyledPodcastPlaylist>
  )
}

export default PodcastPlayList;
