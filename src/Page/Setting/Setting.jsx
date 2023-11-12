import styled from "styled-components";
import { Icon } from "../../assets/icon"
import { useContext, useState } from "react";
import Appearance from "./Appearance";
import DeviceContext from "../../Context/Device.context";

const Setting = () => {

    
    const [selectItem, setSelectItem] = useState("appearance")
    const { device } = useContext(DeviceContext)
    const dataItem = [
        {
            icon: <Icon.background />,
            name: "appearance",
            title: "Hiển thị"
        },
        {
            icon: <Icon.background />,
            name: "test",
            title: "test"
        },
    ]


    const handleChooseItem = (id) => {
        setSelectItem(id)
    }

    return (
        <Container>
            <BoxContent>
                <MenuList>
                {dataItem && dataItem.map((item, idx) => {
                    return <MenuItem 
                                key={idx}
                                className={`pointer-cursor ${selectItem === item.name && "active"}`}
                                onClick={() => handleChooseItem(item.name)}>
                                {item.icon}
                               {device === "desktop" && <span>{item.title}</span>}
                            </MenuItem>
                })}
                </MenuList>

                <ContentWrapper>
                {selectItem === "appearance" 
                    ? <Appearance /> :
                    null
                }
                </ContentWrapper>
            </BoxContent>
        </Container>
    );
}
 
export default Setting;

const Container = styled.div `
    display: flex;

`
const BoxContent = styled.div `
    
    @media screen and (min-width: 769px) {
        margin: 15px;
        border: 1px solid #cfcfcf;
        border-radius: 10px;
    }
    @media screen and (max-width: 768px) {
    }
    height: 90vh;
    width: 100%;
    background-color: #fdfdfd;
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    
    overflow: hidden;
`

const MenuList = styled.ul `
    list-style: none;
    @media screen and (min-width: 769px) {
        width: 20%;
    }
    @media screen and (max-width: 768px) {
        width: 13%;
    }
    
    height: 100%;
    margin: 10px;
`

const ContentWrapper = styled.div `
    
    @media screen and (min-width: 769px) {
        width: 80%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    border-left: 1px solid #cfcfcf;
    background-color: #ffffff;
    height: auto;
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    padding: 13px;
    border-radius: 10px;
    
    svg {
        font-size: 3rem;
    }

    span {
        margin-left: 20px;
        font-size: 1.55rem;
        font-weight: 600;
    }

    &.active {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: var(--main-gradient);

        svg {
            color: #ffffff;
        }
        span { 
            color: #ffffff;
            font-weight: 900;
        }
    }
`