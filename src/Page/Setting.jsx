import styled from "styled-components";
import { Icon } from "../Assets/icon";

const Setting = () => {
    return ( 
        <Container> 
            <Task>
                <h2 className="select-none title">tasks <Icon.plus/> </h2>
            </Task>

            <Routine>
                <h2 className="select-none title">routines</h2>
            </Routine>

            <Goal>
                <h2 className="select-none title">goals</h2>
            </Goal> 
        </Container>
     );
}
 
export default Setting;

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

        svg {
            position: relative;
            font-size: 21px;
            cursor: pointer;
        }
    }
`

const Task = styled.section`
    width: 33.3333%;
`

const Routine = styled.section`
    width: 33.3333%;
`
const Goal = styled.section`
    width: 33.3333%;
`


