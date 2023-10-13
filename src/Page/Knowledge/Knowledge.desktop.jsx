import styled from "styled-components";
export const KnowLedgeBlock = styled.div`
  &::-webkit-scrollbar {
    width: 0px;  
    height: 0px; 
  }
  width: 100%; 
  height: 100%; 
  display: grid; 
  grid-template: 3% 94% / 3% 59% 35%; 
`;


export const QuoteBlock = styled.div`
  height: 89%;
  grid-area: 2/3/3/4; 
  display: flex; 
  flex-direction: column;
`;

export const CommunityBlockTitle = styled.div`
letter-spacing: calc((.1vw+.1vh)/2);
user-select: none; 
height: 11.2%;
b{
  font-size: calc((4vw + 4vh)/2); 
  color: black; 
}
`
export const CommunityBlockContent = styled.div`
overflow: hidden;
height: 14%;
color: #404040; 
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
background-color: white; 
border-radius: calc((1.5vw + 1.5vh)/2);
blockquote{
  padding: calc((1.3vw + 1.5vh)/2); 
  font-size: calc((1.16vw + 1.5vh)/2);
  &:hover{
    user-select: none; 
  }
  animation-duration: 2s;
}
cite{
  font-size: calc((1.16vw + 1.5vh)/2);
  color: #9b9a9a; 
}
margin-bottom: 4%;
`
export const TipTitle = styled.div`
user-select: none; 
height: 11%;
letter-spacing: calc((.1vw+.1vh)/2);
  b{
    color: black; 
    font-size: calc((4vw + 4vh)/2); 
  }
`

export const TipBlock = styled.div` 
height: 38%;
overflow: hidden; 
display: grid;
grid-template: 100% / 50% 50%; 
border: 1.5px solid #000;
border-radius: calc((1.5vw + 1.5vh)/2);  
background-color: white; 
transition: transform 0.3s, box-shadow 0.3s;  
box-shadow: 0 5px 10px rgba(0,0,0,0.2);  

&:hover{
  user-select: none; 
  cursor: pointer; 
  transform: translateY(-5px); 
  box-shadow: 0 10px 20px rgba(0,0,0,0.5); 
}

`


export const TipParagraph = styled.div`
  background-color: white; 
  grid-area: 1/1/2/2;
  padding: calc((1.3vw + 1.5vh)/2); 
  b{
    font-size: calc((1.16vw + 1.5vh)/2);
    color: black;
  }
  p{
    font-size: calc((1.16vw + 1.5vh)/2);
  }
  cite{
    font-size: calc((1.16vw + 1.5vh)/2);
  }
   border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: hidden;
  height: 90%;
`
export const TipImage = styled.div`
  background-color: white; 
  img{
    height: 80%; 
    width: 80%;
    border-radius: calc((1.5vw + 1.5vh)/2);
    box-shadow: 0 5px 10px rgba(0,0,0,1);  // Bóng đổ mặc định
  }
  display: flex;
  justify-content: center; 
  align-items: center;
  grid-area: 1/2/2/3;
    border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`
export const WisdomBlockTitle = styled.div`
height: 9.5%;
letter-spacing: calc((.1vw+.1vh)/2);
b{
  color: black; 
  font-size: calc((4vw + 4vh)/2); 
}
user-select: none; 
`
export const WisdomBlockContent = styled.div`
height: 10%;
blockquote{
  font-weight: bold;
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 25px; 
  padding-right: 25px; 
  border-radius: calc((1.5vw + 1.5vh)/2);
  font-size: calc((1.16vw + 1.5vh)/2);
  color: #625d5d; 
}
cite{
  font-size: calc((1.25vw + 1vh)/2);
  color: #9b9a9a; 
}
user-select: none; 
margin-bottom: 2%;
`

export const PodcastBlock = styled.div`
  grid-area: 2/2/3/3;
  height: 84%;
`
export const PodcastBlockTitle = styled.div`
height: 11%;
letter-spacing: calc((.1vw+.1vh)/2);
b{
  color: black; 
  font-size: calc((4vw + 4vh)/2); 
  user-select: none; 
}
`
export const StyledPodcastCard = styled.div`
  display: grid; 
  grid-template: 50% 50% / auto 86% 3%; 
  background-color: white; 
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 16.5%; 
  margin-bottom: calc((1vw + 1vh)/2);
  font-weight: 700; 
  user-select: none; 
`
export const PodcastCardList = styled.div`
   grid-area: 3/1/4/2;
   height: 100%; 
   width: 100%;
   background-color: transparent;
`

export const PodcastThumbnails = styled.div`
  grid-area: 1/1/3/2;
  img{
    height: calc((5vh + 5vw)/2);
    width: calc((5vh + 5vw)/2);
    border-radius: calc((1vw + 1vh)/2);
  }
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-wrap: no-wrap;
  &:hover{
    cursor: pointer; 
  }
`
export const PodcastTitle = styled.div`
  grid-area: 1/2/2/3;
  color: black;
  font-size: calc((1.25vw + 1.25vh)/2);
  display: flex; 
  justify-content: start; 
  align-items: flex-end;
  p{
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
  }
  width: 100%; 

`
export const PodcastLength = styled.p`
  grid-area: 2/2/3/3;
  font-size: calc((1.25vw + 1.25vh)/2);
  display: flex;
  justify-content: start; 
  align-items: flex-start;
  overflow: hidden;
`
export const StyledPodcastList = styled.div`
  height: 94%;
  width: 93%;
  display: grid; 
  grid-template: 10% 8% auto / 100%; 

`
export const PodcastListType = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%; 
  &:hover{
    cursor: pointer;
  }
`
export const PodcastArrange = styled.div`
  position: relative;
  grid-area: 2/1/3/2;
  display: flex; 
  justify-content: flex-end; 
  align-items: center;
`
export const SortBy = styled.div`
  padding-left:  calc((1vw + 1vh)/2);
  font-size: calc((1.18vw + 1.5vh)/2);
  font-weight: bold; 
  color: black; 
  user-select: none; 
  &:hover{
    cursor: pointer; 
  }
  padding-right: calc((0.5vw + 0.5vh)/2);
`

export const PodcastArrangeList = styled.ul`
  background-color: grey;
  position: absolute; 
  top: calc((4.5vw + 4.5vh)/2);
  right: 0; 
  width: calc((8.25vw + 8.25vh) / 2);
  index: 1; 
  list-style: none; 
  display: flex; 
  flex-direction: column; 
  height: auto; 
  width: auto;
  background-color: white; 
`
export const PodcastArrangeListElement = styled.li`
 margin : 0;   
  display: flex; 
  justify-content: center;
  align-items: center; 
  font-size: calc((1vw + 1.5vh)/2); 
  color: black;
  &:hover{
    background-color: black;
    color: white; 
    cursor: pointer;  
  }
  padding-top: calc((1vw + 1vh)/2); 
  padding-bottom: calc((1vw + 1vh)/2); 
  padding-left: calc((2vw + 2vh)/2);
  padding-right: calc((2vw + 2vh)/2);
  user-select: none; 
`

export const PodcastListTypeElement = styled.div`
  height: 60%;
  width: auto;
  min-width: 10%; 
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
  &:hover{
    cursor: pointer; 
  }
`