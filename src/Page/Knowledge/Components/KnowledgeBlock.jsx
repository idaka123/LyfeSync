import React from "react";
import Wisdom from "./Wisdom";
import Tip from "./Tip";
import Community from "./Community";
import PodcastList from "./PodcasList";
import {
  QuoteBlock, PodcastBlock, PodcastBlockTitle, KnowLedgeBlockStyled
} from "../Knowledge.desktop";

const KnowLedgeBlock = ({
  setPodcastShare,
  setIsPodcastShareDisplay,
  setPodcastInfo,
  setIsPodcastInfoDisplay,
  isPlayingId,
  setIsPlayingId,
  isFavourite,
  setIsFavourite,
}) => {
  return (
    <KnowLedgeBlockStyled>
      <QuoteBlock>
        <Community />
        <Wisdom />
        <Tip />
      </QuoteBlock>
      <PodcastBlock>
        <PodcastBlockTitle><b>podcast series</b></PodcastBlockTitle>
        <PodcastList
          isPlayingId={isPlayingId}
          setIsPlayingId={setIsPlayingId}
          isFavourite = {isFavourite} 
          setIsFavourite = {setIsFavourite}
          setIsPodcastShareDisplay={setIsPodcastShareDisplay}
          setPodcastShare={setPodcastShare}
          setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
          setPodcastInfo={setPodcastInfo}
        />
      </PodcastBlock>
    </KnowLedgeBlockStyled>
  );
}

export default KnowLedgeBlock;
