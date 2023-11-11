
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import { Fragment, useContext, useEffect, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";
import { OverlayProvider } from "../Context/overlay.context";
import data from "../assets/photos/background.json"

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
    const [background, setBackground] = useState(data.background[0].url)

    const openSideBar = () => {
        setIsOpenMenu(true)
        setIsOpenOverlay(true)
    }

    useEffect(() => {
        console.log("background", background)
    }, [])

    const toggleSideBar = (boolen) => {
        return () => {
            setIsOpenMenu(boolen)
        }
    }

    return (
       <Fragment>
            <Background background={background}/>
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

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .5;
    background-image: ${({background}) => `url(${background})`};
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: .4;
`