import { motion } from "framer-motion";
import styled from "styled-components";

const overlayVariant = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: { opacity: 1, visibility: "visible" },
  };

const Overlay = (p) => {
    const { onClick, zIndex,
      isOpen,
      setIsOpen
    } = p

    

    const hdleClick = () => {
      onClick()
      setIsOpen(false)
    }

    return <Container
                zIndex={zIndex}
                initial="hidden"
                animate={ isOpen ? "visible" : "hidden"}
                variants={overlayVariant}
                transition={{ duration: .2 }}
                data-name="global-overlay"
                onClick={hdleClick}></Container>
}

export default Overlay;

const Container = styled(motion.div) `
    cursor: url('../../assets/Machete.cur'), auto;
    position: fixed;
    background-color: #44ffff;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    z-index: ${({zIndex}) => zIndex ? zIndex : "1000"};
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 1;
`