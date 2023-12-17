// React related imports
import { useState, createContext } from 'react';
import { useContext } from 'react';

// Component imports
import KnowLedgeBlock from './Components/KnowledgeBlock';
import PodcastShare from './Components/PodcastShare';
import PodcastInfo from './Components/PodcastInfo';
import PodcastPlayList from './Components/PodcastPlaylist';
import PodcastShowPlaylist from './Components/PodcastShowPlaylist';
import DeviceProvider from '../../Context/Device.context'
// Style and data imports
import { KnowLedgeStyled } from './Knowledge.desktop';
import { podcastsData, playlistsData } from './Knowledge.data';
import random from './utils/random';
export const KnowledgeContext = createContext();

const Knowledge = () => {
  const { device } = useContext(DeviceProvider);
  const [isPlayingId, setIsPlayingId] = useState({ isPlaying: false, id: null });
  const [isFavourite, setIsFavourite] = useState({ id: -1, isFavourite: false })
  const [podcastsDataFilter, setPodcastsDataFilter] = useState(podcastsData);
  const [playListDataFilter, setPlayListDataFilter] = useState(playlistsData.map(playlist => playlist.name));
  const [podcastStatus, setPodcastStatus] = useState({});
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
    downloadUrl: null,
  })
  const [isPodcastPlaylistDisplay, setIsPodcastPlaylistDisplay] = useState(false);
  const [isPodcastShowPlaylistDisplay, setIsPodcastShowPlaylistDisplay] = useState(false);
  const [podcastPlaylistShowData, setPodcastPlaylistShowData] = useState(
    {
      name: null,
      image: null,
      title: null,
      number: null,
    }
  );
  const shareValue = {
    isPlayingId,
    setIsPlayingId,
    isFavourite,
    setIsFavourite,
    podcastsDataFilter,
    setPodcastsDataFilter,
    podcastStatus,
    setPodcastStatus,
    podcastShare,
    setPodcastShare,
    setIsPodcastShareDisplay,
    podcastInfo,
    setPodcastInfo,
    setIsPodcastInfoDisplay,
    playListDataFilter,
    setPlayListDataFilter,
    isPodcastPlaylistDisplay,
    setIsPodcastPlaylistDisplay,
    device,
    isPodcastShowPlaylistDisplay,
    setIsPodcastShowPlaylistDisplay,
    podcastPlaylistShowData,
    setPodcastPlaylistShowData,
  }
  return (
    <KnowledgeContext.Provider value={shareValue}>
      <KnowLedgeStyled>
        {isPodcastShareDisplay && < PodcastShare />}
        {isPodcastInfoDisplay && <PodcastInfo />}
        {isPodcastPlaylistDisplay && <PodcastPlayList />}
        {isPodcastShowPlaylistDisplay && !isPodcastPlaylistDisplay && <PodcastShowPlaylist />}
        {!isPodcastPlaylistDisplay && !isPodcastShowPlaylistDisplay && <KnowLedgeBlock />}
      </KnowLedgeStyled>
    </KnowledgeContext.Provider>
  );
}

export default Knowledge;

