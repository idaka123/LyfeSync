
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import Overlay from "./Component/Overlay";
import { useContext, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";


const DefaultLayout = ( p ) => {
    const { children } = p

    const { device } = useContext(DeviceContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleSideBar = (boolen) => {
        console.log("toggle side bar")
        return () => setIsOpenMenu(boolen)
    }

    return ( 
        <DftLaySty device={device} > 
           {device === "mobile" && <Header toggleSideBar={toggleSideBar}/>}
            <div className="body">
                <Sidebar isopen={isOpenMenu} toggle={toggleSideBar}/>
                <Overlay isOpenMenu={isOpenMenu} toggleSideBar={toggleSideBar}/>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </DftLaySty>
     );
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

