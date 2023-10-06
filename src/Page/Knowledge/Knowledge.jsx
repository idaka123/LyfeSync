
import { Img } from "../../assets/svg/index";
import { quotesData } from "./Knowledge.data"
import { tipsData } from "./Knowledge.data";
import { useEffect, useRef, useState } from "react";
import 'animate.css';
import {
  KnowLedgeBlock, QuoteBlock, CommunityBlockTitle,
  CommunityBlockContent, TipTitle, TipBlock,
  TipParagraph, TipImage, WisdomBlockTitle,
  WisdomBlockContent, VideoBlock, VideoBlockTitle
} from "./Knowledge.desktop";

const Knowledge = () => {
  const timeoutQuoteID = useRef(null);
  const intervalTempQuote = useRef(null);
  const maxQuotes = 19;
  const minQuotes = 0;
  const [quote, setQuote] = useState(quotesData[Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes)]);
  const [isFlipOutAnimated, setFlipOutAnimated] = useState(false);
  const [isFlipInAnimated, setFlipInAnimated] = useState(false);
  useEffect(() => {
    const updateQuote = () => {
      let tempQuote = Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes);
      while (quote.content === quotesData[tempQuote].content) {
        tempQuote = Math.floor(Math.random() * (maxQuotes - minQuotes + 1) + minQuotes)
      }
      setQuote(quotesData[tempQuote]);
    }
    intervalTempQuote.current = setInterval(updateQuote, 10000);
    return () => {
      clearInterval(intervalTempQuote.current);
    }
  }, [])
  useEffect(() => {
    setFlipInAnimated(false);
    setFlipOutAnimated(false);
    setFlipInAnimated(true);
    timeoutQuoteID.current = setTimeout(() => {
      setFlipOutAnimated(true);
    }, 8500);
    return () => {
      clearTimeout(timeoutQuoteID.current);
    }
  }, [quote]);

  const maxTips = 6;
  const minTips = 0;
  const intervalTipID = useRef(null);
  const timeoutTipID = useRef(null);
  const timeoutUpdateTipID = useRef(null);
  const [tip, setTip] = useState(tipsData[Math.floor(Math.random() * (maxTips - minTips + 1) + minTips)]);
  const [tipClick, setTipClick] = useState(false);
  const updateTip = () => {
    let tempTip = Math.floor(Math.random() * (maxTips - minTips + 1) + minTips);
    while (tip.content === tipsData[tempTip].content) {
      tempTip = Math.floor(Math.random() * (maxTips - minTips + 1) + minTips);
    }
    setTip(tipsData[tempTip]);
  };
  const handleTipBlockClick = () => {
    setTipClick(!tipClick);
    clearTimeout(timeoutUpdateTipID.current);
    timeoutUpdateTipID.current = setTimeout((() => {
      updateTip();
    }), 550)
  }
  const [isBounceInAnimated, setBounceInAnimated] = useState(false);
  const [isBounceOutAnimated, setBounceOutAnimated] = useState(false);
  useEffect(() => {
    setBounceInAnimated(false);
    setBounceOutAnimated(false)
    setBounceOutAnimated(true);
    timeoutTipID.current = setTimeout(() => {
      setBounceOutAnimated(false)
      setBounceInAnimated(true)
    }, 1000);
    return () => {
      clearTimeout(timeoutTipID.current);
    };
  }, [tipClick]);


  return (
    <>
      <KnowLedgeBlock>
        <QuoteBlock>

          {/* Wisdom */}

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

          {/* Tip */}

          <TipTitle>
            <b>tip</b>
          </TipTitle>
          <TipBlock className={`
              ${isBounceInAnimated ? "animate__animated animate__bounceIn" : ""}
              ${isBounceOutAnimated ? "animate__animated animate__bounceOut" : ""}
          `}
            onClick={handleTipBlockClick}>
            <TipParagraph >
              <b className="tipTitle animate__slower">{tip.title}</b>
              <p className="tipParagraph animate__slower">
                {tip.content}
              </p>
            </TipParagraph>
            <TipImage className="tipImage animate__slower">
              <img src={tip.img} alt="" />
            </TipImage>
          </TipBlock>

          {/* Community */}

          <CommunityBlockTitle> community </CommunityBlockTitle>
          <CommunityBlockContent className={`
            ${isFlipOutAnimated ? "animate__animated animate__flipOutX animate__slow " : ""} 
            ${isFlipInAnimated ? "animate__animated animate__flipInX animate__slow " : ""}
            `}>
            <blockquote>
              {quote?.content}
              <br></br>
              <cite>
                —{quote?.author}
              </cite>
            </blockquote>
          </CommunityBlockContent>
        </QuoteBlock>
        <VideoBlock>
          <VideoBlockTitle>growth academy</VideoBlockTitle>
        </VideoBlock>
      </KnowLedgeBlock >
    </>
  );
}

export default Knowledge;

