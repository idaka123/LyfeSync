import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
// import Circle from '@uiw/react-color-circle';
import { CirclePicker } from 'react-color';

import DeviceContext from "../../Context/Device.context";
import PlannerMobile from "./Planner.mobile";
import PlannerDesktop from "./Planner.desktop";
import Input from "../../Component/Input";
import OverlayContext from "../../Context/overlay.context";
import ModalContext from "../../Context/Modal.conetxt";

import 'react-quill/dist/quill.snow.css';
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/flatpickr.css";
import TaskModal from "./modal/task";



// import { Icon } from "../Assets/icon";



const Planner = () => {

    const [modalData, setModalData] = useState("")

    const { device } = useContext(DeviceContext)
    const { openModal }  = useContext(ModalContext)

    const openModalData = (name) => {
        setModalData(name)
        openModal(name)
    }
 
    // modal
    
    
    
    const Mobile = () => {
        return (
            <Container>
                <PlannerMobile openModalData={openModalData}/>
            </Container>
    )}

    const Desktop = () => {
        return (
            <Container style={{paddingTop: "40px"}}> 
                <PlannerDesktop openModalData={openModalData}/>
            </Container>
         );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div initial={{ opacity: 0,  scale: .75, transition: { duration: .5 } }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: .25 } }}>
                <TaskModal />
                {device === "desktop" ? <Desktop /> : <Mobile /> }
            </motion.div> 
        </AnimatePresence>
    )
}


export default Planner;

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-bottom: 0px;
    padding-left: 25px;
    display: flex;

    section h2.title {
        font-size: 36px;
        font-weight: 900;
        font-family: fantasy;
        display: flex;
        align-items: center;
        .icon-wrap {
            display: block;
            line-height: 30px;
            font-size: 43px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                    color: #FDBD3E;
                }
        }
    }
`
