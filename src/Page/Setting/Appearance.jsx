import styled from "styled-components";
import { Icon } from "../../Assets/icon";
import data from "../../assets/photos/background.json"
import { useContext, useEffect, useState } from "react";
import AppearanceContext from "../../Context/Appearance.context";
import DeviceContext from "../../Context/Device.context";

const Appearance = () => {

    const [dataAppearance] = useState(data.background)
    const { appearance, setAppearance } = useContext(AppearanceContext)
    const { device } = useContext(DeviceContext)
    const handleClickPhoto = (data) => {
        setAppearance({
            url: data.url,
            name: data.name
        })
    }

    const handleInputBG = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAppearance({
                url: reader.result,
                name: file.name
            });
        };
    };

    return (
        <Container>
            <TitleWrapper>
                <h2>Thay đổi hình nền</h2>
            </TitleWrapper>

            <PreviewSection>
                <PreviewImg>
                    {appearance && appearance.url === "" ?
                        <WithoutBackgroundPR>
                            <div className="title-wrapper">
                                <Icon.bin />
                                <span>Không cần hình nền</span>
                            </div>
                        </WithoutBackgroundPR> :
                        <PrImg url={appearance.url} />
                    }
                </PreviewImg>

                <PreviewInfor>
                    <div className="name">
                        {appearance && appearance.url === "" ?
                            <p>Không có hình nền</p>
                            : <p>{appearance.name}</p>
                        }
                    </div>


                </PreviewInfor>
            </PreviewSection>

            <Content>
                <WithoutBackground className={`pointer-cursor ${appearance.url === "" && "active"}`} onClick={() => handleClickPhoto({ url: "", name: "" })}>
                    <div className="title-wrapper">
                        <Icon.bin />
                        {device === "desktop" && <span>Không cần hình nền</span>}
                    </div>
                </WithoutBackground>
                <UploadBackground className="pointer-cursor" onClick={() => handleClickPhoto({ url: "", name: "" })}>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        accept=".jpg,.png,.jpeg"
                        onChange={handleInputBG} />
                    <div className="title-wrapper">
                        <Icon.upload />
                        {device === "desktop" && <span>Chọn ảnh từ máy</span>}
                    </div>
                </UploadBackground>

                {dataAppearance && dataAppearance.map((data, idx) => {
                    return (
                        <Background onClick={() => handleClickPhoto(data)} url={data.url} key={idx}
                            className={`pointer-cursor ${appearance.name === data.name && "active"} `}>
                        </Background>
                    )
                })

                }

            </Content>
        </Container>
    );
}

export default Appearance;

const Container = styled.div`
    width: 100%;
    height: 100%;

    --title-height: 5%;
    --preview-height: 35%;
    --content-height: 55%;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: var(--title-height);


    h2 {
        @media screen and (min-width: 769px) {
            font-size: 15px;
        }
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
        font-size: 25px;
        font-weight: 900;
        color: var(--black-text);
    }
`

const PreviewSection = styled.div`
    height: var(--preview-height);
    width: 100%;
    display: flex;
    border-bottom: 1px solid #cfcfcf;
    padding: 10px;
`

const PreviewImg = styled.div`

    width: 40%;
    height: 100%;
    padding: 10px;

`

const PrImg = styled.div`
    background-image: ${({ url }) => `url(${url})`};
    min-height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 26px;
    border: 2px solid #585A5C;
`

const PreviewInfor = styled.div`
    height: 100%;
    width: 60%;
    padding: 54px 0px;
    .name {
        width: 100%;
        border: 1px solid #585A5C;
        padding: 10px 20px;
        border-radius: 10px;
        height: auto;

        p {
            color: var(--black-text);
            text-transform: uppercase;
            font-weight: 900;
            font-size: 1.5rem;
        }
    }
`

const Content = styled.div`
    width: 100%;
    height: 50vh;
    padding: 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none; 
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
`

const WithoutBackground = styled.div`
    width: 20%;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed;
    transition: all 0.3s ease-in-out;
    /* flex-direction: row; */
    position: relative;
    .title-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        svg {
            font-size: 2rem;
        }

        span {
            margin-left: 10px;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
        }

    }

    &:hover {
        border: 1px solid;
    
    }

    &.active {
        &::after {
            content: "";
            position: absolute;
            border: 4px solid #1973C5;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            border-radius: 10px;
        }
    }
`

const UploadBackground = styled.label`
    width: 20%;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed;
    transition: all 0.3s ease-in-out;
    /* flex-direction: row; */

    .title-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        svg {
            font-size: 2rem;
        }

        span {
            margin-left: 10px;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
        }

    }

    &:hover {
        border: 1px solid;
    
    }
`

const WithoutBackgroundPR = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed;
    transition: all 0.3s ease-in-out;

    .title-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        svg {
            font-size: 2rem;
        }

        span {
            margin-left: 10px;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
        }

    }

    &:hover {
        border: 2px solid;
    
    }
    
`

const Background = styled.div`
    width: 20%;
    padding-top: 10px;
    background-image: ${({ url }) => `url(${url})`};
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    border: 2px solid #585A5C;
    position: relative;
    

    &.active {
        &::before {
            content: "";
            position: absolute;
            border: 4px solid #1973C5;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            border-radius: 10px;
        }
    }
`