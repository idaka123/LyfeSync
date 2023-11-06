// React related imports
import React, { useRef, useState, useEffect, useContext } from 'react';

// Component imports
import {
  StyledPodcastList,
  PodcastListType,
  PodcastListTypeElement,
  PodcastArrange,
  PodcastArrangeList,
  PodcastArrangeListElement,
  SortBy,
  PodcastCardList,
  PodcastEmptyList,
  SortByIcon,
  PodcastArrangeTitle,
  PodcastArrangeTitleIcon
} from "../Knowledge.desktop";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData, playlistsData } from "../Knowledge.data";
import { KnowledgeContext } from "../Knowledge";

// Utility and helper function imports
import { customNumberSort, customStringSort } from "../utils/customSort";

// Asset imports
import { Icon } from "../../../assets/icon";


const PodcastList = ({
}) => {
  const {
    isPlayingId, setIsPlayingId, isFavourite, setIsFavourite,
    podcastsDataFilter, setPodcastsDataFilter,
    podcastStatus, setPodcastStatus, podcastShare, setPodcastShare,
    setIsPodcastShareDisplay, podcastInfo, setPodcastInfo,
    setIsPodcastInfoDisplay,
  } = useContext(KnowledgeContext);

  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [isHoverId, setIsHoverId] = useState(null);
  const [isDisplayArrangeList, setIsDisplayArrangeList] = useState(false);
  const [sortbyValue, setSortbyValue] = useState('Sort By');
  const [podcastType, setPostcastType] = useState(podcastsType[0].title);
  const [isPodcastMoreDisplay, setIsPodcastMoreDisplay] = useState({ isDisplay: null, id: 1 });
  const [isDisplayAddPlaylist, setIsDisplayAddPlaylist] = useState(null);
  const [playListDataFilter, setPlayListDataFilter] = useState(playlistsData.map(playlist => playlist.name));
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    podCastListTypeRef.current.scrollLeft -= dx;
    setStartX(e.clientX);
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  const handleWheel = (e) => {
    podCastListTypeRef.current.scrollLeft += (e.deltaY - 130);
  }

  const handleSortByClick = () => {
    setIsDisplayArrangeList(!isDisplayArrangeList);
    setIsPodcastMoreDisplay(prev => ({
      isDisplay: false,
    }));
  }

  const handleArrangeElementClick = (e) => {
    setSortbyValue(e.target.innerText);
    setIsDisplayArrangeList(false);
  }

  const handleTypeClick = (index) => setPostcastType(index);

  useEffect(() => {
    const filterdata = podcastsData.filter(index => index.type.includes(podcastType));

    const sortFunctions = {
      Alphabet: (a, b) => customStringSort(a.title, b.title),
      Author: (a, b) => customStringSort(a.author, b.author),
      Length: (a, b) => customNumberSort(a.length, b.length)
    };

    if (sortbyValue in sortFunctions) {
      filterdata.sort(sortFunctions[sortbyValue]);
    }

    setPodcastsDataFilter(filterdata);

    return () => { }
  }, [podcastType, sortbyValue, podcastStatus]);

  return (
    <StyledPodcastList>
      <PodcastListType
        ref={podCastListTypeRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        {podcastsType.map(index => (
          <PodcastListTypeElement
            key={index.id}
            onClick={() => handleTypeClick(index.title)}
            style={
              index.title === podcastType
                ? { color: "rgb(4 228 84)", transform: "scale(1.1)" } : {}
            }
          >
            {index.title}
          </PodcastListTypeElement>
        ))}
      </PodcastListType>
      <PodcastArrange>
        <PodcastArrangeTitleIcon>
          <Icon.list className="iconList"></Icon.list>
        </PodcastArrangeTitleIcon>
        <PodcastArrangeTitle>
          Thư viện Podcast
        </PodcastArrangeTitle>
        <SortBy onClick={handleSortByClick}>{sortbyValue}</SortBy>
        <SortByIcon>
          <i onClick={handleSortByClick} className="fas fa-caret-down iconArrowDown" style={{ color: "black" }}></i>
        </SortByIcon>
        {isDisplayArrangeList && (
          <PodcastArrangeList>
            {podcastsArrangeData.map(index => (
              <PodcastArrangeListElement
                key={index.id}
                onClick={handleArrangeElementClick}
              >
                {index.title}
              </PodcastArrangeListElement>
            ))}
          </PodcastArrangeList>
        )}
      </PodcastArrange>
      {podcastsDataFilter.length !== 0 ?
        <PodcastCardList>
          {podcastsDataFilter.map((value) => (
            <React.Fragment key={value.id}>
              <PodcastCard
                order={value.id}
                {...value}
                cardId={cardId}
                setCardId={setCardId}
                isHoverId={isHoverId}
                setIsHoverId={setIsHoverId}
                isPlayingId={isPlayingId}
                setIsPlayingId={setIsPlayingId}
                isFavourite={isFavourite}
                setIsFavourite={setIsFavourite}
                podcastsDataFilter={podcastsDataFilter}
                setPodcastsDataFilter={setPodcastsDataFilter}
                podcastStatus={podcastStatus}
                setPodcastStatus={setPodcastStatus}
                podcastShare={podcastShare}
                setPodcastShare={setPodcastShare}
                setIsPodcastShareDisplay={setIsPodcastShareDisplay}
                podcastInfo={podcastInfo}
                setPodcastInfo={setPodcastInfo}
                setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
                isPodcastMoreDisplay={isPodcastMoreDisplay}
                setIsPodcastMoreDisplay={setIsPodcastMoreDisplay}
                playListDataFilter={playListDataFilter}
                setPlayListDataFilter={setPlayListDataFilter}
                isDisplayAddPlaylist={isDisplayAddPlaylist}
                setIsDisplayAddPlaylist={setIsDisplayAddPlaylist}
              >
              </PodcastCard>
            </React.Fragment>
          ))}
        </PodcastCardList>

        : <PodcastEmptyList>Chưa có podcast nào trong mục này !</PodcastEmptyList>
      }
    </StyledPodcastList>
  );
}

export default PodcastList;
