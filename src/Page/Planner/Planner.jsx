import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import DeviceContext from "../../Context/Device.context";
import PlannerMobile from "./Planner.mobile";
import PlannerDesktop from "./Planner.desktop";
import ModalContext, { ModalProvider } from "../../Context/Modal.context";
import TaskModal from "./modal/Modal";
import { TaskProvider } from "../../Context/Task.context";
import { RoutineProvider } from "../../Context/Routine.context";
import { GoalProvider } from "../../Context/Goal.context";
import myCursor from "../../assets/HVCyan_link.cur";

const Planner = () => {

    // const [modalData, setModalData] = useState("")
    const [tab, setTab] = useState("task")
    

    const { device } = useContext(DeviceContext)


    const selectTab = (e) => {
        const name = e.target.getAttribute("name")
        setTab(name)
    }
 
    // modal
    console.log("rerender dfas dsad sad", tab)
    
    
    const Mobile = () => {
        return (
            <Container >
                <PlannerMobile selectTab={selectTab} tab={tab} />
            </Container>
    )}

    const Desktop = () => {
        return (
            <Container style={{paddingTop: "40px", paddingBottom: "150px"}}> 
                <PlannerDesktop/>
            </Container>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <TaskProvider>
                <RoutineProvider>
                    <GoalProvider>
                        <ModalProvider>
                            <motion.div initial={{ opacity: 0,  scale: .75, transition: { duration: .5 } }}
                                        animate={{ opacity: 1, scale: 1, transition: { duration: .25 } }}>
                                <TaskModal />
                                {device === "desktop" ? <Desktop /> : <Mobile /> }
                            </motion.div>
                        </ModalProvider>
                    </GoalProvider>
                </RoutineProvider>
            </TaskProvider> 
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

    section h2 {
        white-space: nowrap;

    }

    section h2.title {
        font-size: 30px;
        font-weight: 900;
        /* font-family: fantasy; */
        display: flex;
        align-items: center;
        .icon-wrap {
            display: block;
            line-height: 30px;
            font-size: 43px;
            position: relative;
            cursor: url(${myCursor}), auto;
            transition: all 0.3s ease-in-out;

            &:hover {
                    color: #FDBD3E;
                }
        }
    }
`
