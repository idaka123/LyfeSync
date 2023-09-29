import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";

const overlayVariant = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: { opacity: 1, visibility: "visible" },
  };

const Overlay = (p) => {
    const { trigger, onClick } = p

    const [overlay, setOverlay] = useState(false)

    useEffect(() => {
      setOverlay(trigger)
    }, [trigger]);
    
    const hdleClickOverlay = () => {

      onClick()
    }

    return <Container
                initial="hidden"
                animate={ overlay ? "visible" : "hidden"}
                variants={overlayVariant}
                transition={{ duration: .2 }}
                data-name="global-overlay"
                onClick={() => hdleClickOverlay()}></Container>
}

export default Overlay;

const Container = styled(motion.div) `
    position: fixed;
    background-color: #44ffff;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 1;
`