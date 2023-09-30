import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { CirclePicker } from "react-color";

import DeviceContext from "../../Context/Device.context";
import PlannerMobile from "./Planner.mobile";
import PlannerDesktop from "./Planner.desktop";
import Input from "../../Component/Input";
import OverlayContext from "../../Context/overlay.context";
import ModalContext from "../../Context/Modal.conetxt";
import Overlay from "../../Layout/Component/Overlay";
import Modal from "../../Component/Modal";
import { Img } from "../../Assets/svg";


// import { Icon } from "../Assets/icon";


const Planner = () => {

    const [modalData, setModalData] = useState("")

    const { device } = useContext(DeviceContext)
    const { openOverlay } = useContext(OverlayContext)
    const { openModal, closeModal }  = useContext(ModalContext)

    
    const openModalData = (name) => {
        setModalData(name)
        openModal(name)
        openOverlay()
    }
 

    // useEffect(() => {
    //     onClickOverlay(closeModal)
    // }, []);
    
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
                <Overlay onClick={closeModal}/>
                <Modal >
                    <Content>
                        <div className="title">
                            <Label className="text-dark">
                                <Img.pen />
                                <span>Tiêu đề</span> 
                            </Label>
                            
                            <div className="title-input">
                                <Input width="80%"/>
                            </div>
                        </div>

                        <div className="tag">
                            <Label className="text-dark">
                                <Img.tag />
                                <span>Màu tag</span> 
                            </Label>

                            <div className="color-input">
                                <CirclePicker 
                                    colors={["#f44336", "#e91e63", "#673ab7", "#03a9f4", "#4caf50", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#FFFFFF"]}
                                    width="62%"
                                    circleSize={20}
                                    circleSpacing={10}
                                    onSwatchHover={(color, event) => console.log(color, event)}
                                    />
                            </div>
                        </div>

                    </Content> 
                </Modal>
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

const Content = styled.div`

    height: calc(100vh - var(--modal-header));

    .title {
        margin-top: 18px;

        .title-input {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .tag {
        margin-top: 2rem;

        .color-input {
            margin-top: 10px;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

`
const Label = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;

    svg {
        width: 15px;
    }

    span {
        margin-left: 6px;
        font-weight: 700;
    }
`