import { tipsData } from "../Knowledge.data";
import { TipBlock, TipImage, TipParagraph, TipTitle } from "../Knowledge.desktop";
import random from "../utils/random";
import updateContent from "../utils/updateContent";
import { ANIMATIONS } from "../utils/animationConstants";
import { useRef, useState, useEffect } from "react";
const Tip = () => {
  const { BOUNCE_IN, BOUNCE_OUT } = ANIMATIONS;
  const maxTips = 6;
  const minTips = 0;
  const timeoutTipID = useRef(null);
  const timeoutUpdateTipID = useRef(null);
  const [tip, setTip] = useState(tipsData[random(maxTips, minTips)]);
  const [tipClick, setTipClick] = useState(false);
console.log(tip);
  const handleTipBlockClick = () => {
    setTipClick(!tipClick);
    clearTimeout(timeoutUpdateTipID.current);
    timeoutUpdateTipID.current = setTimeout((() => {
      setTip(updateContent(tip, tipsData, maxTips, minTips));
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
  <>
    <TipTitle>
      <b>tip</b>
    </TipTitle>
    <TipBlock className={`
              ${isBounceInAnimated ? BOUNCE_IN : ""}
              ${isBounceOutAnimated ? BOUNCE_OUT : ""}
          `}
      onClick={handleTipBlockClick}>
      <TipParagraph >
        <b>{tip.title}</b>
        <p>
          {tip.content}
        </p>
      </TipParagraph>
      <TipImage>
        <img src={tip.img} alt="" />
      </TipImage>
    </TipBlock>
  </>
}

export default Tip;