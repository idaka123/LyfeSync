import React from "react";
import Wisdom from "./Wisdom";
import Tip from "./Tip";
import Community from "./Community";
import PodcastList from "./PodcasList";
import {
  QuoteBlock, PodcastBlock, PodcastBlockTitle, KnowLedgeBlockStyled
} from "../Knowledge.desktop";
import { ANIMATIONS } from "../utils/animationConstants";

const KnowLedgeBlock = ({
}) => {
  const { FADE_IN } = ANIMATIONS;
  return (
    <KnowLedgeBlockStyled className={`${FADE_IN}`}>
      <QuoteBlock>
        <Community />
        <Wisdom />
        <Tip />
      </QuoteBlock>
      <PodcastBlock>
        <PodcastBlockTitle><b>podcast series</b></PodcastBlockTitle>
        <PodcastList />
      </PodcastBlock>
    </KnowLedgeBlockStyled>
  );
}

export default KnowLedgeBlock;
