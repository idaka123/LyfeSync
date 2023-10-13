import Wisdom from "./Components/Wisdom";
import Tip from "./Components/Tip";
import Community from "./Components/Community";
import PodcastList from "./Components/PodcasList";
import {
  KnowLedgeBlock, QuoteBlock, PodcastBlock, PodcastBlockTitle
} from "./Knowledge.desktop";


const Knowledge = () => {
  return (
    <>
      <KnowLedgeBlock>
        <QuoteBlock>
          {/* Community */}
          <Community>
          </Community>
          {/* Wisdom */}
          <Wisdom></Wisdom>
          {/* Tip */}
          <Tip></Tip>

        </QuoteBlock>
        <PodcastBlock>
          <PodcastBlockTitle><b>broadcast series</b></PodcastBlockTitle>
          <PodcastList></PodcastList>
        </PodcastBlock>
      </KnowLedgeBlock >
    </>
  );
}

export default Knowledge;

