import styled from "styled-components";
import { Img } from "../../assets/svg/index";

const Knowledge = () => {
  return (
    <KnowLedgeBlock>
      <QuoteBlock>
        <CommunityBlock>
          <b> community </b>
          <div>
            <blockquote>
              Life is like building a game character. You have limited time to improve your skills,
              collect a nice amount of coins and meet as many challenges as possible.
              <br></br>
              <cite>
                — Alexis
              </cite>
            </blockquote>
          </div>
        </CommunityBlock>
        <TipBlock>
          <TipTitle>
            <b>tip</b>
          </TipTitle>
          <TipParagraph>
            <b>eliminate a bad habit</b>
            <p>In addition to starting good habits, try to eliminate a bad habit. Surely you have a habit that isn't healthy or anything else that isn't serving you.
              Routines can help you track how you manage to avoid this bad habit.</p>
          </TipParagraph>
          <TipImage>
            <img src={Img.habit} alt="" />
          </TipImage>
        </TipBlock>
        <WisdomBlock>
          <b> wisdom </b>
          <blockquote>
            „Anyone who has never made a mistake has never tried anything new.“
            <br></br>
            <cite>
              —  Albert Einstein
            </cite>
          </blockquote>
        </WisdomBlock>
      </QuoteBlock>
      <div className="videoBlock">
      </div>
    </KnowLedgeBlock>
  );
}

export default Knowledge;

const KnowLedgeBlock = styled.div`
  width: 100%; 
  height: 100%; 
  display: grid; 
  grid-template: 5% 95% / 60% 35% ; 
`;

const QuoteBlock = styled.div`
  grid-area: 2/2/2/3; 
  display: grid;
  grid-template: auto auto auto / 100%; 
`;

const CommunityBlock = styled.div`
  grid-area: 1/1/2/2;
  display: grid; 
  grid-template: 30% auto / 100%; 

  b {
    grid-area: 1/1/2/2;
    font-size: 5em; 
    color: black; 
  }
  div{
    grid-area: 2/1/3/2;
    display: flex; 
    align-items: center;
    blockquote{
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
      background-color: white; 
      padding: 25px; 
      border-radius: 25px;
      font-size: 1.5rem;
    }
  }
`;

const TipBlock = styled.div`
  grid-area: 2/1/3/2; 
  display: grid;
  grid-template: 30% 70% / 50% 50%; 
`
const TipTitle = styled.div`
  grid-area: 1/1/2/3;
  display: flex; 
  align-items: center; 
  b{
    color: black; 
    font-size: 5em; 
  }
`

const TipParagraph = styled.div`
  background-color: white; 
  grid-area: 2/1/3/2;
  padding: 25px;
  b{
    font-size: 1.8rem;
    color: black;
  }
  p{
    font-size: 1.5rem;
  }
  border-top: 1.5px solid #000; 
  border-left: 1.5px solid #000; 
  border-bottom: 1.5px solid #000; 
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`
const TipImage = styled.div`
  background-color: white; 
  img{
    height: 80%; 
    width: 80%;
  }
  display: flex;
  justify-content: center; 
  align-items: center;
  grid-area: 2/2/3/3;
  border-top: 1.5px solid #000; 
  border-right: 1.5px solid #000; 
  border-bottom: 1.5px solid #000; 
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`
const WisdomBlock = styled.div`
  display: flex; 
  flex-direction: column; 
  
  b{
    color: black; 
    font-size: 5em; 
  }
  blockquote{
    font-weight: bold;
    padding: 25px; 
    border-radius: 25px;
    font-size: 1.5rem;
  }
`



