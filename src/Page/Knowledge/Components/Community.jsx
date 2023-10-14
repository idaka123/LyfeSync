import React, { useEffect, useRef, useState } from "react";
import 'animate.css';
import { CommunityBlockContent, CommunityBlockTitle } from "../Knowledge.desktop";
import { quotesData } from "../Knowledge.data";
import { ANIMATIONS } from "../utils/animationConstants";
import updateContent from "../utils/updateContent";
import random from "../utils/random";

const Community = () => {
  const { FLIP_IN, FLIP_OUT } = ANIMATIONS;
  const QUOTE_UPDATE_TIMEOUT = 10000;
  const QUOTE_ANIMATION_DURATION = 8500;
  const maxQuotes = 19;
  const minQuotes = 0;

  const timeoutQuoteID = useRef(null);
  const intervalTempQuote = useRef(null);

  const [quote, setQuote] = useState(quotesData[random(maxQuotes, minQuotes)]);
  const [isFlipOutAnimated, setFlipOutAnimated] = useState(false);
  const [isFlipInAnimated, setFlipInAnimated] = useState(false);

  useEffect(() => {
    const updateQuote = () => {
      setQuote(updateContent(quote, quotesData, maxQuotes, minQuotes));
    }

    intervalTempQuote.current = setInterval(updateQuote, QUOTE_UPDATE_TIMEOUT);
    setFlipInAnimated(false);
    setFlipOutAnimated(false);

    setFlipInAnimated(true);
    timeoutQuoteID.current = setTimeout(() => {
      setFlipOutAnimated(true);
    }, QUOTE_ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutQuoteID.current);
      clearInterval(intervalTempQuote.current);
    }
  }, [quote]);

  return (
    <>
      <CommunityBlockTitle><b>community</b></CommunityBlockTitle>
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
