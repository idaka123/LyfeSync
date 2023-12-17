import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import myCursor from '../assets/cursor/Labrador_Retriever.cur';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  

const SwitchButton = (p) => {
    const { defaultValue, handleCheckStatus } = p

    const [isOn, setIsOn] = useState(defaultValue);

    
    const handleToogleSwitch = () => {
        setIsOn(!isOn);
        handleCheckStatus()
    }

    return ( 
    <Container >
        <div 
            className="switch" 
            data-isOn={isOn} 
            onClick={handleToogleSwitch}
            style={{cursor: `url(${myCursor}), auto`}}>
            <motion.div className="handle" layout transition={spring} />
        </div>
    </Container>
     );
}
 
export default SwitchButton;

const Container = styled.div`
    background: var(--main-gradient);
    border-radius: 50px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;

    .switch {
    width: 100%;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.6);
    /* rgba(255, 255, 255, 0.4) */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
    padding: 5px;
    }

    .switch[data-isOn="true"] {
    justify-content: flex-end;
    background: var(--main-gradient);

    }

    .handle {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 40px;
    }

`

