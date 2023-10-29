import { useState } from "react";
import KnowLedgeBlock from "./Components/KnowledgeBlock";
import PodcastShare from "./Components/PodcastShare";
import { KnowLedgeStyled } from "./Knowledge.desktop";
const Knowledge = () => {
  const [isPodcastShareDisplay, setIsPodcastShareDisplay] = useState(false);
  const [shareTitle, setShareTitle] = useState(null);
  const [shareAuthor, setShareAuthor] = useState(null);
  const [shareLength, setShareLength] = useState(null);
  const [shareImage, setShareImage] = useState(null);
  const [shareUrl, setShareUrl] = useState(null)
  return (
    <KnowLedgeStyled>
      {isPodcastShareDisplay &&
        < PodcastShare
          setIsPodcastShareDisplay={setIsPodcastShareDisplay}
          shareTitle={shareTitle}
          shareAuthor={shareAuthor}
          shareLength={shareLength}
          shareImage={shareImage}
          shareUrl = {shareUrl}
        />
      }
      <KnowLedgeBlock
        setIsPodcastShareDisplay={setIsPodcastShareDisplay}
        setShareTitle={setShareTitle}
        setShareAuthor={setShareAuthor}
        setShareLength={setShareLength}
        setShareImage={setShareImage}
        setShareUrl = {setShareUrl}
      />
    </KnowLedgeStyled>
  );
}

export default Knowledge;

