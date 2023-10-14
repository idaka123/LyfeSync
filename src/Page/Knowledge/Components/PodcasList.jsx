import React, { useRef, useState, createContext, useEffect } from "react";
import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement,
  PodcastArrange, PodcastArrangeList, PodcastArrangeListElement,
  SortBy, PodcastCardList
} from "../Knowledge.desktop";

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
          <PodcastListTypeElement key={index.id}>
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
        {podcastsData.map(value => (
          <PodcastCard
            key={value.id}
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
