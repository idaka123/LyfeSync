import styled from "styled-components";
import Modal from "../../../Component/Modal";
import Input from "../../../Component/Input";
import { Img } from "../../../Assets/svg";
import { CirclePicker } from "react-color";
import { useContext, useState } from "react";
import Flatpickr from "react-flatpickr";
import ReactQuill from 'react-quill';
import Button from "../../../Component/Button";
import ModalContext from "../../../Context/Modal.conetxt";
import 'react-quill/dist/quill.snow.css';
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/flatpickr.css";

const relatedArea = [
    {
        name: "health",
        value: "Sức khỏe",
        icon: Img.health
    },
    {
        name: "play",
        value: "Vui chơi",
        icon: Img.play
    },
    {
        name: "spirituality",
        value: "Tâm linh",
        icon: Img.spirit
    },
    {
        name: "environment",
        value: "Môi trường",
        icon: Img.environment
    },
    {
        name: "work",
        value: "Công việc",
        icon: Img.work
    },
    {
        name: "wealth",
        value: "Tài chính",
        icon: Img.wealth
    },
    {
        name: "growth",
        value: "Phát triển",
        icon: Img.growth
    },
    {
        name: "relationship",
        value: "Quan hệ",
        icon: Img.relationship
    },

]

const TaskModal = () => {

    const { closeModal }  = useContext(ModalContext)

    const [dataInput, setDataInput] = useState({})
    const [area, setArea] = useState({
        health: false,
        play: false,
        spirituality: false,
        environment: false,
        work: false,
        wealth: false,
        growth: false,
        relationship: false,
    })
    const [hex, setHex] = useState('#F44E3B');
    const [secOpen, setSecOpen] = useState({
        color: true,
        area: true,
        note: true
    });

    const openSec = (e) => {
        const name = e.currentTarget.getAttribute("name")
        console.log(name)
        setSecOpen({...secOpen, [name]: !secOpen[name] })
    }

    const handleInput = (e, from = null) => {

        const name = from || e.target.name
        const value = e.target.value

        console.log(name, value)
        setDataInput({...dataInput, [name]: value })
    }

    const handleChooseArea = (name) => {
        console.log(name)
        setArea({...area, [name]: !area[name] })

        const newData = Object.keys(area).reduce((prev, next) => {
            if(area[next]) {
                return [...prev, next]
            } else {
                return prev
            }
        }, [])

        setDataInput({...dataInput, area: newData })
    }

    const handleChooseDateType = (e) => {
        console.log(e.target.id)
        const id = e.target.id
        if(id === "") return 

        if(id === "specific-day") {
            document.querySelector(".flat-picker-wrapper").style.display = "flex"
        } else {
            document.querySelector(".flat-picker-wrapper").style.display = "none"
        }
        setDataInput({...dataInput, deadline: id })
    }

    const handleSave = () => {
        console.log(dataInput)
        closeModal()
    }

    return ( 
    <Modal >
        <Content>           
            {/* TITLE */}
            <ModalSectionContent
                title="Tiêu đề"
                Icon={Img.pen} >
                <Input name="title" inputStyle={{width: "80%"}} value={dataInput.title} onInput={handleInput}/>
            </ModalSectionContent>

            {/* COLOR */}
            <ModalSectionContent 
                title="Màu tag"
                name="color"
                Icon={Img.tag}
                plus={secOpen.color}
                openSec={openSec}>
                {!secOpen.color && <CirclePicker
                    colors={["#f44336", "#e91e63", "#673ab7", "#03a9f4", "#4caf50", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"]}
                    onChange={(color) => {
                        setHex(color.hex);
                        setDataInput({...dataInput, color: color.hex })
                      }}
                    color={hex}
                    circleSize={15}
                    circleSpacing={0}
                    // onSwatchHover={(color, event) => setHex(color.hex)}
                    />}
            </ModalSectionContent>
            
            {/* AREA */}
            <ModalSectionContent 
                title="Liên quan"
                name="area"
                Icon={Img.area}
                plus={secOpen.area}
                openSec={openSec} >
            {(!secOpen.area && relatedArea) && relatedArea.map(data => {
                return (
                    <RelateAres className={area[data.name] ? "text-dark" : ""} key={data.name} onClick={() => handleChooseArea(data.name)}>
                        <data.icon />
                        <p>{data.value}</p>
                    </RelateAres>
                )
            })}
            </ModalSectionContent>

            {/* DEADLINE */}
            <ModalSectionContent title="Thời hạn" Icon={Img.deadline} >
                <Deadline>
                    <Ratio>
                    <label htmlFor="today" onClick={handleChooseDateType}>
                        <input type="radio" id="today" name="radio"/>
                        <span>Nay</span>
                    </label>
                    <label htmlFor="tomorrow" onClick={handleChooseDateType}>
                        <input type="radio" id="tomorrow" name="radio"/>
                        <span>Mai</span>
                    </label>
                    <label htmlFor="soon" onClick={handleChooseDateType}>
                        <input type="radio" id="soon" name="radio"/>
                        <span>Sắp</span>
                    </label>
                    <label htmlFor="someday" onClick={handleChooseDateType}>
                        <input type="radio" id="someday" name="radio"/>
                        <span>Ngày nào đó</span>
                    </label>
                    <label htmlFor="specific-day" 
                    onClick={(e) => {
                        handleChooseDateType(e)
                    }}>
                        <input type="radio" id="specific-day" name="radio"/>
                        <span>Chọn ngày</span>
                    </label>
                    </Ratio>
                    <div className="flat-picker-wrapper">
                        <Flatpickr 
                            options={{
                                inline: true,
                                minDate: "today",
                            }}
                            onChange={(date) => {
                                setDataInput({...dataInput, deadline: date[0] })
                            }}
                        />

                    </div>
                </Deadline>
            </ModalSectionContent>

            {/* NOTE */}
            <ModalSectionContent 
                title="Ghi chú"
                name="note"
                Icon={Img.note}
                plus={secOpen.note}
                openSec={openSec}>
                {!secOpen.note &&<ReactQuill 
                    theme="snow"
                    placeholder="Ghi chú của bạn..."
                    onChange={(value) => {
                        setDataInput({...dataInput, note: value })
                    }}
                    />}
            </ModalSectionContent>
            
            <Button
                title="Lưu"
                onClick={handleSave}
                className="text-center"
                style={{marginTop: "20px"}}
            />
        </Content> 
    </Modal>
     );
}

 
const ModalSectionContent = (p) => {
    const { title, name, Icon, children, plus, openSec } = p
    
    return (
        <ModalSectionContentStyle className="tag">
            <Label 
                name={name}
                className={`text-dark ${plus ? "click-able" : ""}`}
                onClick={plus ? openSec : null}>
                <Icon />
                <span className="text">{title}</span>
                {plus && <span className="icon">&nbsp;+</span>}
            </Label>
            <div className="content">
                {children}
            </div>
            
        </ModalSectionContentStyle>
    )
}


const Content = styled.div`

    height: calc(100vh - var(--modal-header));
    overflow-y: scroll;
    padding-bottom: 20px;

    .title {
        margin-top: 18px;

        .title-input {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .tag {
        margin-top: 3.3rem;

        .color-input {
            margin-top: 10px;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .circle-picker {
      gap: 7px;
      justify-content: center;  
    }

`
const Label = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    

    svg {
        width: 15px;
    }

    .text {
        margin-left: 6px;
        font-weight: 700;
    }

    .icon {
        font-size: 17px;
        font-weight: 700;
    }

    &.click-able {
        
        cursor: pointer;
        &:hover {
            svg {
                transition: all .3s ease-in-out;
                color: var(--second-color);
            }

            .text {
                transition: all .3s ease-in-out;
                color: var(--second-color);
            }

            .icon {
                transition: all .3s ease-in-out;
                color: var(--second-color);
            }

        }
    }
`

const RelateAres = styled.div `
    text-align: center;
    color: #b8c2cc!important;
    cursor: pointer;
    width: 25%;

    svg {
        width: 18px;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
    }

`
const Deadline = styled.div`
    text-align: center;
    
    .flat-picker-wrapper {
        display: none;
        justify-content: center;

    }

    input.flatpickr-input {
        display: none!important;
    }
`

const Ratio = styled.div`

    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
    /* Accessible outline */
    /* Remove comment to use */ 
    /*
        &:focus-within {
            outline: .125em solid #00005c;
        }
    */
    input {
        position: absolute;
        left: -9999px;
        &:checked + span {
        background-color: mix(#fff, #10163A, 84%);
        &:before {
            box-shadow: inset 0 0 0 0.3375em #10163A;
        }
        }
    }
    span {
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        padding: 0.375em 0.75em 0.375em 0.375em;
        border-radius: 99em; // or something higher...
        transition: 0.25s ease;
        &:hover {
        background-color: mix(#fff, #10163A, 84%);
        }
        &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 1.1em;
        height: 1.1em;
        border-radius: 50%;
        margin-right: 0.375em;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 0.125em #10163A;
        }
    }
    }


`
const ModalSectionContentStyle = styled.div `
        margin-top: 18px;

        .content {
            margin-top: 10px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 24px 0;
            padding: 0 16px;
        }

        .w-color-circle {
            div {
                width: 17px!important;
                height: 17px!important;
            }
        }
        
        .quill .ql-container {
            height: auto!important;
        }
        
    `
 
export default TaskModal;