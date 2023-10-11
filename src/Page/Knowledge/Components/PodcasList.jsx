import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement, PodcastArrange,
  PodcastArrangeList, PodcastArrangeListElement
} from "../Knowledge.desktop";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";
import { useRef, useState } from "react";
const PodcastList = () => {
  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    podCastListTypeRef.current.scrollLeft -= dx;
    setStartX(e.clientX);
    console.log(e.clientX);
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  const handeMouseLeave = () => {
    setIsDragging(false);
  }

  const handleWheel = (e) => {
    podCastListTypeRef.current.scrollLeft += (e.deltaY - 130) + (e.deltaX - 130);
  }

  const [sortbyValue, setSortbyValue] = useState('Sort By')
  const handleSortbyClick = (e) => {
    setSortbyValue(e.target.innerText);
  }
  return (
    <StyledPodcastList>
      <PodcastListType
        ref={podCastListTypeRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handeMouseLeave}
        onWheel={handleWheel}
      >
        {
          podcastsType.map(index => (
            <PodcastListTypeElement key={index.id}>
              {index.title}
            </PodcastListTypeElement>
          ))
        }
      </PodcastListType>
      <PodcastArrange>
        {sortbyValue}
        <PodcastArrangeList>
          {
            podcastsArrangeData.map(index => {
              return <PodcastArrangeListElement
                key={index.id}
                onClick={handleSortbyClick}
              >
                {index.title}</PodcastArrangeListElement>
            })
          }
        </PodcastArrangeList>
      </PodcastArrange>
      <PodcastCard
        thumbnail={podcastsData[0].thumbnail}
        title={podcastsData[0].title}
        length={podcastsData[0].length}
      />
    </StyledPodcastList>
  );
}

export default PodcastList;
