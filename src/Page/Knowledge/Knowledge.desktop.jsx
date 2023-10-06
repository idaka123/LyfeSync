import styled from "styled-components";
export const KnowLedgeBlock = styled.div`
  width: 100%; 
  height: 120vh; 
  display: grid; 
  grid-template: 5% 95% / 3% 57% 35% ; 
`;

export const QuoteBlock = styled.div`
  height: 80%;
  grid-area: 2/3/3/4; 
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
`;

export const CommunityBlockTitle = styled.b`
font-size: 5em; 
color: black; 
`
export const CommunityBlockContent = styled.div`
height: 2em; 
blockquote{
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white; 
  padding: 25px; 
  border-radius: 25px;
  font-size: 1.5rem;
  &:hover{
    user-select: none; 
  }
  animation-duration: 2s;
}
`
export const TipTitle = styled.div`
  b{
    color: black; 
    font-size: 5em; 
  }
`

export const TipBlock = styled.div` 
height: 45%;
  display: grid;
  grid-template: 100% / 50% 50%; 
  border: 1.5px solid #000;
  border-radius: 25px;  
  background-color: white; 
  &:hover{
    user-select: none; 
    cursor: pointer; 
  }
`


export const TipParagraph = styled.div`
  background-color: white; 
  grid-area: 1/1/2/2;
  padding: 25px;
  b{
    font-size: 1.8rem;
    color: black;
  }
  p{
    font-size: 1.5rem;
  }
   border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`
export const TipImage = styled.div`
  background-color: white; 
  img{
    height: 80%; 
    width: 80%;
    border-radius: 20px;
  }
  display: flex;
  justify-content: center; 
  align-items: center;
  grid-area: 1/2/2/3;
    border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`
export const WisdomBlockTitle = styled.b`
color: black; 
font-size: 5em; 
`
export const WisdomBlockContent = styled.div`
blockquote{
  font-weight: bold;
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 25px; 
  padding-right: 25px; 
  border-radius: 25px;
  font-size: 1.5rem;
}
`

export const VideoBlock = styled.div`
  grid-area: 2/2/3/3;
`
export const VideoBlockTitle = styled.b`
color: black; 
font-size: 5em; 
`
