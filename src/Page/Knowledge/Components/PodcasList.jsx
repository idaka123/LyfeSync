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
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";
import { KnowledgeContext } from "../Knowledge";

// Utility and helper function imports
import { customNumberSort, customStringSort } from "../utils/customSort";

// Asset imports
import { Icon } from '../../../Assets/icon';
import { ANIMATIONS } from "../utils/animationConstants";



const PodcastList = ({
}) => {
  const { FADE_IN, FADE_IN_LEFT } = ANIMATIONS;
  const {
    isPlayingId, setIsPlayingId, isFavourite, setIsFavourite,
    podcastsDataFilter, setPodcastsDataFilter,
    podcastStatus, setPodcastStatus, podcastShare, setPodcastShare,
    setIsPodcastShareDisplay, podcastInfo, setPodcastInfo,
    setIsPodcastInfoDisplay, playListDataFilter,
    setPlayListDataFilter,
    isPodcastPlaylistDisplay,
    setIsPodcastPlaylistDisplay,
    device,
  } = useContext(KnowledgeContext);
  const timeoutId = useRef(null);
  const [podcastCardAnimation, setPodcastCardAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
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
  const [isPodcastListScroll, setIsPodcastListScroll] = useState('scroll');

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
    clearTimeout(timeoutId.current);
    setPodcastCardAnimation(true);
    setAnimationKey(prev => prev + 1);
  }

  const handleTypeClick = (index) => {
    clearTimeout(timeoutId.current);
    setPostcastType(index);
    setPodcastCardAnimation(true);
    setAnimationKey(prev => prev + 1);
  }

  const handleArrangeTitleClick = () => {
    setIsPodcastPlaylistDisplay(true);
  }

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

  useEffect(() => {
    if (podcastCardAnimation) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setPodcastCardAnimation(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeoutId.current);
    }
  }, [podcastCardAnimation]);


  return (
    <StyledPodcastList className={``}>
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
        <PodcastArrangeTitleIcon onClick={handleArrangeTitleClick}>
          <Icon.list className="iconList"></Icon.list>
        </PodcastArrangeTitleIcon>
        <PodcastArrangeTitle onClick={handleArrangeTitleClick}>
          Danh sách Playlist
        </PodcastArrangeTitle>
        <SortBy>
          <p onClick={handleSortByClick}>{sortbyValue}</p>
        </SortBy>
        <SortByIcon>
          <Icon.arrowDown onClick={handleSortByClick} className="iconArrowDown" style={{ color: "black" }} />
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
        <PodcastCardList
          style={{ overflowY: `${isPodcastListScroll}` }}
        >
          {podcastsDataFilter.map((value, index) => (
            <React.Fragment key={value.id}>
              <PodcastCard
                order={index + 1}
                key={animationKey}
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
                isDisplayAddPlaylist={isDisplayAddPlaylist}
                setIsDisplayAddPlaylist={setIsDisplayAddPlaylist}
                playListDataFilter={playListDataFilter}
                setPlayListDataFilter={setPlayListDataFilter}
                podcastCardAnimation={podcastCardAnimation}
                setPodcastCardAnimation={setPodcastCardAnimation}
                podcastType={podcastType}
                isPodcastListScroll={isPodcastListScroll}
                setIsPodcastListScroll={setIsPodcastListScroll}
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
