import Wisdom from "./Components/Wisdom";
import Tip from "./Components/Tip";
import Community from "./Components/Community";
import {
  KnowLedgeBlock, QuoteBlock, VideoBlock, VideoBlockTitle
} from "./Knowledge.desktop";

const Knowledge = () => {
  return (
    <>
      <KnowLedgeBlock>
        <QuoteBlock>

          {/* Wisdom */}
            <Wisdom></Wisdom>
          {/* Tip */}
          <Tip></Tip>
          {/* Community */}
          <Community></Community>
        
        </QuoteBlock>
        <VideoBlock>
          <VideoBlockTitle>growth academy</VideoBlockTitle>
        </VideoBlock>
      </KnowLedgeBlock >
    </>
  );
}

export default Knowledge;

