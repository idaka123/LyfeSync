import { WisdomBlockTitle, WisdomBlockContent } from "../Knowledge.desktop";
import { wisdomsData } from "../Knowledge.data";
import { useState } from "react";
import random from "../utils/random";
import updateContent from "../utils/updateContent";
import { useEffect } from "react";
const Wisdom = () => {
  const maxWisdom = 20;
  const minWisdom = 0;
  const CHECK_TIME = 60 * 1000;
  const [wisdom, setWisdom] = useState(wisdomsData[random(maxWisdom, minWisdom)]);
  const updateWisdom = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    if (hours === 0 && minutes === 0) {
      setWisdom(updateContent(wisdom, wisdomsData, maxWisdom, minWisdom));
    }
  }

  useEffect((() => {
    setInterval(() => {
      updateWisdom();
    }, CHECK_TIME)
  }), [])
  return (
    <>
      <WisdomBlockTitle> wisdom </WisdomBlockTitle>
      <WisdomBlockContent>
        <blockquote>
          „Anyone who has never made a mistake has never tried anything new.“
          <br></br>
          <cite>
            —  Albert Einstein
          </cite>
        </blockquote>
      </WisdomBlockContent>
    </>
  );
}

export default Wisdom;