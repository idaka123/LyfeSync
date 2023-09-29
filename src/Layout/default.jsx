
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import Overlay from "./Component/Overlay";
import { useContext, useEffect, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";


const DefaultLayout = ( p ) => {
    const { children } = p

    const { device } = useContext(DeviceContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const [isOverlay, setOverlay] = useState(false)

    const overlayFeture = {
        open() {
            setOverlay(true)
        },
        close() {
            setOverlay(false)
        }
    }

    const toggleSideBar = (boolen) => {
        return () => {
            setIsOpenMenu(boolen)
            boolen 
                ? overlayFeture.open()
                : overlayFeture.close()
        }
    }
    const hdleClickOverLay = () => {
        
        if (isOpenMenu) return toggleSideBar(false)
        
    }

    useEffect(() => {
        
    }, []);

    if(device === "mobile") {
        return (
        <DftLaySty device={device} > 
           <Header toggleSideBar={toggleSideBar}/>
            <div className="body">
                <Sidebar isopen={isOpenMenu} toggle={toggleSideBar}/>
                <Overlay trigger={isOverlay} onClick={hdleClickOverLay}/>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </DftLaySty>
        )
    }
    else if(device === "desktop") {
        return (
            <DftLaySty device={device} > 
                <div className="body">
                    <Sidebar isopen={isOpenMenu} toggle={toggleSideBar}/>
                    <Overlay trigger={isOverlay} onClick={hdleClickOverLay}/>
                    <div className="page-content">
                        {children}
                    </div>
                </div>
            </DftLaySty>
         );
    }
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

