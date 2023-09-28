import styled from "styled-components";
// import { Icon } from "../Assets/icon";

const Planner = () => {
    return ( 
        <Container> 
            <Task>
                <h2 className="select-none title">tasks<span className="icon-wrap"> &nbsp;+ </span></h2>
                <DateZone>
                    
                </DateZone> 
            </Task>

            <Routine>
                <h2 className="select-none title">routines<span className="icon-wrap"> &nbsp;+ </span></h2>
            </Routine>

            <Goal>
                <h2 className="select-none title">goals <span className="icon-wrap"> &nbsp;+ </span></h2>
            </Goal> 
        </Container>
     );
}
 
export default Planner;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 25px 0px 25px; 
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

const Task = styled.section`
    width: 33.3333%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

const Routine = styled.section`
    width: 33.3333%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`
const Goal = styled.section`
    width: 33.3333%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`


const DateZone = styled.div`

`
