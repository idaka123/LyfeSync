import React from "react";
import { WisdomBlockTitle, WisdomBlockContent } from "../Knowledge.desktop";
import { wisdomsData } from "../Knowledge.data";
import random from "../utils/random";

const Wisdom = () => {
  const maxWisdom = 13;
  const minWisdom = 0;
  const wisdom = wisdomsData[random(maxWisdom, minWisdom)];

  return (
    <>
      <WisdomBlockTitle>
        <b>wisdom</b>
      </WisdomBlockTitle>
      <WisdomBlockContent>
        <blockquote>
          {wisdom.content}
          <br></br>
          <cite>
            — {wisdom.author}
          </cite>
        </blockquote>
      </WisdomBlockContent>
    </>
  );
}

export default Wisdom;
