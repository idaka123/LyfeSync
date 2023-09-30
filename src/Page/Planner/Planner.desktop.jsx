import styled from "styled-components";

import { plannerData } from "./Planner.data";
import TaskSection from "./TaskSection";
import Button from "../../Component/Button";

const PlannerDesktop = (p) => {
    const { openModalData } = p
    const section = Object.keys(plannerData)

    const onClickCreateTaskbtn = e => {
        const name = e.target.getAttribute("name")
        openModalData(name)
    }

    return ( 
        <>
         {section && section.map((sec, idx) => {
                return (
                <TaskSection key={idx} className="col3" data={sec} openModalData={openModalData}>
                    <ImgMotivation>
                        <img src={plannerData[sec]?.empty?.img} alt="" />
                    </ImgMotivation> 

                    <TextMotivation>
                        <p>{plannerData[sec]?.empty?.text1}</p>
                        <p>{plannerData[sec]?.empty?.text2}</p>
                        <p>{plannerData[sec]?.empty?.text3}</p>
                    </TextMotivation>
                    
                    <Button title={`Tạo ${sec}`} onClick={onClickCreateTaskbtn} 
                            name={sec}
                            className="text-center"
                            style={{marginTop: "16px"}}/>
                </TaskSection>     
                )
            })}
                
        </>
     );
}
 
export default PlannerDesktop;

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