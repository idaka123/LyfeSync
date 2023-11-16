import React, { createContext, useContext } from "react";
import OverlayContext from "./Overlay.context";
// import OverlayContext from "./Overlay.context";

const ModalContext = createContext()

export const ModalProvider = (p) => {
    const { children } = p

    const { closeOverlay, openOverlay } = useContext(OverlayContext)

    const [modal, setModal] = React.useState({
        isOpen: false,
        title: null,
        content: null,
        type: null
      });
      const [isDataLoaded, setIsDataLoaded] = React.useState(false);
      
      const openModal = (title = null, content = null, type = null) => {
        openOverlay()
        setModal({
          isOpen: true,
          title,
          content,
          type
        });
        window.dispatchEvent(new CustomEvent('modalOpening'));
      };
    
      const closeModal = () => {
        console.log("close modal")
        closeOverlay()
        setModal({
          isOpen: false,
          content: null,
          title: null,
          type: null
        });
        setIsDataLoaded(false);
        window.dispatchEvent(new CustomEvent('modalClosing'));
      };

      const valueContext = {
        modal, openModal, closeModal, isDataLoaded, setIsDataLoaded
      }

    return (
        <ModalContext.Provider value={valueContext}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext