import { useState } from "react";
import KnowLedgeBlock from "./Components/KnowledgeBlock";
import PodcastShare from "./Components/PodcastShare";
import PodcastInfo from "./Components/PodcastInfo";
import { KnowLedgeStyled } from "./Knowledge.desktop";
const Knowledge = () => {
  const [isPodcastShareDisplay, setIsPodcastShareDisplay] = useState(false);
  const [shareTitle, setShareTitle] = useState(null);
  const [shareAuthor, setShareAuthor] = useState(null);
  const [shareLength, setShareLength] = useState(null);
  const [shareImage, setShareImage] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);
  const [isPodcastInfoDisplay, setIsPodcastInfoDisplay] = useState(false);
  const [infoTitle, setInfoTitle] = useState(null);
  const [infoAuthor, setInfoAuthor] = useState(null);
  const [infoLength, setInfoLength] = useState(null);
  const [infoDescription, setInfoDescription] = useState(null);
  const [infoThumbnail, setInfoThumbnail] = useState(null);
  const [infoDate, setInfoDate] = useState(null);
  return (
    <KnowLedgeStyled>
      {isPodcastShareDisplay &&
        < PodcastShare
          setIsPodcastShareDisplay={setIsPodcastShareDisplay}
          shareTitle={shareTitle}
          shareAuthor={shareAuthor}
          shareLength={shareLength}
          shareImage={shareImage}
          shareUrl={shareUrl}
        />
      }
      {isPodcastInfoDisplay &&
        <PodcastInfo
          setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
          infoTitle={infoTitle}
          infoAuthor={infoAuthor}
          infoLength={infoLength}
          infoDescription={infoDescription}
          infoThumbnail={infoThumbnail}
          infoDate={infoDate}
        />
      }
      <KnowLedgeBlock
        setIsPodcastShareDisplay={setIsPodcastShareDisplay}
        setShareTitle={setShareTitle}
        setShareAuthor={setShareAuthor}
        setShareLength={setShareLength}
        setShareImage={setShareImage}
        setShareUrl={setShareUrl}
        setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
        setInfoTitle={setInfoTitle}
        setInfoAuthor={setInfoAuthor}
        setInfoLength={setInfoLength}
        setInfoDescription={setInfoDescription}
        setInfoThumbnail={setInfoThumbnail}
        setInfoDate={setInfoDate}
      />
    </KnowLedgeStyled>
  );
}

export default Knowledge;

