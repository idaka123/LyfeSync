import styled from "styled-components";
import { Img } from "../../../Assets/svg";
import Input from "../../../Component/Input"
import { useState } from "react";
import { dateConvert } from "../../../Util/util"

const mockData = [
    {
        "title": "Đánh răng",
        "color": "#4caf50",
        "area": [],
        "deadline": "2023-10-05T17:00:00.000Z",
        "note": "<p>Đánh kĩ</p>",
        "sub": [
            {
                "title": "rửa mặt",
                "done": false
            },
            {
                "title": "tắm",
                "done": true
            },
        ]
    },
    {
        "title": "Chơi bóng rổ",
        "color": "#ff9800",
        "area": [
            "health",
            "growth"
        ],
        "deadline": "2023-10-06T17:00:00.000Z",
        "note": "<p>Tập kĩ năng</p>"
    }
]

const TaskCard = () => {
    return ( 
        <Container>
            <DateZoneLabel className="mb-10" title="Hôm nay" num="2"></DateZoneLabel>
            <TaskCardList>
            {mockData && mockData.map((data, idx) => {
                return (
                    <Card 
                        key={idx} 
                        title={data?.title}
                        color={data?.color}
                        deadline={data?.deadline}
                        area={data.area}
                        subTask={data.sub}/>
                )
            })}
            </TaskCardList>
        </Container>
     );
}

const DateZoneLabel = (p) => {
    const {title, num, className} = p

    return (
    <DateZoneLabelContainer className={className}>
        <div className="label text-dark">
            <span>{title}</span>
            <span> ({num})</span>
            <span>&nbsp;+</span>
        </div>
    </DateZoneLabelContainer>
    )
}

const Card = (p) => {
    const { 
        title,
        color = null,
        deadline = "",
        area = [],
        subTask = [] } = p

    const [checked, setChecked] = useState(false)
    const [subOpen, setSubOpen] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }

    const openSubTask = () => {
        setSubOpen(!subOpen)
    }
    
    const Area = (p) => {
        const {data} = p
        const Image = Img[data]
        return <Image/>
    }
    
    const countCurrSub = (dataSub) => {
        return dataSub.reduce((total, curr) => {
            if(curr.done === "true") 
                return total + 1
            else 
                return total },0 )
    }

    return (
        <TaskCardContainer style={color != null ? {backgroundColor: color} : {backgroundColor: "#FFFFF"}} className="text-dark">
            <MainTask>
                <div className={`card-title ${color ?"text-white" : ""}  ${checked ? "blur" : ""}`}>
                    <Title>
                        <span onClick={handleCheck}>{checked ? <Img.checkboxChecked /> : <Img.checkbox/>}</span>
                        <div className={`title ${checked ? "line-through" : ""}`}>{title}</div>
                    </Title>

                    <Deadline>
                        <Img.deadline />
                        <span>{dateConvert(deadline)}</span>
                    </Deadline>
                    
                    <RelateArea>
                        {area && area.map((item, idx) => <Area key={idx} data={item}/>)}
                    </RelateArea>
                </div>

                <div className={`card-sub ${color ?"text-white" : ""}`} onClick={openSubTask}>
                    {subTask.length > 0 && <span>({countCurrSub(subTask)}/{subTask.length})</span>}
                    <span><Img.subTask/></span>
                </div>
                
                <div className={`card-option ${color ?"text-white" : ""}`}>
                    <Img.option/>
                    <Img.arrowRight/>
                </div>
            </MainTask>

            {!subOpen && 
            <SubTaskList>
            {subTask && subTask.map((sub, idx) => {
                return <SubTask key={idx} color={color} title={sub.title} done={sub.done}/> 
            })}
            </SubTaskList>}
            
            <AddSubTask color={color}>

            </AddSubTask>
        </TaskCardContainer>
    )
}

const SubTask = (p) => {
    const { color, title, done } = p

    const [checked, setChecked] = useState(done)
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(title)


    const inputStyle = {
        width:"100%",
        height:"35px",
        backgroundColor:"transparent",
        border: "none",
        fontSize: "1.2rem"
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    const openEdit = () => {
        setEdit(true)
    }
    
    const closeEdit = () => {
        setEdit(false)
    }


    const handleInput = (e) => {
        const value = e.target.value
        setValue(value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            closeEdit()
        }
      }
    
    return (
    <SubTaskContainer className={`item ${color ?"text-white" : ""}`}>
        <div className="title-wrapper">
        <span onClick={handleCheck} className={`${checked ? "blur" : ""}`}>{checked ? <Img.checkboxChecked /> : <Img.checkbox/>}</span>
            <div className={`title ${checked ? "line-through" : ""}`}>
                {edit
                ? <Input 
                    value={value}
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    name="title"
                    className={`${color ? "text-white" : ""}`}
                    inputStyle={inputStyle}
                    plhdercolor={`${color ? "var(--white-text)": "var(--black-text)"}`}
                    focusborder="false"
                />
                : value
                }
            
            </div>
        </div>

        <div className="option">
            <span onClick={openEdit}><Img.edit/></span>
            <Img.deleteIcon/>
        </div>
    </SubTaskContainer>
    )
}

const AddSubTask = (p) => {
    const { color } = p

    const [value, setValue] = useState("")

    const inputStyle = {
        width:"80%",
        height:"35px",
        backgroundColor:"transparent",
        border: "none"
    }

    const handleInput = (e) => {
        const value = e.target.value
        setValue(value)
    }



    return (
        <AddSubTaskContainer className={`${color ? "text-white" : ""}`}>
            { value ==="" 
                ? <Img.plus/>
                : <Img.plusCircle/>
            }
            <Input 
                value={value}
                onInput={handleInput}
                name="title"
                className={`${color ? "text-white" : ""}`}
                inputStyle={inputStyle}
                placeholder="Thêm subtask"
                plhdercolor={`${color ? "var(--white-text)": "var(--black-text)"}`}
                focusborder="false"
               />
        </AddSubTaskContainer>
    )
}

export default TaskCard;


const Container = styled.div `

`


const DateZoneLabelContainer = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;

    .label {
        font-weight: 600;

        span {
            font-size: 1.5rem;
            &:nth-child(2) {
                padding: 0 5px;
            }
            &:nth-child(3) {
                font-size: 18px;
                font-weight: 900;
            }
        }
    }

`

const TaskCardList = styled.div `

`
const TaskCardContainer = styled.div `
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 16px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);
    padding: .9rem 1.3rem;
    transition: all .3s ease-in-out;
    
    &:hover {
        box-shadow: inset 0 2px 4px 0 rgba(0,0,0,.06);
    }
 
`

const MainTask =styled.div `
    display: flex;
    align-items: center;
    width: 100%;

    .card-title {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;

        svg {
            flex-shrink: 0;
        }
               
    }

    .card-sub {
        display: flex;
        align-items: center;
        line-height: 1;
        margin-right: 10px;
        

        span {
            font-size: 1.2rem;
            cursor: pointer;
            &:nth-child(2) {
                svg {
                    width: 17.8px;

                }
            }
        }

        &:hover {
            span {
                color: var(--second-color);
            }
        }
    }

    .card-option {
        line-height: 1;
        svg {
            width: 17.8px;
        }
    }
`

const SubTaskList = styled.div `
    padding: 8px 12px;

`

const SubTaskContainer = styled.div `
    display: flex;
    justify-content: space-between;
    .title-wrapper {
        display: flex;
        align-items: center;

        span {
            line-height: 1;

            svg {
                width: 16px;
                cursor: pointer;
            }
        }

        .title {
            margin-left: .6rem;
            font-size: 1.3rem;
        }
    }

    .option {
        svg {
            cursor: pointer;
            width: 15px;
            margin-left: 10px;
        }
    }
`

const Title = styled.div `
    display: flex;
    align-items: center;

    span {
        line-height: 1;
        svg {
            width: 17px;
            cursor: pointer;
        }
    }

    .title {
        font-size: 1.4rem;
        font-weight: 700;
        margin-left: 6px;
    }
`

const Deadline = styled.div `
    display: flex;
    align-items: center;
    
    svg {
        width: 12px;
    }

    span {
        margin-left: 6px;
        font-size: 1.2rem;
    }
`

const RelateArea = styled.div `
    display: flex;
    gap: 6px;
    svg {
        width: 12px;
    }
`

const AddSubTaskContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 13px;
    }
`