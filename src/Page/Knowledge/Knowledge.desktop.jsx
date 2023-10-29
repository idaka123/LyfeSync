import styled from "styled-components";

export const KnowLedgeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const KnowLedgeBlockStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: white;
  display: grid;
  grid-template: 2% 90% / 3% 69% 25%;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const QuoteBlock = styled.div`
  height: 100%;
  grid-area: 2/3/3/4;
  display: flex;
  flex-direction: column;
`;

export const CommunityBlockTitle = styled.div`
  user-select: none;
  height: 10%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    font-size: calc((4vw + 4vh)/2);
    color: black;
  }
`;

export const CommunityBlockContent = styled.div`
  overflow: hidden;
  height: 15%;
  color: #404040;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: start;
  blockquote {
    padding: calc((1.3vw + 1.5vh)/2);
    font-size: calc((1.16vw + 1.5vh)/2);
    &:hover {
      user-select: none;
    }
    animation-duration: 2s;
  }
  cite {
    font-size: calc((1.16vw + 1.5vh)/2);
    color: #9b9a9a;
  }
  margin-bottom: 4%;
`;

export const TipTitle = styled.div`
  user-select: none;
  height: 11%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);
  }
`;

export const TipBlock = styled.div`
  height: 38.65%;
  overflow: hidden;
  display: grid;
  grid-template: 100% / 50% 50%;
  border: 1.5px solid #000;
  border-radius: calc((1.5vw + 1.5vh)/2);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  &:hover {
    user-select: none;
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }
`;

export const TipParagraph = styled.div`
  background-color: white;
  grid-area: 1/1/2/2;
  padding: calc((1.3vw + 1.5vh)/2);
  b {
    font-size: calc((1.16vw + 1.5vh)/2);
    color: black;
  }
  p {
    font-size: calc((1.16vw + 1.5vh)/2);
  }
  cite {
    font-size: calc((1.16vw + 1.5vh)/2);
  }
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: hidden;
  height: 90%;
`;

export const TipImage = styled.div`
  background-color: white;
  img {
    height: 80%;
    width: 80%;
    border-radius: calc((1.5vw + 1.5vh)/2);
    box-shadow: 0 5px 10px rgba(0,0,0,1);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/2/2/3;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const WisdomBlockTitle = styled.div`
  height: 9.5%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);
  }
  user-select: none;
`;

export const WisdomBlockContent = styled.div`
  height: 10%;
  blockquote {
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: calc((1.5vw + 1.5vh)/2);
    font-size: calc((1.16vw + 1.5vh)/2);
    color: #625d5d;
  }
  cite {
    font-size: calc((1.25vw + 1vh)/2);
    color: #9b9a9a;
  }
  user-select: none;
  margin-bottom: 2%;
`;

export const PodcastBlock = styled.div`
  grid-area: 2/2/3/3;
  height: 95%;
`;

export const PodcastBlockTitle = styled.div`
  height: 9%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);
    user-select: none;
  }
`;

export const StyledPodcastCard = styled.div`
  display: grid;
  grid-template: 50% 50% / 4% 9% 76% auto;
  background-color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  width: 100%;
  height: 16%;
  margin-bottom: calc((0.7vw + 0.7vh)/2);
  font-weight: 700;
  user-select: none;
  &:hover{
    box-shadow: 0 5px 10px rgba(0,0,0,0.6);
    transition: box-shadow 1s ease;
  }
`;

export const PodcastCardId = styled.p`
  grid-area: 1/1/3/2;
  font-size: calc((1.75vw + 1.75vh)/2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const PodcastCardList = styled.div`
  position: relative;
  grid-area: 3/1/4/2;
  height: 100%;
  width: 100%;
  border-radius: calc((2vw + 2vh)/2);
  border: 2px solid #cbcbcb;
  padding: calc((1vw + 1vh)/2);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const PodcastThumbnails = styled.div`
  grid-area: 1/2/3/3;
  img {
    height: calc((5vh + 5vw)/2);
    width: calc((5vh + 5vw)/2);
    border-radius: calc((0.7vw + 0.7vh)/2);
  }
  svg {
    font-size: calc((5vw + 5vh)/2);
    color: black;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  &:hover {
    cursor: pointer;
  }
`;

export const PodcastTitle = styled.div`
  grid-area: 1/3/2/4;
  color: black;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: calc((1.3vw + 1.3vh)/2);
  }
  width: 100%;
`;

export const PodcastLength = styled.p`
  grid-area: 2/3/3/4;
  font-size: calc((1.25vw + 1.25vh)/2);
  display: flex;
  justify-content: start;
  align-items: flex-start;
  overflow: hidden;
`;

export const PodcastOption = styled.div`
  grid-area: 1/4/3/5;
  display: grid;
  grid-template: 100% / 50% 50%;
`;

export const PodcastShare = styled.div`
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size:  calc((2.25vw + 2.25vh)/2);
    color: black;
    &:hover{
      cursor: pointer;
      color: gray;
    }
  }
`;

export const PodcastAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/1/2/2;
  svg{
    font-size:  calc((2.25vw + 2.25vh)/2);
    &:hover{
      cursor: pointer;
    }
  }
  .iconAdd {
    color: black;
  }
  .iconCheck{
    color: green;
  }
`;

export const StyledPodcastList = styled.div`
  height: 94%;
  width: 93%;
  display: grid;
  grid-template: 9% 5.5% auto / 100%;
`;

export const PodcastListType = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const PodcastArrange = styled.div`
  position: relative;
  grid-area: 2/1/3/2;
  display: grid;
  grid-template: 100% / 5% 45% 48% 2%;
`;

export const PodcastArrangeTitleIcon = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .iconList {
    font-size: calc((1.5vw + 1.5vh)/2);
    color: black;
  }
  user-select: none;
  height: 90%;
`;

export const PodcastArrangeTitle = styled.p`
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: calc((1.2vw + 1.2vh)/2);
  color: black;
  font-weight: 700;
  user-select: none;
`;

export const SortBy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: 1/3/2/4;
  font-size: calc((1.25vw + 1.25vh)/2);
  font-weight: bold;
  color: black;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

export const SortByIcon = styled.div`
  grid-area: 1/4/2/5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  .iconArrowDown {
    font-size: calc((1.18vw + 1.vh)/2);
  }
  user-select: none;
`;

export const PodcastArrangeList = styled.ul`
  background-color: black;
  position: absolute;
  top: calc((2.6vw + 2.6vh)/2);
  right: 0;
  z-index: 1;
  list-style: none;
  border-radius: calc((1.5vw + 1.5vh)/2);
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
`;

export const PodcastArrangeListElement = styled.li`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc((1vw + 1.5vh)/2);
  color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  padding-top: calc((1vw + 1vh)/2);
  padding-bottom: calc((1vw + 1vh)/2);
  padding-left: calc((2vw + 2vh)/2);
  padding-right: calc((2vw + 2vh)/2);
  user-select: none;
`;

export const PodcastListTypeElement = styled.div`
  height: 70%;
  width: auto;
  min-width: 12%;
  max-width: 15%;
  border-radius: calc((1.5vw + 1.5vh)/2);
  font-size: calc((1.16vw + 1.5vh)/2);
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.1%;
  margin-right: 1.1%;
  user-select: none;
  color: white;
  background-color: black;
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    font-weight: 700;
    transition: all 0.3s ease;
  }
`;

export const PodcastShareStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const PodcastShareBlock = styled.div`
  width: calc((48vw + 48vh)/2);
  height: calc((43vw + 43vh)/2);
  display: grid;
  grid-template: 
    8% auto 5% 11% 11% /
    100%;
  gap: calc((0.5vw + 0.5vh)/2);
  background-color: rgb(24,24,24);
  padding: 1% 1.5%;
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 10px 10px 20px rgb(61 59 59 / 71%);
`;

export const PodcastShareBlockTitle = styled.div`
  grid-area: 1/1/2/2;
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  color: rgb(255,255,255);

  p {
    font-size: calc((1.5vw + 1.5vh)/2);
    font-weight: bold;
    user-select: none;
  }

  .shareBlockIcon {
    display: flex; 
    justify-content: center; 
    align-items: center;
    background-color: #212121; 
    border-radius: 50%;
    padding: 1%;

    .blockIconX {
      font-size: calc((2vw + 2vh)/2);
      transform-origin: center;
    }

    .blockIconX:hover {
      color: red;
      cursor: pointer;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }
  }
`;

export const PodcastShareBlockContent = styled.div`
  grid-area: 2/1/2/2;
  background-image: radial-gradient(circle, white, rgb(110 110 110));
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 1);
  display: grid; 
  grid-template: 100% / 50% 50%;
  width: 100%; 
  height: 100%;

  .blockContentImage {
    grid-area: 1/1/2/2;
    display: flex; 
    justify-content: center; 
    align-items: center;

    img {
      width: calc((18vw + 18vh)/2);
      height: calc((18vw + 18vh)/2);
      border-radius: calc((2.5vw + 2.5vh)/2);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
      user-select: none;
    }
  }

  .blockContentInfoContainer {
    grid-area: 1/2/2/3;
    display: flex;
    justify-content: center; 
    align-items: center;
    color: black;
    margin-right: 5%;

    .blockContentInfo {
      width: 100%;
      height: calc((18vw + 18vh)/2);
      
      .contentInfoTitle {
        height: 41%;
        display: flex; 
        align-items: end;
        font-weight: bold;
        overflow: hidden;

        p {
          font-size: calc((2.25vw + 2.25vh)/2);
          white-space: nowrap;
          user-select: none;
          width: max-content; 
        }

        @keyframes slide {
          -100% { transform: translateX(100%);}
          100% { transform: translateX(-100%);}
        }

        .running-text {
          animation: slide 90s linear infinite;
        } 

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .contentInfoAuthor {
        height: 14.5%;
        font-size: calc((1.5vw + 1.5vh)/2);
        color: #000000bf;
        font-weight: bold;
        user-select: none;
      }

      .contentInfoLength {
        height: 14.5%;
        font-size: calc((1.25vw + 1.25vh)/2);
        color: #000000bf;
        font-weight: bold;
        user-select: none;
      }

      .contentInfoButton {
        height: 30%;
        display: flex; 
        justify-content: end;
        align-items: center; 
        
        p {
          background-color: rgb(24 24 24 / 0%);
          color: #ffffffeb;
          height: calc((3vw + 3vh)/2);
          width: calc((8.75vw + 8.75vh)/2);
          border-radius: calc((1.1vw + 1.1vh)/2);
          display: flex; ;
          justify-content: center; 
          align-items: center;
          font-size: calc((1vw + 1vh)/2);
          transform-origin: center;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
          
          &:hover {
            transition: all 0.3s ease;
            transform: scale(1.05);
            color: white;
            cursor: pointer;
            color: white;
          }
        }
      }
    }
  }
`;

export const PodcastShareSendto = styled.p`
  grid-area: 3/1/4/2;
  width: 100%; 
  height: 100%;
  color: rgb(163,163,163); 
  font-size: calc((1vw + 1vh)/2);
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  user-select: none;
`;

export const PodcastShareBlockSocial = styled.div`
  grid-area: 4/1/5/2;
  display: flex; 
  justify-content: flex-start;
  align-items: flex-start;
  
  .blockSocial {
    width: calc((3.15vw + 3.15vh)/2);
    height: calc((3.15vw + 3.15vh)/2);
    margin-right: 1.2%;
    margin-left: 1.2%;
    transform-origin: center;
    
    &:hover{
      cursor: pointer;
      transition: all 0.3s ease;
      transform: scale(1.2);
    }
    user-select: none;
  }
`;

export const PodcastShareCopyButton = styled.div`
  grid-area: 5/1/6/2;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  background-color: #212121; 
  border-radius: calc((1.5vw + 1.5vh)/2);
  
  p {
    width: 85%; 
    line-height: 100%;
    padding-left: 3%;
    font-size: calc((1.5vw + 1.5vh)/2);
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    width: calc((4.5vw + 4.5vh)/2);
    height: calc((2.3vw + 2.3vh)/2);
    font-size: calc((0.75vw + 0.75vh)/2);
    font-weight: bold;
    border-radius: calc((1vw + 1vh)/2);
    border: none;
    background-color: rgb(30,215,96); 
    transition: all 0.1s ease;
    transform-origin: center;
    
    &:hover{
      cursor: pointer;
      transform: scale(1.05);
    }
    margin-right: 1%;
  }
`;
