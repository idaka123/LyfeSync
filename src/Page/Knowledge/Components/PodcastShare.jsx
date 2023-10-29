import {
  PodcastShareStyled, PodcastShareBlock,
  PodcastShareBlockTitle, PodcastShareBlockContent,
  PodcastShareBlockSocial, PodcastShareSendto, PodcastShareCopyButton
} from "../Knowledge.desktop";
import { Img } from "../../../assets/svg/index";
import { Icon } from "../../../assets/icon";
import { useEffect, useState } from "react";
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
  shareTitle,
  shareAuthor,
  shareLength,
  shareImage,
  shareUrl
}) => {
  const [isCopy, setIsCopy] = useState("COPY");
  const platformUrls = {
    facebook: `https://www.facebook.com/dialog/share?app_id=87741124305&href=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(shareTitle)}&via=YouTube&related=YouTube,YouTubeTrends,YTCreators`,
    gmail: `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&su=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
    pinterest: `https://www.pinterest.com/pin-builder/?description=${shareTitle}&is_video=true&media=${shareImage}&method=button&url=${encodeURIComponent(shareUrl)}`,
    messenger: "https://www.messenger.com",
    zalo: "https://chat.zalo.me",
    telegram: "https://web.telegram.org/a/",
    discord: "https://discord.com/channels/@me",
  };

  const handlePlatformClick = (platform) => {
    const tempUrl = platformUrls[platform];

    if (!tempUrl) return;
    if (["messenger", "zalo", "telegram", "discord"].includes(platform)) {
      const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl).catch(() => console.log("Error"));
      };
      copyToClipboard();
    } else if (platform === "more") {
      navigator.share({
        title: shareTitle,
        url: shareUrl
      });
      return;
    }
    window.open(tempUrl, '_blank');
  };

  const handleInfoButtonClick = () => {
    window.open(shareUrl, '_blank');
  }

  const handleCopyButtonClick = () => {
    setIsCopy("COPIED!");
    navigator.clipboard.writeText(shareUrl)
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
            <img src={shareImage}></img>
          </div>
          <div className="blockContentInfoContainer">
            <div className="blockContentInfo">
              <div className="contentInfoTitle">
                <p className="running-text">{shareTitle}</p>
              </div>
              <p className="contentInfoAuthor">{shareAuthor}</p>
              <p className="contentInfoLength">{shareLength}</p>
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
          <p>{shareUrl}</p>
          <button onClick={handleCopyButtonClick}>{isCopy}</button>
        </PodcastShareCopyButton>
      </PodcastShareBlock>
    </PodcastShareStyled>
  );
}

export default PodcastShare;