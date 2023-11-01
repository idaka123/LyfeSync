import { useState } from "react";
import KnowLedgeBlock from "./Components/KnowledgeBlock";
import PodcastShare from "./Components/PodcastShare";
import PodcastInfo from "./Components/PodcastInfo";
import { KnowLedgeStyled } from "./Knowledge.desktop";
const Knowledge = () => {
  const [isPlayingId, setIsPlayingId] = useState({ isPlaying: false, id: null });
  const [isFavourite, setIsFavourite] = useState({ id: -1, isFavourite: false })
  const [isPodcastShareDisplay, setIsPodcastShareDisplay] = useState(false);
  const [podcastShare, setPodcastShare] = useState({
    title: null,
    author: null,
    length: null,
    image: null,
    url: null,
  })
  const [isPodcastInfoDisplay, setIsPodcastInfoDisplay] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState({
    id: null,
    title: null,
    author: null,
    length: null,
    description: null,
    thumbnail: null,
    date: null,
  })
  return (
    <KnowLedgeStyled>
      {isPodcastShareDisplay &&
        < PodcastShare
          setIsPodcastShareDisplay={setIsPodcastShareDisplay}
          podcastShare={podcastShare}
        />
      }
      {isPodcastInfoDisplay &&
        <PodcastInfo
          isPlayingId={isPlayingId}
          setIsPlayingId={setIsPlayingId}
          isFavourite={isFavourite}
          setIsFavourite={setIsFavourite}
          setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
          podcastInfo={podcastInfo}
        />
      }
      <KnowLedgeBlock
        isPlayingId={isPlayingId}
        setIsPlayingId={setIsPlayingId}
        isFavourite={isFavourite}
        setIsFavourite={setIsFavourite}
        setIsPodcastShareDisplay={setIsPodcastShareDisplay}
        setPodcastShare={setPodcastShare}
        setIsPodcastInfoDisplay={setIsPodcastInfoDisplay}
        setPodcastInfo={setPodcastInfo}
      />
    </KnowLedgeStyled>
  );
}

export default Knowledge;

