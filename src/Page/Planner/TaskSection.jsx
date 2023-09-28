import { useState } from "react"
import styled from "styled-components"

const TaskSection = (p) => {

    const { data } = p
    const { name, dateZone } = data 
    const hleSelctDateZ = (e) => {
        setState(e.target.getAttribute("name"))
    }

    const [state, setState] = useState(dateZone[0].name)

    return (
    <Task>
        <h2 className="select-none title">{name}<span className="icon-wrap"> &nbsp;+ </span></h2>
        <DateZone>
            {dateZone && dateZone.map(date => {
                return (
                <span 
                    key={date.name}
                    name={date.name}
                    className={`select-none ${state === date.name ? "active" : ""}`}
                    onClick={hleSelctDateZ}>{date.value}</span>
                )
            })}
        </DateZone> 
    </Task>
    )
}

export default TaskSection;


const Task = styled.section`
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`



const DateZone = styled.div`
    display: flex;
    justify-content: flex-start;

    span {
        margin-right: 1.5rem;
        cursor: pointer;
        color: #626262;
        font-weight: 500;
        font-family: fantasy;
        font-weight: 600;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #FDBD3E;
        }

        &.active {
            color: #000000;
            font-size: larger;
            cursor: default;
        }
    }
`
