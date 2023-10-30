import React from "react";
import Wisdom from "./Wisdom";
import Tip from "./Tip";
import Community from "./Community";
import PodcastList from "./PodcasList";
import {
  QuoteBlock, PodcastBlock, PodcastBlockTitle, KnowLedgeBlockStyled, PodcastShare, PodcastShareStyled
} from "../Knowledge.desktop";

const KnowLedgeBlock = ({
  setIsPodcastShareDisplay, setShareTitle,
  setShareAuthor, setShareLength, setShareImage, setShareUrl,
  setInfoTitle,
  setInfoAuthor,
  setInfoLength,
  setInfoDescription,
  setInfoThumbnail, 
  setIsPodcastInfoDisplay, 
  setInfoDate
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
          setIsPodcastShareDisplay={setIsPodcastShareDisplay}
          setShareTitle={setShareTitle}
          setShareAuthor={setShareAuthor}
          setShareLength={setShareLength}
          setShareImage={setShareImage}
          setShareUrl={setShareUrl}
          setInfoTitle={setInfoTitle}
          setInfoAuthor={setInfoAuthor}
          setInfoLength={setInfoLength}
          setInfoDescription={setInfoDescription}
          setInfoThumbnail = {setInfoThumbnail}
          setIsPodcastInfoDisplay = {setIsPodcastInfoDisplay}
          setInfoDate = {setInfoDate}
        />
      </PodcastBlock>
    </KnowLedgeBlockStyled>
  );
}

export default KnowLedgeBlock;
