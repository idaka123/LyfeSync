import {
  StyledPodcastList, PodcastListType, PodcastListTypeElement, PodcastArrange,
  PodcastArrangeList, PodcastArrangeListElement, SortBy, PodcastCardList
} from "../Knowledge.desktop";
import PodcastCard from "./PodcastCard";
import { podcastsData, podcastsType, podcastsArrangeData } from "../Knowledge.data";
import { createContext, useEffect, useRef, useState } from "react";
export const PodcastListContext = createContext();
const PodcastList = () => {
  const podCastListTypeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocusedList, setIsFocusedList] = useState(Array(podcastsData.length).fill(false))
  const [image, setImage] = useState(podcastsData.map(podcasts => podcasts.thumbnail));
  const [cardId, setCardId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  /*   const switchPlayStop = (condition) => {
      const url1 = "https://cdn-icons-png.flaticon.com/512/4153/4153091.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
      const url2 = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
      const url = condition ? url1 : url2;
      let newImageList = Array.from(image);
      newImageList = podcastsData.map(podcasts => podcasts.thumbnail);
      newImageList[cardId] = url;
      setImage(newImageList);
    } */

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

  const handlePodcastCardClick = (index) => {
    const newIsFocusedList = Array.from(isFocusedList);
    newIsFocusedList.fill(false);
    newIsFocusedList[index] = true;
    setIsFocusedList(newIsFocusedList);
    setCardId(index);
  }

  useEffect(() => {
    let newImageList1 = Array.from(image);
    newImageList1 = podcastsData.map(podcasts => podcasts.thumbnail);
    newImageList1[cardId] = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    setImage(newImageList1);
    const url1 = "https://cdn-icons-png.flaticon.com/512/4153/4153091.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const url2 = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const url = isPlaying ? url1 : url2;
    let newImageList = Array.from(image);
    newImageList = podcastsData.map(podcasts => podcasts.thumbnail);
    newImageList[cardId] = url;
    setImage(newImageList);
    return () => {

    }
  }, [isFocusedList])

  const handlePodcastCardMouseEnter = (index) => {
    const newImageList = Array.from(image);
    newImageList[index] = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    if (!isFocusedList[index]) {
      setImage(newImageList);
    }
  }

  const handlePodcastCardMouseLeave = (index) => {
    const newImageList = Array.from(image);
    newImageList[index] = podcastsData[index].thumbnail;
    if (!isFocusedList[index]) {
      setImage(newImageList);
    }
  }

  useEffect(() => {
    const url1 = "https://cdn-icons-png.flaticon.com/512/4153/4153091.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const url2 = "https://cdn-icons-png.flaticon.com/512/54/54377.png?uid=R103890073&ga=GA1.1.1121238435.1696518879";
    const url = isPlaying ? url1 : url2;
    let newImageList = Array.from(image);
    newImageList = podcastsData.map(podcasts => podcasts.thumbnail);
    newImageList[cardId] = url;
    setImage(newImageList);
    console.log(isPlaying)
  }, [isPlaying])

  const handleThumbnailsClick = () => {
    setIsPlaying(!isPlaying);
  }

  const providerValue = { handleThumbnailsClick }
  return (
    <PodcastListContext.Provider value={providerValue}>
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
            podcastsData.map((value, index) => (
              <PodcastCard
                author={value.author}
                id={value.id}
                thumbnail={image[index]}
                title={value.title}
                length={value.length}
                key={value.id}
                onClick={() => handlePodcastCardClick(index)}
                onMouseEnter={() => handlePodcastCardMouseEnter(index)}
                onMouseLeave={() => handlePodcastCardMouseLeave(index)}
                style={isFocusedList[index] ? { "border": "2px solid black" } : { "border": "none" }}
              />
            ))
          }
        </PodcastCardList>
      </StyledPodcastList>
    </PodcastListContext.Provider>
  );
}

export default PodcastList;
