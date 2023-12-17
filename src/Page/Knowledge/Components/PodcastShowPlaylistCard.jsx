import React from 'react';
import styled from 'styled-components';

const PodcastCard = styled.div`
  background: white;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PlaylistHeader = styled.div`
  display: grid;
  grid-template-columns: 5% 50% 20% 15% 10%;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  font-size:  calc((1vw + 1vh)/2);  /* Updated responsive font size */
`;

const HeaderItem = styled.div`
  color: black;
  display: flex;
  align-items: center;
  font-size:  calc((1vw + 1vh)/2); 
  cursor: pointer;
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; /* Hide headers on smaller screens */
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
  padding: 12px 16px;
  background: white;
  font-size:  calc((1vw + 1vh)/2);  /* Updated responsive font size */
  &:hover {
    background-color: #cecece;
  }
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; /* Hide columns on smaller screens */
    }
  }
`;

const Column = styled.span`
  display: flex;
  align-items: center;
  font-size:  calc((1vw + 1vh)/2); 
  &:nth-child(4), &:nth-child(5) {
    @media (max-width: 1024px) {
      display: none; /* Hide columns on smaller screens */
    }
  }
  img{
    width: calc((3vw + 3vh)/2); 
    height: calc((3vw + 3vh)/2); 
    margin-right: 1%;
    border-radius: calc((0.5vw + 0.5vh)/2); ;
  }
`;

function PodcastShowPlaylistCard({ title, episodes }) {
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
            <Column>
              {index + 1}
            </Column>
            <Column>
              <img src={episode.thumbnail}></img>
              {episode.title}
            </Column>
            <Column>{episode.date}</Column>
            <Column>{episode.duration}</Column>
          </EpisodeItem>
        ))}
      </EpisodeList>
    </PodcastCard>
  );
}

export default PodcastShowPlaylistCard;
