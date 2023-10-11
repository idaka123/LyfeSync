import styled from "styled-components";
import Tippy from '@tippyjs/react/headless';
import { Img } from "../../../Assets/svg";
import Input from "../../../Component/Input"
import { useState, useEffect, Fragment, useContext, useMemo } from "react";
import { compareDates, dateConvert } from "../../../Util/util"
import { nanoid } from 'nanoid'
import ModalContext from "../../../Context/Modal.conetxt";
import TaskContext from "../../../Context/Task.context";
import SubTask from "./SubTask";
import language from "../../../Util/language"

const TaskCard = (p) => {
    const { dataSection, setDateSection, dateZone } = p
    // const { task }  = useContext(TaskContext)
    const [dateType, setDateType] = useState({
        overdue: [],
        today: [],
        tomorrow: [],
        someDay: [],
        dateAfterTomorrow: [],
    })
    const [dAfterTArr, setDAfterTArr] = useState()

    useEffect(() => {
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', timeZoneName: 'short' };
        
        const setupDate = () => {   
            const today = new Date()

            const overDueTasks = dataSection.filter((task) => {
                const deadline = new Date(task.deadline)
                return deadline < today;
            })
            const todayTasks = dataSection.filter((task) => {
                const deadline = new Date(task.deadline)
                return deadline.toLocaleString('en-US', options) === today.toLocaleString('en-US', options);
            })
    
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1)
            const tomorrowTasks = dataSection.filter((task) => {
                const deadline = new Date(task.deadline);
                return deadline.toLocaleString('en-US', options) === tomorrow.toLocaleString('en-US', options);    
            })
            
            const newDateArr = []
            const dATTasksArr = []
            let dateAfterTomorrow = new Date();
            dateAfterTomorrow.setDate(dateAfterTomorrow.getDate() + 2 )

            for(let i = 0; i < 7; i++) {
                
                let dateAfter = new Date();
                dateAfter.setDate(dateAfter.getDate() + 2 + i)
                newDateArr.push(language.date.find(item => item.name === dateAfter.toLocaleString('en-US', options).split(",")[0]))
                setDAfterTArr(newDateArr)
                const dATTasks = dataSection.filter((task) => {
                    const deadline = new Date(task.deadline);
                    return deadline.toLocaleString('en-US', options) === dateAfter.toLocaleString('en-US', options);
                })

                dATTasksArr.push(dATTasks)
            }

            const someDayTasks = dataSection.filter((task) => {
                const deadline = new Date(task.deadline);
                return deadline > dateAfterTomorrow;
            })

    
            setDateType({
                overdue: overDueTasks,
                today: todayTasks,
                tomorrow: tomorrowTasks,
                dateAfterTomorrow: dATTasksArr[0],
                dateAfterTomorrow1: dATTasksArr[1],
                dateAfterTomorrow2: dATTasksArr[2],
                dateAfterTomorrow3: dATTasksArr[3],
                dateAfterTomorrow4: dATTasksArr[4],
                dateAfterTomorrow5: dATTasksArr[5],
                someDay: someDayTasks,
            })
        }
        setupDate()
        
        

    }, [dataSection]);


    const TodayDZ = () => <Fragment>
                            {dateType.overdue.length > 0 && 
                                <Fragment>
                                    {/* OVERDUE */}
                                    <DateZoneLabel name="overdue" className="mb-10 overdue" title="Quá hạn" num={dateType.overdue.length} />
                                    <TaskCardList className="mb-30">
                                    {dateType.overdue.map((data, idx) => {
                                        return (
                                            <Card 
                                                key={idx} 
                                                id={data.id}
                                                title={data?.title}
                                                color={data?.color}
                                                deadline={data?.deadline}
                                                area={data.area}
                                                note={data.note}
                                                subTask={data.sub}
                                                dataSection={dataSection}
                                                setDateSection={setDateSection}
                                                />
                                        )
                                    })}
                                    </TaskCardList>
                                </Fragment>
                            }
                                {/* TODAY */}
                                <DateZoneLabel name="today" className="mb-10" title="Hôm nay" num={dateType.today.length} />
                                <TaskCardList className="mb-30">
                                {dateType.today && dateType.today.map((data, idx) => {
                                    return (
                                        <Card 
                                            key={idx} 
                                            id={data.id}
                                            title={data?.title}
                                            color={data?.color}
                                            deadline={data?.deadline}
                                            area={data.area}
                                            note={data.note}
                                            subTask={data.sub}
                                            />
                                    )
                                })}
                                </TaskCardList>
                        </Fragment>

    const WeekDZ = () =>  <Fragment>
                            {dateType.overdue.length > 0 && 
                                <Fragment>
                                    {/* OVERDUE */}
                                    <DateZoneLabel name="overdue" className="mb-10 overdue" title="Quá hạn" num={dateType.overdue.length} />
                                    <TaskCardList className="mb-30">
                                    {dateType.overdue.map((data, idx) => {
                                        return (
                                            <Card 
                                                key={idx} 
                                                id={data.id}
                                                title={data?.title}
                                                color={data?.color}
                                                deadline={data?.deadline}
                                                area={data.area}
                                                note={data.note}
                                                subTask={data.sub}
                                                dataSection={dataSection}
                                                setDateSection={setDateSection}
                                                />
                                        )
                                    })}
                                    </TaskCardList>
                                </Fragment>
                            }
                            {/* TODAY */}
                            <DateZoneLabel name="today" className="mb-10" title="Hôm nay" num={dateType.today.length} />
                            <TaskCardList className="mb-30">
                            {dateType.today && dateType.today.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}
                            </TaskCardList>
                            {/* TOMORROW */}
                            <DateZoneLabel name="tomorrow" className="mb-10 mt-40" title="Ngày mai" num={dateType.tomorrow.length} />
                            {dateType.tomorrow && dateType.tomorrow.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE AFTER TOMORROW */}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[0]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow && dateType.dateAfterTomorrow.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE + 1 AFTER TOMORROW*/}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[1]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow1 && dateType.dateAfterTomorrow1.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE + 2 AFTER TOMORROW*/}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[2]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow2 && dateType.dateAfterTomorrow2.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE + 3 AFTER TOMORROW*/}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[3]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow3 && dateType.dateAfterTomorrow3.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE + 4 AFTER TOMORROW*/}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[4]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow4 && dateType.dateAfterTomorrow4.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}
                        </Fragment>

    const AllDZ = () =>  <Fragment>
                            {dateType.overdue.length > 0 && 
                                <Fragment>
                                    {/* OVERDUE */}
                                    <DateZoneLabel name="overdue" className="mb-10 overdue" title="Quá hạn" num={dateType.overdue.length} />
                                    <TaskCardList className="mb-30">
                                    {dateType.overdue.map((data, idx) => {
                                        return (
                                            <Card 
                                                key={idx} 
                                                id={data.id}
                                                title={data?.title}
                                                color={data?.color}
                                                deadline={data?.deadline}
                                                area={data.area}
                                                note={data.note}
                                                subTask={data.sub}
                                                dataSection={dataSection}
                                                setDateSection={setDateSection}
                                                />
                                        )
                                    })}
                                    </TaskCardList>
                                </Fragment>
                            }
                            {/* TODAY */}
                            <DateZoneLabel name="today" className="mb-10" title="Hôm nay" num={dateType.today.length} />
                            <TaskCardList className="mb-30">
                            {dateType.today && dateType.today.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}
                            </TaskCardList>

                            {/* TOMORROW */}
                            <DateZoneLabel name="tomorrow" className="mb-10 mt-40" title="Ngày mai" num={dateType.tomorrow.length} />
                            {dateType.tomorrow && dateType.tomorrow.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* DATE AFTER TOMORROW */}
                            <DateZoneLabel name="dateAfterTomorrow" className="mb-10 mt-40" title={dAfterTArr[0]?.value?.vn} num={dateType.dateAfterTomorrow.length} />
                            {dateType.dateAfterTomorrow && dateType.dateAfterTomorrow.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}

                            {/* SOME DAY */}
                            <DateZoneLabel name="someday" className="mb-10 mt-40" title="Ngày nào đó" num={dateType.someDay.length} />
                            {dateType.someDay && dateType.someDay.map((data, idx) => {
                                return (
                                    <Card 
                                        key={idx} 
                                        id={data.id}
                                        title={data?.title}
                                        color={data?.color}
                                        deadline={data?.deadline}
                                        area={data.area}
                                        note={data.note}
                                        subTask={data.sub}
                                        />
                                )
                            })}
                        </Fragment>

    return ( 
        <Container>

        {dateZone === "today" ?
            <TodayDZ />
        : (dateZone === "week") ?
            <WeekDZ /> 
        : (dateZone === "all") &&
            <AllDZ />
        }  
        </Container>
     );
}

const DateZoneLabel = (p) => {
    const { title, num, className } = p

    return (
    <DateZoneLabelContainer className={className}>
        <div className="label text-dark">
            <span>{title}</span>
            <span> ({num})</span>
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
        note = "",
        subTask = [],
        id,
        dataSection,
        setDateSection } = p
    // const { task, setTask }  = useContext(TaskContext)
    const { openModal }  = useContext(ModalContext)

    const [checked, setChecked] = useState(false)
    const [subOpen, setSubOpen] = useState(false)
    const [sub, setSub] = useState(subTask)
    const [subDone, setSubDone] = useState(0)
    const [option, setOption] = useState(false)

    const countCurrSub = (dataSub) => {
        return dataSub.reduce((total, curr) => {
            if (curr.done === true) {
                return total + 1;
            } else {
                return total;
            }
        }, 0);
    };
      
    const memoizedCount = useMemo(() => countCurrSub(sub), [sub]);
      
    useEffect(() => {
        let isMounted = true;
        
        if (isMounted) {
            setSubDone(memoizedCount);
        }
        
        return () => {
            isMounted = false;
        };
    }, [memoizedCount]);

    const taskHandle = {
        open: () => { // Open modal detail
            const data = {
                title,
                color,
                deadline,
                area,
                note,
                id
            }
            openModal(title, data)
        },
        check: () => { // Check task
            setChecked(!checked)
        },
        option: { //handle option
            open: () => {
                setOption(true)
            },
            close: () => {
                setOption(false)
            },
            toggle: () => {
                setOption(!option)
            },
            delete: (id) => {
                let newTask = [...dataSection]; //prevent mutating
                newTask = newTask.filter(data => data.id !== id)
                setDateSection(newTask);
                taskHandle.option.close()
            }
        }
    }

    const subTaskHandle = {
        delete: (id) => { // Delete subtask
            let newSub = [...sub]; //prevent mutating
            newSub = newSub.filter(data => data.id !== id)
            setSub(newSub); 
        },
        add: (data) => { // Add new subtask
            const newData = [...sub, data]
            setSub(newData)
        },
        open: () => { // Open list subtask
            setSubOpen(!subOpen)
        },
        check: (id, check) => { // check subtask
            const newSub = [...sub]; //prevent mutating
            const index = newSub.map(e => e.id).indexOf(id);
            newSub[index].done = check;
            setSub(newSub); 
        }
    }
    
    const Area = (p) => {
        const {data} = p
        const Image = Img[data]
        return <Image/>
    }
    
  
    return (
        <TaskCardContainer style={color != null ? {backgroundColor: color} : {backgroundColor: "#FFFFF"}} className="text-dark">
            <MainTask>
                <div className={`card-title ${color ?"text-white" : ""}  ${checked ? "blur" : ""}`}>
                    <Title>
                        <span onClick={taskHandle.check}>{checked ? <Img.checkboxChecked /> : <Img.checkbox/>}</span>
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

                <div className={`card-sub ${color ?"text-white" : ""}`} onClick={subTaskHandle.open}>
                    {sub.length > 0 && <span>({subDone}/{sub.length})</span>}
                    <span><Img.subTask/></span>
                </div>
                
                <div className={`card-option ${color ?"text-white" : ""}`}>
                    <Tippy
                        interactive
                        render={attrs => (
                            <Option {...attrs} 
                                taskId={id} 
                                openDetail={taskHandle.open} 
                                deleteTask={taskHandle.option.delete}
                                deadline={deadline}/>
                        )}
                        visible={option}
                        onClickOutside={taskHandle.option.close}
                        offset={[30, -20]}

                        >
                        <OptionBtnCon className="mr-5" style={{position: "relative"}} onClick={taskHandle.option.toggle}>
                            <Img.option/>
                        </OptionBtnCon>
                    </Tippy>
                    <span onClick={taskHandle.open}><Img.arrowRight/></span>
                </div>
            </MainTask>

            {subOpen && 
            <Fragment>
                <SubTaskList>
                {sub && sub.map((sub, idx) => {
                    return <SubTask key={idx} id={sub.id} color={color} title={sub.title} done={sub.done} updateSubCheck={subTaskHandle.check} deleteSubTask={subTaskHandle.delete}/> 
                })}
                </SubTaskList>

                <AddSubTask color={color} AddSub={subTaskHandle.add} placeholder={sub.length > 0 ? "": "Thêm subtask"}/>    
            </Fragment>}

        </TaskCardContainer>
    )
}

const AddSubTask = (p) => {
    const { color, AddSub, placeholder } = p

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

    const handleAddSubTask = (event) => {
        if (event.key === 'Enter') {
            const newData = {
                "id": nanoid(),
                "title": value,
                "done": false
            }
            AddSub(newData)
            setValue("")
        }
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
                onKeyDown={handleAddSubTask}
                name="title"
                className={`${color ? "text-white" : ""}`}
                inputStyle={inputStyle}
                placeholder={placeholder}
                plhdercolor={`${color ? "var(--white-text)": "var(--black-text)"}`}
                focusborder="false"
               />
        </AddSubTaskContainer>
    )
}


const Option = (p) => {
    const { openDetail, deleteTask, taskId, deadline } = p
    const [current, setCurrent] = useState()

    useEffect(() => {
        const compare = compareDates(new Date(), new Date(deadline))

        if(compare === 0 ) {
            setCurrent("today")
        }

    }, [taskId, deadline]);

    const listOption = [
        {
            name: "today",
            value: "Hôm nay",
            icon: "deadline",
            handleClick: () => {
                
            }
        },
        {
            name: "tomorrow",
            value: "Mai",
            icon: "deadline",
            handleClick: () => {
                console.log("123")
            }
        },
        {
            name: "someDay",
            value: "Ngày nào đó",
            icon: "deadline",
            handleClick: () => {
                console.log("123")
            }
        },
        {
            name: "edit",
            value: "Sửa",
            icon: "edit",
            handleClick: () => {
                openDetail()
            }
        },
        {
            name: "delete",
            value: "Xóa",
            icon: "deleteIcon",
            handleClick: () => {
                deleteTask(taskId)
            }
        },
    ]
    
    const Icon = (p) => {
        const {icon} = p
        const Image = Img[icon]
        return <Image/>
    }

    return (
        <OptionContainer>
         {listOption && listOption.map((item, idx) => { 
            return(
            <li key={idx} onClick={item.handleClick} className={current === item.name ? "disable" : ""}>
                <Icon icon={item.icon}/>
                <span className="ml-7">{item.value}</span>
            </li>
            )})
        }
        </OptionContainer>
    )
}

export default TaskCard;


const Container = styled.div `

`


const DateZoneLabelContainer = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;

    &.overdue {
        .label span {
            color: rgba(234,84,85,1);
        }
    }

    .label {
        font-weight: 700;
        /* cursor: pointer; */

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
            &:nth-child(2), &:nth-child(1) {
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
        display: flex;
        line-height: 1;
    }
`

const OptionBtnCon = styled.div `
    svg {
        width: 17.8px;
        cursor: pointer;
    }
`
const SubTaskList = styled.div `
    padding: 8px 12px;

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
        width: 18px;
    }
`
const OptionContainer = styled.ul `
    position: absolute;
    top: 0;
    right: -10px;
    width: 200px;
    padding: 10px 8px;
    height: auto;
    color: #373a3c;
    box-shadow: 0 0 0 0;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 1rem;
    text-align: left;
    list-style: none;
    background-color: #fff;

    li {
        user-select: none;
        display: flex;
        cursor: pointer;
        align-items: center;
        border-radius: 5px;
        padding: 5px 9px;
        transition: all .3s ease-in-out;
        font-weight: 600;
        font-size: 1.26rem;

        &.disable {
            cursor: not-allowed;
            user-select: none;
            opacity: 0.5;
        }

        span {
            font-size: 1.25rem;
        }
        svg {
            width: 15px;
            margin-right: 5px;
        }

        &:not(.disable):hover {
            background-color: #f5f5f5;
        }
    }
`