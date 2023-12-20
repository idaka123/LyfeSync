import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { KnowledgeContext } from '../Knowledge';
import { Icon } from "../../../assets/icon";
function PodcastShowPlaylistCard({ title, episodes }) {
  const { isPlayingId, setIsPlayingId } = useContext(KnowledgeContext);
  console.log(isPlayingId);
  const handlePlaying = (id) => {
    setIsPlayingId(prev => ({
      isPlaying: prev.id !== id || !prev.isPlaying,
      id,
    }));
  }
  return (
    <PodcastCard>
      <PlaylistHeader>
        <HeaderItem>#</HeaderItem>
        <HeaderItem>Title <SortIcon>▲</SortIcon></HeaderItem>
        <HeaderItem>Date added</HeaderItem>
        <HeaderItem>Duration</HeaderItem>
      </PlaylistHeader>
      <EpisodeList>
        {episodes.map((episode, index) => (
          <EpisodeItem key={episode.id}>
            {
              isPlayingId.id === episode.id
                ?
                isPlayingId.isPlaying === true
                  ?
                  <Column><Icon.pause onClick={() => handlePlaying(episode.id)}></Icon.pause></Column>
                  : <Column><Icon.play onClick={() => handlePlaying(episode.id)}></Icon.play></Column>
                : <Column className='idColumn' onClick={() => handlePlaying(episode.id)}>{index + 1}</Column>
            }
            <Column>
              <img src={episode.thumbnail}></img>
              {episode.title}
            </Column>
            <Column>{episode.date}</Column>
            <Column>{episode.length}</Column>
          </EpisodeItem>
        ))}
      </EpisodeList>
    </PodcastCard>
  );
}

export default PodcastShowPlaylistCard;


const PodcastCard = styled.div`
  background: white;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PlaylistHeader = styled.div`
  display: grid;
  grid-template-columns: 5% 50% 20% 15% 10%;
  padding: 12px 10px 12px;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  font-size:  calc((1vw + 1vh)/2); 
`;

const HeaderItem = styled.div`
  color: black;
  display: flex;
  align-items: center;
  font-size:  calc((1vw + 1vh)/2); 
  cursor: pointer;
  &:nth-child(1){
    display: flex;
    justify-content: center;
  }
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; 
    }
  }
`;

const SortIcon = styled.span`
  margin-left: 5px;
`;

const EpisodeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EpisodeItem = styled.li`
  display: grid;
  grid-template-columns: 5% 50% 20% 15% 10%;
  align-items: center;
  padding: 12px 10px 12px;
  background: white;
  font-size:  calc((1vw + 1vh)/2); 
  &:hover {
    background-color: #cecece;
  }
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; 
    }
  }
`;

const Column = styled.span`
  display: flex;
  align-items: center;
  font-size:  calc((1vw + 1vh)/2); 
  &:nth-child(1){
    display: flex; 
    justify-content: center;
    font-size: 11px;
    &:hover{
      cursor: pointer;
    }
  }
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; 
    }
  }
  img{
    width: calc((3vw + 3vh)/2); 
    height: calc((3vw + 3vh)/2); 
    margin-right: 1%;
    border-radius: calc((0.5vw + 0.5vh)/2); ;
  }
`;