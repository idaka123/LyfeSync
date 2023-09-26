import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { icon } from "../assets/icon";
import { motion } from "framer-motion";

const DefaultLayout = ( p ) => {
    const { children } = p
    return ( 
        <DftLaySty> 
            <Sidebar />
            <Overlay />
            {children}
        </DftLaySty>
     );
}
 
const Sidebar = (p) => {
    const { isOpen = false } = p

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const menuItems = [
        { label: 'Home', icon: icon.home },
        { label: 'Focus', icon: icon.tree},
        { label: 'Setting', icon: icon.setting},
    ];

    const SideStyle = {
        open: () => ({
            width: '335px',
            transition: {
                type: 'spring',
            }
        }),
        closed: {
            width: '69px',
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const [select, setSelect] = useState("Dashboard")

    const handleSelect = (link) => {
        setSelect(link)
    }

    return (
        <SideCon 
        initial={false}
        animate={isOpenMenu ? 'open' : 'closed'}
        variants={SideStyle}
        onMouseEnter={() => setIsOpenMenu(true)} onMouseLeave={() =>setIsOpenMenu(false)}>
            <div className="logo">

            </div>
            <SidebarMenu>
                {menuItems.map((menuItem, idx) => (
                    <SidebarMenuItem key={idx} onClick={() => handleSelect(menuItem.label)} className={select === menuItem.label && 'active'}>
                        <SidebarLink to={"/"} isOpen={isOpenMenu}>
                            {<div className="icon-wrapper">
                                <menuItem.icon className="icon"/>
                            </div>}
                            <motion.span 
                                initial={{ opacity: 0, width: 0 }}
                                animate={isOpenMenu ? { opacity: 1, marginLeft: "23px" } : { opacity: 0, width: 0 }}
                                transition={{ duration: .2 }}
                            >{menuItem.label}</motion.span>
                        </SidebarLink>
                    </SidebarMenuItem>))}
            </SidebarMenu>
        </SideCon> 
    )
}

const Overlay = () => {   
}

export default DefaultLayout;

const DftLaySty = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    height: 100vh;
    width: 100vw;
`


const SideCon = styled(motion.div)`
    height: 100vh;
    max-width: 375px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    /* width: (({isOpen}) => isOpen? "203px" : "69px"); */

    .logo{
        width: 100%;
        height: 50px;
        background-color: aliceblue;
    }
`

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0 10px;
  margin: 0;
  overflow: hidden;
`;

const SidebarMenuItem = styled.li`
    
  &.active{
    border-radius: 10px!important;
    z-index: 99;
    
    a {
      color: #ffffff!important;
      background: linear-gradient(118deg,rgba(30, 30, 30 ,1),rgba(30, 30, 30 ,.7));
    }
  }

`;

const SidebarLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    font-size: 12.4px;
    font-weight: 600;
    position: relative;
    justify-content: flex-start;

    .icon-wrapper {
        height: 15px;
        width: 22px;
        position: relative;
        .icon {
            position: absolute;
            left: 0;
            width: 100%;
            font-size: 15px;
        }
    }
`;