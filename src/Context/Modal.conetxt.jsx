import React, { createContext, useContext } from "react";
import OverlayContext from "./overlay.context";

const ModalContext = createContext()

export const ModalProvider = (p) => {
    const { children } = p

    const { closeOverlay, openOverlay } = useContext(OverlayContext)

    const [modal, setModal] = React.useState({
        isOpen: false,
        content: null
      });
    
      
      const openModal = content => {
        openOverlay()
        setModal({
          isOpen: true,
          content
        });
      };
    
      const closeModal = () => {
        closeOverlay()
        setModal({
          isOpen: false,
          content: null
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