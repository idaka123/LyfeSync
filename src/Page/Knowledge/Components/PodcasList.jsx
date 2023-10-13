import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement, PodcastArrange,
  PodcastArrangeList, PodcastArrangeListElement, SortBy, PodcastCardList
} from "../Knowledge.desktop";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";
import { useRef, useState } from "react";
const PodcastList = () => {
  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectID, setSelectID] = useState(-1);
  const [playPC, setPlayPC] = useState({
    id: -1,
    isPlaying: false
  }) 
  const [hoverID, setHoverID] = useState(-1);

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
    podCastListTypeRef.current.scrollLeft += (e.deltaY - 130);
  }

  const [isdisplayArrangeList, setIsDisplayArrangeList] = useState(false);
  const [sortbyValue, setSortbyValue] = useState('Sort By')

  const handleSortByClick = () => {
    setIsDisplayArrangeList(!isdisplayArrangeList);
    console.log(setIsDisplayArrangeList);
  }

  const handleArrangeElementClick = (e) => {
    setSortbyValue(e.target.innerText);
    setIsDisplayArrangeList(false);
  }


  const handlePodcast = {
    hoverPodCast : (id) => { // handle hover for podcast card
      setHoverID(id)
    },
    playPodCast : (id) => { // handle play for podcast card
      if(id === playPC.id) setPlayPC({id: id, isPlaying: !playPC.isPlaying})
      else setPlayPC({id: id, isPlaying: true})
    },
    selectPodCast : (id) => { // handle select for podcast card
      setSelectID(id)
    }
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
      <PodcastArrange onClick={handleSortByClick}>
        <SortBy>{sortbyValue}</SortBy><i className="fas fa-caret-down" style={{ color: "black" }}></i>
        {isdisplayArrangeList &&
          <PodcastArrangeList>
            {
              podcastsArrangeData.map(index => {
                return <PodcastArrangeListElement
                  key={index.id}
                  onClick={handleArrangeElementClick}
                >
                  {index.title}</PodcastArrangeListElement>
              })
            }
          </PodcastArrangeList>
        }
      </PodcastArrange>
      <PodcastCardList>
        {
          podcastsData.map(index => (
            <PodcastCard
              author={index.author}
              id={index.id}
              playPC={playPC}
              playPodCast={handlePodcast.playPodCast}
              hoverID={hoverID}
              hoverPodCast={handlePodcast.hoverPodCast}
              selectID={selectID}
              selectPodCast={handlePodcast.selectPodCast}
              thumbnail={index.thumbnail}
              title={index.title}
              length={index.length}
              key={index.id}
              
              // onClick={() => { console.log("click") }}
            />
          ))
        }
      </PodcastCardList>
    </StyledPodcastList>
  );
}

export default PodcastList;
