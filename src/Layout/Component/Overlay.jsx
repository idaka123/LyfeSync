import { motion } from "framer-motion";
import styled from "styled-components";

const overlayVariant = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: { opacity: 1, visibility: "visible" },
  };

const Overlay = (p) => {
    const { isOpenMenu, toggleSideBar } = p
    return <Container
                initial="hidden"
                animate={ isOpenMenu ? "visible" : "hidden"}
                variants={overlayVariant}
                transition={{ duration: .2 }}
                onClick={toggleSideBar(false)}></Container>
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