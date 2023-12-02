import { useState } from "react";
import { PodcastPlaylistBlockStyled } from "../Knowledge.desktop";
import { ANIMATIONS } from "../utils/animationConstants";
import { useEffect } from "react";

const PodcastPlaylistBlock = ({
  id,
  name,
  image,
  description,
  displayDeleteButton,
  displayRenameButton,
  numberPodcast,
  playListDataFilter,
  setPlayListDataFilter,
  podcastsDataFilter,
  setPodcastsDataFilter,
  isRename,
  setIsRename,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [isAvailable, setIsAvailable] = useState(0);
  const [availableValue, setAvailableValue] = useState('')
  const { FADE_OUT_DOWN, FADE_IN_UP } = ANIMATIONS;
  const handlePodcastPlaylistMouseEnter = () => {
    setIsHovered(true);
  }
  const handlePodcastPlaylistMouseLeave = () => {
    setIsHovered(false);
  }

  const handelDeletePlaylist = (name) => {
    const updatePlaylistDataFilter = playListDataFilter.filter(index => index !== name);
    setPlayListDataFilter(updatePlaylistDataFilter);
    const updatedPodcastsDataFilter = [...podcastsDataFilter];
    const updatedData = updatedPodcastsDataFilter.map(item => {
      const newItem = { ...item };
      newItem.playlist = newItem.playlist.filter(p => p !== name);
      return newItem;
    });
    setPodcastsDataFilter(updatedData);
  }
  const handleRenameClick = (id) => {
    setIsAvailable(0);
    setIsRename(prev => ({
      value: id !== prev.id || !prev.value,
      id
    }))
  }
  const handleRenameInputEnter = (event, name) => {
    const value = event.target.value;
    if (event.key === 'Enter' && value !== '' && isAvailable === 1) {
      let clonePlaylistDataFilter = [...playListDataFilter];
      if (!clonePlaylistDataFilter.includes(value)) {
        let updatePlaylistDataArray = clonePlaylistDataFilter.map(item => {
          if (item === name) return value;
          return item;
        })
        setPlayListDataFilter(updatePlaylistDataArray);
        let clonePodcastDataArray = [...podcastsDataFilter];

        let updatePodcastDataArray = clonePodcastDataArray.map(item => {
          if (item.playlist.includes(name)) {
            item = {
              ...item,
              playlist: item.playlist.map(index => {
                if (index === name) {
                  return value;
                }
                return index;
              })
            };
          }
          return item;
        });
        setPodcastsDataFilter(updatePodcastDataArray);
      }
      setIsRename(prev => ({
        value: false,
        id
      }))
    }
    if (event.key === 'Escape') {
      setIsRename(prev => ({
        value: false,
        id
      }))
    }
  }
  const handleRenameChange = (event) => {
    const value = (event.target.value).trim();
    if (value !== '') {
      if (![...playListDataFilter].includes(value)) setIsAvailable(1);
      else setIsAvailable(2);
    }
    else {
      setIsAvailable(0);
    }
  }
  useEffect(() => {
    isAvailable !== 0
      ? isAvailable === 1
        ? setAvailableValue('Hợp lệ') : setAvailableValue('Tồn tại')
      : setAvailableValue('')
  }, [isAvailable])
  return (
    <PodcastPlaylistBlockStyled
      onMouseEnter={handlePodcastPlaylistMouseEnter}
      onMouseLeave={handlePodcastPlaylistMouseLeave}>
      <div className="playListBlockImage">
        <div
          className="playListBlockImageBlock"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="playListBlockImageShowButton">
            <div className={`button showButton ${isHovered ? FADE_IN_UP : FADE_OUT_DOWN} `} >
              Show Playlist
            </div>
            {displayRenameButton &&
              <div
                className={`button renameButton ${isHovered ? FADE_IN_UP : FADE_OUT_DOWN}`}
                onClick={() => handleRenameClick(id)}
              >
                Rename
              </div>
            }
            {displayDeleteButton &&
              <div
                className={`button deleteButton ${isHovered ? FADE_IN_UP : FADE_OUT_DOWN} `}
                onClick={() => handelDeletePlaylist(name)}
              >
                Delete Playlist
              </div>
            }
          </div>
        </div>
      </div>
      <div className="playListBlockInfo">
        <div className="infoTitle">
          {isRename.id !== id ?
            <p className="titleName">{name}</p>
            :
            isRename.value ?
              <div className="titleInputBlock">
                <input
                  onKeyDown={(event) => handleRenameInputEnter(event, name)}
                  onChange={(event) => handleRenameChange(event)}
                  autoFocus
                >
                </input>
                {
                  availableValue === 'Hợp lệ' ?
                    <p style={{ color: "green" }}>{availableValue}</p>
                    :
                    <p style={{ color: "red" }}>{availableValue}</p>
                }
              </div>
              : <p className="titleName">{name}</p>
          }
          <p className="titleNumberPodcast">{numberPodcast}</p>
        </div>
        <div className="infoDescription">
          <p>
            {description}
          </p>
        </div>
      </div>
    </PodcastPlaylistBlockStyled>
  )

}

export default PodcastPlaylistBlock;