import { useState, useEffect } from "react";
import {
  PodcastShareStyled, PodcastShareBlock,
  PodcastShareBlockTitle, PodcastShareBlockContent,
  PodcastShareBlockSocial, PodcastShareSendto, PodcastShareCopyButton
} from "../Knowledge.desktop";
import { Img } from "../../../assets/svg/index";
import { Icon } from "../../../assets/icon";

const socialMediaPlatforms = [
  'facebook',
  'twitter',
  'gmail',
  'reddit',
  'pinterest',
  'messenger',
  'zalo',
  'telegram',
  'discord',
  'more'
];

const PodcastShare = ({
  setIsPodcastShareDisplay,
  podcastShare
}) => {
  const {
    title,
    author,
    length,
    image,
    url,
  } = podcastShare;
  const [isCopy, setIsCopy] = useState("COPY");
  const platformUrls = {
    facebook: `https://www.facebook.com/dialog/share?app_id=87741124305&href=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}&via=YouTube&related=YouTube,YouTubeTrends,YTCreators`,
    gmail: `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&su=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    pinterest: `https://www.pinterest.com/pin-builder/?description=${title}&is_video=true&media=${image}&method=button&url=${encodeURIComponent(url)}`,
    messenger: "https://www.messenger.com",
    zalo: "https://chat.zalo.me",
    telegram: "https://web.telegram.org/a/",
    discord: "https://discord.com/channels/@me",
  };

  const handlePlatformClick = (platform) => {
    if (platform === "more") {
      navigator.share({ title, url });
      return;
    }
    const tempUrl = platformUrls[platform];
    if (["messenger", "zalo", "telegram", "discord"].includes(platform)) {
      const copyToClipboard = () => {
        navigator.clipboard.writeText(url).catch(() => console.log("Error"));
      };
      copyToClipboard();
    }
    window.open(tempUrl, '_blank');
  };

  const handleInfoButtonClick = () => {
    window.open(url, '_blank');
  }

  const handleCopyButtonClick = () => {
    setIsCopy("COPIED!");
    navigator.clipboard.writeText(url)
      .then()
      .catch(() => console.log("Error"));
  }

  useEffect(() => {
    let copyTimeoutId;
    if (isCopy === "COPIED!") {
      copyTimeoutId = setTimeout(() => {
        setIsCopy("COPY")
      }, 2000)
    }
    return () => {
      clearTimeout(copyTimeoutId);
    }
  }, [isCopy])

  const handleClosePodcastShare = () => setIsPodcastShareDisplay(false);
  return (
    <PodcastShareStyled>
      <PodcastShareBlock>
        <PodcastShareBlockTitle>
          <p>Sharing episode</p>
          <div
            className="shareBlockIcon"
            onClick={() => handleClosePodcastShare()}
          >
            <Icon.x className="blockIconX"></Icon.x>
          </div>
        </PodcastShareBlockTitle>
        <PodcastShareBlockContent>
          <div className="blockContentImage">
            <img src={image}></img>
          </div>
          <div className="blockContentInfoContainer">
            <div className="blockContentInfo">
              <div className="contentInfoTitle">
                <p className="running-text">{title}</p>
              </div>
              <p className="contentInfoAuthor">{author}</p>
              <p className="contentInfoLength">{length}</p>
              <div
                className="contentInfoButton"
                onClick={handleInfoButtonClick}
              >
                <p>Play on YouTube</p>
              </div>
            </div>
          </div>
        </PodcastShareBlockContent>
        <PodcastShareSendto>
          Send to
        </PodcastShareSendto>
        <PodcastShareBlockSocial>
          {socialMediaPlatforms.map(platform => (
            platform !== "more" ? (
              <img
                onClick={() => handlePlatformClick(platform)}
                src={Img[platform]}
                className={`blockSocial blockSocial${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                alt={platform}
                key={platform}
              />
            ) : (
              <Icon.more
                onClick={() => handlePlatformClick(platform)}
                key={platform}
                className={`blockSocial blockSocial${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
              />
            )
          ))}
        </PodcastShareBlockSocial>

        <PodcastShareCopyButton>
          <p>{url}</p>
          <button onClick={handleCopyButtonClick}>{isCopy}</button>
        </PodcastShareCopyButton>
      </PodcastShareBlock>
    </PodcastShareStyled>
  );
}

export default PodcastShare;