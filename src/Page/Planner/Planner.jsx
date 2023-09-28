import { useContext, useState } from "react";
import styled from "styled-components";
import { plannerData } from "./Planner.data";
import DeviceContext from "../../Context/Device.context";
import PlannerMobile from "./Planner.mobile";
import TaskSection from "./TaskSection";
// import { Icon } from "../Assets/icon";

const Planner = () => {

    const { device } = useContext(DeviceContext)
    
    
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
            <Container style={{paddingTop: "40px"}}> 
                
                <TaskSection className="col3" data={plannerData.task}/> 
                <TaskSection className="col3" data={plannerData.routine}/> 
                <TaskSection className="col3" data={plannerData.goal}/> 
    
            </Container>
         );
    }
}
 

export default Planner;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-right: 25px;
    padding-bottom: 0px;
    padding-left: 25px;
    overflow-y: scroll;
    display: flex;

    section h2.title {
        font-size: 50px;
        font-weight: 900;
        font-family: fantasy;
        display: flex;
        align-items: center;
        .icon-wrap {
            display: block;
            line-height: 45px;
            font-size: 43px;
            position: relative;
            top: -10px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                    color: #FDBD3E;
                }
        }
    }
`
