import Wisdom from "./Components/Wisdom";
import Tip from "./Components/Tip";
import Community from "./Components/Community";
import PodcastList from "./Components/PodcasList";
import {
  QuoteBlock, PodcastBlock, PodcastBlockTitle, KnowLedgeStyled
} from "./Knowledge.desktop";


const KnowLedgeBlock = () => {
  return (
    <KnowLedgeStyled>

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
    </KnowLedgeStyled>
  );
}

export default KnowLedgeBlock;