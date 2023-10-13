import { useState } from "react";
import styled from "styled-components";
import { PodcastTitle, PodcastThumbnailsWrapper, PodcastLength, StyledPodcastCard } from "../Knowledge.desktop"
import { Icon } from "../../../Assets/icon"

const PodcastCard = (p) => {
  const { 
    id,
    playPC, playPodCast, 
    hoverID, hoverPodCast,
    selectID, selectPodCast,
    thumbnail, author, title, length, } = p


  const handleHoverEnter = () => {
    // console.log("hovering", id, playPC.id)
    if(playPC.id === id) return 

    hoverPodCast(id)
    console.log(hoverID, id)
  }

  const handleMouseLeave = () => {
    if(playPC.id === id) return 

    hoverPodCast(-1)
    console.log(hoverID, id)
  }

  const handleSelect = () => {
    selectPodCast(id)
  }

  return (
    <StyledPodcastCard
      tabIndex="0"
      style={playPC.id === id ? { "border": "2px solid black" } : { "border": "none" }}
      id={id}
      onClick={handleSelect}
    >
      <PodcastThumbnailsWrapper>
      
      <Thumbnail 
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => { playPodCast(id) }}> 
        <div className="img-wrapper">
          <img src={thumbnail} />
          {playPC.id === id 
          ? <FilterOverLay />
          : hoverID === id && <FilterOverLay />
          }
        </div>
        <span>
        {playPC.id === id 
        ?  
          (playPC.isPlaying === true  
            ? <Icon.pause/>
            : <Icon.play/>)
        : ( hoverID === id && <Icon.play/> )    
        }
        </span>
      </Thumbnail>
      
       
      </PodcastThumbnailsWrapper>
      <PodcastTitle>
        <p>
          {`${author} | ${title}`}
        </p>
      </PodcastTitle>
      <PodcastLength>
        {length}
        <br />
        {selectID && selectID === id && <p>selected</p>}
      </PodcastLength>
    </StyledPodcastCard >
  );
}

const Thumbnail = styled.div `
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-wrapper {
    height: calc((5vh + 5vw)/2);
    width: calc((5vh + 5vw)/2);
    border-radius: calc((1vw + 1vh)/2);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: calc((1vw + 1vh)/2);
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: auto;
    width: 50%;
    height: 50%;
    /* background-color: white; */
    border-radius: 50%;

    svg {
      color: white;
      position: inherit;
      font-size: 26px;
      width: 100%;
    }
  }
`

const FilterOverLay = styled.div `
  background-color: rgba(0, 0, 0, 0.5);
  opacity: .5;
  top: 0;
  position: absolute;
  height: calc((5vh + 5vw)/2);
  width: calc((5vh + 5vw)/2);
  border-radius: calc((1vw + 1vh)/2);
`

export default PodcastCard
