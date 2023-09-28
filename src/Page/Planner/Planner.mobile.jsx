import styled from "styled-components";
import { useState } from "react";

import { motion } from "framer-motion";
import TaskSection from "./TaskSection";
import { plannerData } from "./Planner.data";

const PlannerMobile = () => {

    const [tab, setTab] = useState("task")

    const selectTab = (e) => {
        setTab(e.target.getAttribute("name"))
    }

    return ( 
        <Container>
            <Header>
                <TabList>
                {plannerData && Object.keys(plannerData).map((plan) => {
                    return (
                        <motion.li
                            key={plan}
                            name={plan}
                            className={`col3 ${tab === plan ? "active" : ""}`}
                            onClick={selectTab}>{plan}</motion.li>
                    )
                })}
                </TabList> 
            </Header>

            <TaskSection data={plannerData[tab]}/> 
        </Container>
     );
}
 
export default PlannerMobile;

const Container = styled.div`
    width: 100%;
    height: 100%;
    
`

const Header = styled.div`
    width: 100%;
    height: 30px;
`

const TabList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    height: 100%;

    li {
        text-align: center;
        height: 100%;
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 500;
        &.active {
            background-color: #F7F7F7;
            border-bottom: 2px solid #F7F7F7;
            user-select: none;

        }
    }
`