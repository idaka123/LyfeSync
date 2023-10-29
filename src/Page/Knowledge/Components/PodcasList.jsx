import React, { useRef, useState, useEffect } from "react";
import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement,
  PodcastArrange, PodcastArrangeList, PodcastArrangeListElement,
  SortBy, PodcastCardList, SortByIcon, PodcastArrangeTitle, PodcastArrangeTitleIcon
} from "../Knowledge.desktop";
import { customNumberSort, customStringSort } from "../utils/customSort";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";
import { Icon } from "../../../assets/icon";

const PodcastList = ({
  setIsPodcastShareDisplay, setShareTitle,
  setShareAuthor, setShareLength, setShareImage, setShareUrl
}) => {
  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [isHoverId, setIsHoverId] = useState(null);
  const [isPlayingId, setIsPlayingId] = useState({ isPlaying: false, id: null });
  const [isDisplayArrangeList, setIsDisplayArrangeList] = useState(false);
  const [sortbyValue, setSortbyValue] = useState('Sort By');
  const [podcastType, setPostcastType] = useState(podcastsType[0].title)
  const [podcastsDataFilter, setPodcastsDataFilter] = useState(podcastsData);
  const [isFavourite, setIsFavourite] = useState({ id: -1, isFavourite: false })
  const [podcastStatus, setPodcastStatus] = useState({});
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
  }

  const handleArrangeElementClick = (e) => {
    setSortbyValue(e.target.innerText);
    setIsDisplayArrangeList(false);
  }

  const handleTypeClick = (index) => {
    setPostcastType(index);
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
  }, [podcastType, sortbyValue, podcastStatus])

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
                ? {
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                  fontSize: "calc((1.4vw + 1.4vh)/2)",
                }
                : {}
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
      <PodcastCardList>
        {podcastsDataFilter.map((value, index) => (
          <PodcastCard
            key={value.id}
            order={index + 1}
            {...value}
            podcastsDataFilter={podcastsDataFilter}
            setPodcastsDataFilter={setPodcastsDataFilter}
            cardId={cardId}
            setCardId={setCardId}
            isHoverId={isHoverId}
            setIsHoverId={setIsHoverId}
            isPlayingId={isPlayingId}
            setIsPlayingId={setIsPlayingId}
            isFavourite={isFavourite}
            setIsFavourite={setIsFavourite}
            podcastStatus={podcastStatus}
            setPodcastStatus={setPodcastStatus}
            setIsPodcastShareDisplay={setIsPodcastShareDisplay}
            setShareTitle={setShareTitle}
            setShareAuthor={setShareAuthor}
            setShareLength={setShareLength}
            setShareImage={setShareImage}
            setShareUrl={setShareUrl}
          />
        ))}
      </PodcastCardList>
    </StyledPodcastList >
  );
}

export default PodcastList;
