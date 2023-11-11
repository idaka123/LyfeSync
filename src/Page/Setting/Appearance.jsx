import styled from "styled-components";
import { Icon } from "../../assets/icon"
import data from "../../assets/photos/background.json"
import { useContext, useState } from "react";
import AppearanceContext from "../../Context/Appearance.context";
import DeviceContext from "../../Context/Device.context";

const Appearance = () => {
    
    const [dataAppearance] = useState(data.background)
    const { setAppearance } = useContext(AppearanceContext)
    const handleClickPhoto = (url) => {
        setAppearance(url)
    }

    return ( 
        <Container>
            <TitleWrapper>
                <h2>Thay đổi hình nền</h2>
            </TitleWrapper>

            <Content>

                <WithoutBackground className="pointer-cursor" onClick={() => handleClickPhoto("")}>
                    <div className="title-wrapper">
                        <Icon.bin />
                        <span>Không cần hình nền</span>
                    </div>
                </WithoutBackground>

                {dataAppearance && dataAppearance.map((data, idx) => {
                    return (
                        <Background onClick={() => handleClickPhoto(data.url)} key={idx} className="pointer-cursor">
                            <img src={data.url} alt=""/>
                        </Background>
                    )
                })

                }

            </Content>
        </Container>
     );
}
 
export default Appearance;

const Container = styled.div `
    width: 100%;
    height: 100%;
`

const TitleWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;


    h2 {
        @media screen and (min-width: 769px) {
            font-size: 25px;
        }
        @media screen and (max-width: 768px) {
            font-size: 17px;
        }
        font-size: 25px;
        font-weight: 900;
        color: var(--black-text);
    }
`

const Content = styled.div `
    width: 100%;
    height: 90%;
    padding: 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none; 
    
    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
`

const WithoutBackground = styled.div `
    max-width: 1000px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed;
    transition: all 0.3s ease-in-out;

    .title-wrapper {
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        svg {
            font-size: 2rem;
        }

        span {
            margin-left: 10px;
            font-size: 1.5rem;
            font-weight: 600;
        }

    }

    &:hover {
        border: 2px solid;
    
    }
`

const Background = styled.div `
    width: 100%;
    padding-top: 10px;
    img{
        transition: all 0.5s ease-in-out;
        width: 100%;
        border-radius: 10px;
        &:hover {
        border: 4px solid black;
        padding: 1px;
    }
    }

`