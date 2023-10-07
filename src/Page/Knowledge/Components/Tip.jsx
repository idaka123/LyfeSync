import React, { useRef, useState, useEffect } from "react";
import { tipsData } from "../Knowledge.data";
import { TipBlock, TipImage, TipParagraph, TipTitle } from "../Knowledge.desktop";
import random from "../utils/random";
import updateContent from "../utils/updateContent";
import { ANIMATIONS } from "../utils/animationConstants";
import 'animate.css';

const Tip = () => {
  const { BOUNCE_IN, BOUNCE_OUT } = ANIMATIONS;
  const maxTips = 6;
  const minTips = 0;
  const TIP_UPDATE_TIMEOUT = 1000;
  const TIP_ANIMATE_DURATION = 1000;
  const timeoutTipID = useRef(null);
  const timeoutUpdateTipID = useRef(null);

  const [tip, setTip] = useState(tipsData[random(maxTips, minTips)]);
  const [tipClick, setTipClick] = useState(false);

  const handleTipBlockClick = () => {
    setTipClick(!tipClick);
    clearTimeout(timeoutUpdateTipID.current);
    timeoutUpdateTipID.current = setTimeout(() => {
      setTip(updateContent(tip, tipsData, maxTips, minTips));
    }, TIP_UPDATE_TIMEOUT);
  }

  const [isBounceInAnimated, setBounceInAnimated] = useState(false);
  const [isBounceOutAnimated, setBounceOutAnimated] = useState(false);

  useEffect(() => {
    setBounceInAnimated(false);
    setBounceOutAnimated(false);
    setBounceOutAnimated(true);
    timeoutTipID.current = setTimeout(() => {
      setBounceOutAnimated(false)
      setBounceInAnimated(true)
    }, TIP_ANIMATE_DURATION);

    return () => {
      clearTimeout(timeoutTipID.current);
    };
  }, [tipClick]);

  return (
    <>
      <TipTitle>
        <b>tip</b>
      </TipTitle>
      <TipBlock
        className={`
          ${isBounceInAnimated ? BOUNCE_IN : ""}
          ${isBounceOutAnimated ? BOUNCE_OUT : ""}
          floatingImage
        `}
        onClick={handleTipBlockClick}
      >
        <TipParagraph>
          <b>{tip.title}</b>
          <p>{tip.content}</p>
        </TipParagraph>
        <TipImage>
          <img src={tip.img} alt="" />
        </TipImage>
      </TipBlock>
    </>
  );
}

export default Tip;
