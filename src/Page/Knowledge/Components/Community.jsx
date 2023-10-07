import { CommunityBlockContent, CommunityBlockTitle } from "../Knowledge.desktop";
import { useEffect, useRef, useState } from "react";
import { quotesData } from "../Knowledge.data";
import 'animate.css';
import updateContent from "../utils/updateContent";
import random from "../utils/random";
import { ANIMATIONS } from "../utils/animationConstants";
const Community = () => {
  const timeoutQuoteID = useRef(null);
  const intervalTempQuote = useRef(null);
  const { FLIP_IN, FLIP_OUT } = ANIMATIONS;
  const QUOTE_UPDATE_TIMEOUT = 10000;
  const QUOTE_ANIMATION_DURATION = 8500;
  const maxQuotes = 19;
  const minQuotes = 0;

  const [quote, setQuote] = useState(quotesData[random(maxQuotes, minQuotes)]);

  useEffect(() => {
    const updateQuote = () => {
      setQuote(updateContent(quote, quotesData, maxQuotes, minQuotes));
    }
    intervalTempQuote.current = setInterval(updateQuote, QUOTE_UPDATE_TIMEOUT);
    return () => {
      clearInterval(intervalTempQuote.current);
    }
  }, [])

  const [isFlipOutAnimated, setFlipOutAnimated] = useState(false);
  const [isFlipInAnimated, setFlipInAnimated] = useState(false);

  useEffect(() => {
    setFlipInAnimated(false);
    setFlipOutAnimated(false);
    setFlipInAnimated(true);
    timeoutQuoteID.current = setTimeout(() => {
      setFlipOutAnimated(true);
    }, QUOTE_ANIMATION_DURATION);
    return () => {
      clearTimeout(timeoutQuoteID.current);
    }
  }, [quote]);
  return (
    <>
      <CommunityBlockTitle> community </CommunityBlockTitle>
      <CommunityBlockContent className={`
            ${isFlipOutAnimated ? `${FLIP_OUT} animate__slow ` : ""} 
            ${isFlipInAnimated ? `${FLIP_IN} animate__slow` : ""}
            `}>
        <blockquote>
          {quote?.content}
          <br></br>
          <cite>
            —{quote?.author}
          </cite>
        </blockquote>
      </CommunityBlockContent>
    </>
  );
}

export default Community; 