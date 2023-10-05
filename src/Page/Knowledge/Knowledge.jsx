
import { Img } from "../../assets/svg/index";
import { quotesData } from "./Knowledge.data"
import { useEffect, useRef, useState } from "react";
import 'animate.css';
import {
  KnowLedgeBlock, QuoteBlock, CommunityBlockTitle,
  CommunityBlockContent, TipTitle, TipBlock,
  TipParagraph, TipImage, WisdomBlockTitle,
  WisdomBlockContent, VideoBlock, VideoBlockTitle
} from "./Knowledge.desktop";
const Knowledge = () => {
  const intervalID = useRef(null);
  const blockContentQuote = useRef();
  const maxQuotes = 19;
  const minQuotes = 0;
  const [quote, setQuotes] = useState(quotesData[Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes)]);
  const handleCommunityBlockContent = () => {
    clearInterval(intervalID.current);
    let tempQuote = Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes);
    while (quote.content === quotesData[tempQuote].content) {
      tempQuote = Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes)
    }
    intervalID.current = setInterval(() => {
      setQuotes(quotesData[tempQuote]);
    }, 200);
  }
  useEffect(() => {
    const quoteElement = document.querySelector(".communityBlockContent");
    quoteElement.classList.remove("animate__animated", "animate__bounceIn");
    quoteElement.classList.add("animate__animated", "animate__bounceIn");
    if (quoteElement) {
      intervalID.current = setInterval(() => {
        quoteElement.classList.add("animate__animated", "animate__bounceIn");
        quoteElement.classList.remove("animate__animated", "animate__bounceIn");
      }, 330);
    }
    else clearInterval(intervalID.current);
    return () => {
      clearInterval(intervalID.current);
    }
  }, [quote]);

  return (
    <>
      <KnowLedgeBlock>
        <QuoteBlock>
          <CommunityBlockTitle> community </CommunityBlockTitle>
          <CommunityBlockContent onClick={handleCommunityBlockContent} className="communityBlockContent animate__slow	">
            <blockquote ref={blockContentQuote}>
              {quote?.content}
              <br></br>
              <cite>
                —{quote?.author}
              </cite>
            </blockquote>
          </CommunityBlockContent>
          <TipTitle>
            <b>tip</b>
          </TipTitle>
          <TipBlock>
            <TipParagraph>
              <b>eliminate a bad habit</b>
              <p>In addition to starting good habits, try to eliminate a bad habit. Surely you have a habit that isn't healthy or anything else that isn't serving you.
                Routines can help you track how you manage to avoid this bad habit.
              </p>
            </TipParagraph>
            <TipImage>
              <img src={Img.habit} alt="" />
            </TipImage>
          </TipBlock>
          <WisdomBlockTitle> wisdom </WisdomBlockTitle>
          <WisdomBlockContent>
            <blockquote>
              „Anyone who has never made a mistake has never tried anything new.“
              <br></br>
              <cite>
                —  Albert Einstein
              </cite>
            </blockquote>
          </WisdomBlockContent>
        </QuoteBlock>
        <VideoBlock>
          <VideoBlockTitle>growth academy</VideoBlockTitle>
        </VideoBlock>
      </KnowLedgeBlock>
    </>
  );
}

export default Knowledge;

