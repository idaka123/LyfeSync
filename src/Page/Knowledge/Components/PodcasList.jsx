import React, { useRef, useState, createContext, useEffect } from "react";
import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement,
  PodcastArrange, PodcastArrangeList, PodcastArrangeListElement,
  SortBy, PodcastCardList
} from "../Knowledge.desktop";
import { customNumberSort, customStringSort } from "../utils/customSort";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";

export const PodcastListContext = createContext();

const PodcastList = (props) => {
  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [isHoverId, setIsHoverId] = useState(null);
  const [isPlayingId, setIsPlayingId] = useState({ isPlaying: false, id: -1 });
  const { isGlobalPlaying, setIsGlobalPlaying } = props;
  const [isDisplayArrangeList, setIsDisplayArrangeList] = useState(false);
  const [sortbyValue, setSortbyValue] = useState('Sort By');
  const [podcastType, setPostcastType] = useState(podcastsType[0].title)
  const [podcastsDataFilter, setPodcastsDataFilter] = useState(podcastsData);

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
    console.log(index);
    setPostcastType(index);
  }

  useEffect(() => {
    let filterdata = podcastsData.filter(index => {
      const temp = index.type.find((i) => { return i === podcastType });
      return temp === podcastType;
    })

    const sortFunctions = {
      Alphabet: (a, b) => customStringSort(a.title, b.title),
      Author: (a, b) => customStringSort(a.author, b.author),
      Length: (a, b) => customNumberSort(a.length, b.length)
    };

    if (sortbyValue in sortFunctions) {
      filterdata.sort(sortFunctions[sortbyValue]);
    }

    setPodcastsDataFilter(filterdata);
  }, [podcastType, sortbyValue])

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
          >
            {index.title}
          </PodcastListTypeElement>
        ))}
      </PodcastListType>
      <PodcastArrange onClick={handleSortByClick}>
        <SortBy>{sortbyValue}</SortBy>
        <i className="fas fa-caret-down" style={{ color: "black" }}></i>
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
            cardId={cardId}
            setCardId={setCardId}
            isHoverId={isHoverId}
            setIsHoverId={setIsHoverId}
            isPlayingId={isPlayingId}
            setIsPlayingId={setIsPlayingId}
          />
        ))}
      </PodcastCardList>
    </StyledPodcastList>
  );
}

export default PodcastList;
