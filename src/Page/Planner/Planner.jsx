import { useContext, useState } from "react";
import styled from "styled-components";
import { plannerData } from "./Planner.data";
import DeviceContext from "../../Context/Device.context";
import PlannerMobile from "./Planner.mobile";
import TaskSection from "./TaskSection";
import { AnimatePresence, motion } from "framer-motion";
import Button from "/src/Component/Button.jsx";
// import { Icon } from "../Assets/icon";


const Planner = () => {

    const { device } = useContext(DeviceContext)

    const section = Object.keys(plannerData)

    const hldClickCreateTask = () => {
        console.log("Create Task")
    }

    
    if(device === "mobile") {
        return ( 
            <Container>
                <PlannerMobile>
                    
                </PlannerMobile> 
    
            </Container>
         );
    }
    else if(device === "desktop") {
        
        return (
        <AnimatePresence mode="wait">
            <Container style={{paddingTop: "40px"}}
            initial={{ opacity: 0,  scale: .75, transition: { duration: .5 } }}
            animate={{ opacity: 1, scale: 1, transition: { duration: .25 } }}
            > 
            {section && section.map((sec, idx) => {
                return (
                <TaskSection key={idx} className="col3" data={plannerData[sec]}>
                    <ImgMotivation>
                        <img src={plannerData[sec].empty?.img} alt="" />
                    </ImgMotivation> 

                    <TextMotivation>
                        <p>{plannerData[sec].empty?.text1}</p>
                        <p>{plannerData[sec].empty?.text2}</p>
                        <p>{plannerData[sec].empty?.text3}</p>
                    </TextMotivation>
                    
                    
                    <Button title={`Tạo ${sec}`} onClick={hldClickCreateTask} 
                            className="text-center"
                            style={{marginTop: "16px"}}/>

                </TaskSection>     
                )
            })}
                
            </Container>
        </AnimatePresence>
         );
    }
}
 

export default Planner;

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-bottom: 0px;
    padding-left: 25px;
    overflow-y: scroll;
    display: flex;

    section h2.title {
        font-size: 36px;
        font-weight: 900;
        font-family: fantasy;
        display: flex;
        align-items: center;
        .icon-wrap {
            display: block;
            line-height: 45px;
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

const ImgMotivation = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        max-width: 250px;
        width: 100%;
    }
`

const TextMotivation = styled.div`

    p:nth-child(1) {
        text-align: center;
        font-weight: 600;
    }
    p:nth-child(2) {
        text-align: center;
        margin-top: .5rem;
        font-size: 1.15rem;

    }
    p:nth-child(3) {
        text-align: center;
        margin-top: .5rem;
        font-style: italic;
        font-size: 1rem;
    }
`