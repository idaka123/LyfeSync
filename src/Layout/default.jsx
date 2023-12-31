
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import { Fragment, useContext, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";
import { OverlayProvider } from "../Context/Overlay.context";
import AppearanceContext, { AppearanceProvider } from "../Context/Appearance.context";

const DefaultLayout = ( p ) => {
    const { children } = p

    return (
    <AppearanceProvider>
        <OverlayProvider>
            {/* <ModalProvider> */}
                <DefaultLayoutComponent>{children}</DefaultLayoutComponent>
            {/* </ModalProvider> */}
        </OverlayProvider>
    </AppearanceProvider>
    )
}

const DefaultLayoutComponent = (p) => {
    const { children } = p

    const { device } = useContext(DeviceContext)
    const { appearance } = useContext(AppearanceContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenOvelay, setIsOpenOverlay] = useState(false)

    const openSideBar = () => {
        setIsOpenMenu(true)
        setIsOpenOverlay(true)
    }
    const toggleSideBar = (boolen) => {
        return () => {
            setIsOpenMenu(boolen)
        }
    }

    return (
       <Fragment>
            <Background background={appearance.url}/>
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
       </Fragment>
    )
}
 
export default DefaultLayout;

const DftLaySty = styled.div`
   
    background-color: transparent;
    height: 100dvh;
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
                height: calc(100svh - var(--header-ht));
            }

            @media (min-width: 769px) {
                height: 100dvh;
            }
        }
    }

`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .5;
    background-image: ${({background}) => `url(${background})`};
    min-height: 100lvh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: .4;
`