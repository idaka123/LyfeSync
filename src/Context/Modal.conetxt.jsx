import React, { createContext, useContext } from "react";
import OverlayContext from "./overlay.context";

const ModalContext = createContext()

export const ModalProvider = (p) => {
    const { children } = p

    const { closeOverlay, openOverlay } = useContext(OverlayContext)

    const [modal, setModal] = React.useState({
        isOpen: false,
        title: null,
        content: null
      });
    
      
      const openModal = (title = null, content = null) => {
        openOverlay()
        setModal({
          isOpen: true,
          title,
          content
        });
      };
    
      const closeModal = () => {
        console.log("close modal")
        closeOverlay()
        setModal({
          isOpen: false,
          content: null,
          title: null
        });
      };

      const valueContext = {
        modal, openModal, closeModal
      }

    return (
        <ModalContext.Provider value={valueContext}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext