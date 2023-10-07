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
font-size: calc((4.5vw + 4.5vh)/2); 
color: black; 
`
export const CommunityBlockContent = styled.div`
height: 4em; 
blockquote{
  color: #404040; 
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white; 
  padding: 25px; 
  border-radius: 25px;
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
`
export const TipTitle = styled.div`
  b{
    color: black; 
    font-size: calc((4.5vw + 4.5vh)/2); 
  }
`

export const TipBlock = styled.div` 
position: relative; 
overflow: hidden; 
height: 45%;
display: grid;
grid-template: 100% / 50% 50%; 
border: 1.5px solid #000;
border-radius: 25px;  
background-color: white; 
transition: transform 0.3s, box-shadow 0.3s;  // Thêm transition để hiệu ứng diễn ra mượt mà
box-shadow: 0 5px 10px rgba(0,0,0,0.2);  // Bóng đổ mặc định

&:hover{
  user-select: none; 
  cursor: pointer; 
  transform: translateY(-5px);  // Dịch chuyển lên 5px khi di chuột qua
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);  // Bóng đổ mạnh hơn khi di chuột qua
}
`


export const TipParagraph = styled.div`
  background-color: white; 
  grid-area: 1/1/2/2;
  padding: 25px;
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
`
export const TipImage = styled.div`
  background-color: white; 
  img{
    height: 80%; 
    width: 80%;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,1);  // Bóng đổ mặc định
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
font-size: calc((4.5vw + 4.5vh)/2); 
`
export const WisdomBlockContent = styled.div`
blockquote{
  font-weight: bold;
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 25px; 
  padding-right: 25px; 
  border-radius: 25px;
  font-size: calc((1.16vw + 1.5vh)/2);
  color: #625d5d; 
}
cite{
  font-size: calc((1.25vw + 1vh)/2);
  color: #9b9a9a; 
}
`

export const VideoBlock = styled.div`
  grid-area: 2/2/3/3;
`
export const VideoBlockTitle = styled.b`
color: black; 
font-size: calc((4.5vw + 4.5vh)/2); 
`
