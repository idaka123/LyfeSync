
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import Overlay from "./Component/Overlay";
import { useContext, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";
import OverlayContext, { OverlayProvider } from "../Context/overlay.context";
import ModalContext, { ModalProvider } from "../Context/Modal.context";


const DefaultLayout = ( p ) => {
    const { children } = p

    return (
    <OverlayProvider>
        {/* <ModalProvider> */}
            <DefaultLayoutComponent>{children}</DefaultLayoutComponent>
        {/* </ModalProvider> */}
    </OverlayProvider>
    )
}

const DefaultLayoutComponent = (p) => {
    const { children } = p

    const { device } = useContext(DeviceContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenOvelay, setIsOpenOverlay] = useState(false)


    const openSideBar = () => {
        setIsOpenMenu(true)
        setIsOpenOverlay(true)
    }

    const toggleSideBar = (boolen) => {
        return () => {
            setIsOpenMenu(boolen)
            // boolen 
            //     ? openOverlay()
            //     : closeOverlay()
        }
    }

    return (
        <DftLaySty device={device} > 
            {device === "mobile" && <Header toggleSideBar={openSideBar}/>}
            <div className="body">
                <Sidebar
                        isopen={isOpenMenu} toggle={toggleSideBar}
                        isOpenOvelay={isOpenOvelay} setIsOpenOverlay={setIsOpenOverlay}/>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </DftLaySty>
    )
}
 
export default DefaultLayout;

const DftLaySty = styled.div`
   
    background-color: #f7f7f7;
    height: 100vh;
    width: 100vw;
    position: relative;

    .body {
        display: flex;
        flex-direction: row;

        .page-content {
            overflow-y: scroll;
            margin-left: ${({device}) => device === "desktop" ? "var(--sidebar-wt)" : "0px" };
            width: 100%;

            @media (max-width: 768px) {
                height: calc(100vh - var(--header-ht));
            }

            @media (min-width: 769px) {
                height: 100vh;
            }
        }
    }

`

