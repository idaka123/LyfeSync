import styled from "styled-components";
import Tippy from '@tippyjs/react/headless';
import { Img } from "../../../assets/svg";
import { Icon } from "../../../assets/icon";
import { useState, useEffect, Fragment, useContext } from "react";
import { getRecentSevenDates, updateRecentDates } from "../../../Util/util"
import ModalContext from "../../../Context/Modal.context";
import RoutineContext from "../../../Context/Routine.context";
import myCursor from "../../../assets/cursor/Labrador_Retriever.cur"

const RoutineCard = (p) => {
    const { dataSection, setDateSection, dateZone } = p
    // const { task }  = useContext(TaskContext)
    const [dateType, setDateType] = useState({
        mustdo: [],
        all: []
    })

    useEffect(() => {
    
        const setupDate = () => {   
            
            const filterRoutineDo = (routine) => {
                return routine.filter((data) => {
                    return data.active === true
                });
            };

            const filterRoutineDontNeed = (routine) => {
                return routine.filter((data) => {
                    return data.active === false
                });
            };

            const mustDo = filterRoutineDo(dataSection)
            const doNotNeed = filterRoutineDontNeed(dataSection)
            
            setDateType({
                mustdo: mustDo,
                doNotNeed: doNotNeed,
                all: dataSection
            });
        };
    
        setupDate();
    }, [dataSection]);

    const TodayDZ = () => <Fragment>
                            {dateType.mustdo.length > 0 && 
                                <Fragment>
                                    {/* Must Do */}
                                    <DateZoneLabel name="must-do" className="mb-10" title="Phải Làm" num={dateType.mustdo.length} />
                                    <TaskCardList className="mb-30">
                                    {dateType.mustdo.map((data, idx) => {
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
                                                dateDone={data?.dateDone}
                                                active={data?.active}
                                                />
                                        )
                                    })}
                                    </TaskCardList>
                                </Fragment>
                            }
                        </Fragment>

    const AllDZ = () => <Fragment>
                            {/* Must Do */}
                            <DateZoneLabel name="must-do" className="mb-10" title="Phải Làm" num={dateType.mustdo.length} />
                            <TaskCardList className="mb-30">
                            {dateType.mustdo.map((data, idx) => {
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
                                        dateDone={data?.dateDone}
                                        active={data?.active}
                                        />
                                )
                            })}
                            </TaskCardList>
                            {/* Do Not Need */}
                            <DateZoneLabel name="must-do" className="mb-10" title="Không cần phải làm" num={dateType.doNotNeed.length} />
                            <TaskCardList className="mb-30">
                            {dateType.doNotNeed.map((data, idx) => {
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
                                        dateDone={data?.dateDone}
                                        active={data?.active}
                                        />
                                )
                            })}
                            </TaskCardList>
                        </Fragment>
           
    return ( 
        <Container>

        {dateZone === "today" ?
        <TodayDZ />
        : 
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
        id,
        dataSection,
        setDateSection,
        dateDone,
        active } = p
    // const { task, setTask }  = useContext(TaskContext)
    const { openModal }  = useContext(ModalContext)

    const [checked, setChecked] = useState(false)
    const [option, setOption] = useState(false)

    const taskHandle = {
        open: () => { // Open modal detail
            const data = {
                title,
                color,
                deadline,
                area,
                note,
                id,
                dateDone,
                active
            }
            openModal(title, data, "routine")
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
                const routine = document.querySelector(`[name='${id}']`)
                routine.style.opacity = "0"
                
                setTimeout(() => {
                    let newTask = [...dataSection]; //prevent mutating
                    newTask = newTask.filter(data => data.id !== id)
                    setDateSection(newTask);
                    taskHandle.option.close()
                }, 500)
            }
        }
    }
    
    const Area = (p) => {
        const {data} = p
        const Image = Img[data]
        return <Image/>
    }
    
    const handleClickUnCheckDate = (date) => {

        const isSameDate = (date1, date2) => {
            return date1.getFullYear() === date2.getFullYear() &&
                   date1.getMonth() === date2.getMonth() &&
                   date1.getDate() === date2.getDate();
          };

        setDateSection(prev => {
            const newRoutine = [...prev]
            const index = newRoutine.map(e => e.id).indexOf(id);
            // console.log(newRoutine[index].dateDone)
            newRoutine[index].dateDone = newRoutine[index].dateDone.filter(d => {

                return !isSameDate(new Date(d), new Date(date))
            })
            // console.log(newRoutine[index].dateDone)
            return newRoutine
        })
    }

    const handleClickCheckDate = (date) => {
        console.log(date)
        setDateSection(prev => {
            const newRoutine = [...prev]
            const index = newRoutine.map(e => e.id).indexOf(id);
            console.log(date)
            newRoutine[index].dateDone.push(date)
            console.log(newRoutine[index])
            return newRoutine
        })
    }

    return (
        <TaskCardContainer name={id} style={color != null ? {backgroundColor: color} : {backgroundColor: "#FFFFF"}} className="text-dark">
            <MainTask>
                <div className={`card-title ${color ?"text-white" : ""}  ${checked ? "blur" : ""}`}>
                    <Title>
                        <RoutineChecked>
                        {dateDone && updateRecentDates(dateDone).reverse().map((date, idx) => {
                            if(date.check)
                                return <span key={idx} onClick={() => handleClickUnCheckDate(date.value)}><Img.routineDone /></span>
                            else return <span key={idx} onClick={() => handleClickCheckDate(date.value)}><Img.routineMiss /></span>
                        })}
                        </RoutineChecked>
                        <div className={`title ${checked ? "line-through" : ""}`}>{title}</div>
                    </Title>
                    
                    <RelateArea>
                        {area && area.map((item, idx) => <Area key={idx} data={item}/>)}
                    </RelateArea>
                </div>

                <div className={`card-option ${color ?"text-white" : ""}`}>
                    <Tippy
                        interactive
                        render={attrs => (
                            <Option {...attrs} 
                                taskId={id} 
                                openDetail={taskHandle.open} 
                                deleteTask={taskHandle.option.delete}
                                deadline={deadline}
                                active={active}
                                setOption={setOption}/>
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

        </TaskCardContainer>
    )
}

const Option = (p) => {
    const { openDetail, deleteTask, taskId, active, setOption } = p
    const { setRoutine }  = useContext(RoutineContext)
    
    const listOption = [
        {
            name: active ? "pause" : "continue",
            value: active ? "Dừng lại" : "Tiếp tục",
            icon: active ? "pause2" : "play2",
            handleClick: () => {
                setRoutine(prev => {
                    const newRoutine = [...prev]
                    const index = newRoutine.map(e => e.id).indexOf(taskId);
                    newRoutine[index].active = !active;
                    return newRoutine
                })
            }
        },
        {
            name: "edit",
            value: "Sửa",
            icon: "edit",
            handleClick: () => {
                openDetail()
                setOption(false)
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
    
    const IconTemp = (p) => {
        const {icon} = p
        let Image = Img[icon]
        if(Image)
        return <Image/>
        else {
            Image = Icon[icon]
            return <Image/>
        }
    }

    return (
        <OptionContainer>
         {listOption && listOption.map((item, idx) => { 
            return(
            <li key={idx} onClick={item.handleClick} >
                <IconTemp icon={item?.icon}/>
                <span className="ml-7">{item.value}</span>
            </li>
            )})
        }
        </OptionContainer>
    )
}

export default RoutineCard;


const Container = styled.div `
    padding-top: 20px;
    height: 70dvh;
    overflow-y: scroll;
    scrollbar-width: none; 
    
    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
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
            cursor: url(${myCursor}), auto;
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
        cursor: url(${myCursor}), auto;
    }
`
const Title = styled.div `
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;

    span {
        line-height: 1;
        svg {
            width: 17px;
            cursor: url(${myCursor}), auto;
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
        cursor: url(${myCursor}), auto;
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

const RoutineChecked = styled.div `
    gap: 4px;
    padding: 5px;
    display: flex;

    span {
        transition: all .3s ease-in-out;
        svg:hover {
            color: var(--second-color);
        }
    }
`