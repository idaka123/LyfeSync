import styled from "styled-components";
import { Img } from "../../../Assets/svg";
import Input from "../../../Component/Input"
import { useState, useEffect, Fragment, useContext, useMemo } from "react";
import { dateConvert } from "../../../Util/util"
import { nanoid } from 'nanoid'
import ModalContext from "../../../Context/Modal.conetxt";

const mockData = [
    {   
        "title": "Đánh răng",
        "color": "#4caf50",
        "area": [],
        "deadline": "tomorrow",
        "note": "<p>Đánh kĩ</p>",
        "sub": [
            {   
                "id": nanoid(),
                "title": "rửa mặt",
                "done": false
            },
            {
                "id": nanoid(),
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
        "deadline": "2023-10-09T17:00:00.000Z",
        "note": "<p>GPT-4</p><p>Custom instructions details</p><p><br></p><p><span style=\"color: transparent;\"><img src=\"https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F635d748d9229bc7e61e7cfa39f086eef%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fma.png&amp;w=96&amp;q=75\" alt=\"User\" height=\"36\" width=\"36\"></span></p><p><br></p><p><br></p><p>= what is this error console.js:213 The above error occurred in the &lt;div&gt; component:</p><p><br></p><p>    at div</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at EditSection (http://localhost:5173/src/Page/Planner/modal/task.jsx?t=1696611872665:440:5)</p><p>    at div</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at div</p><p>    at div</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at ModalSectionContent (http://localhost:5173/src/Page/Planner/modal/task.jsx?t=1696611872665:397:5)</p><p>    at div</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at div</p><p>    at MotionComponent (http://localhost:5173/node_modules/.vite/deps/framer-motion.js?v=7abbe2b5:269:40)</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at Modal (http://localhost:5173/src/Component/Modal.jsx?t=1696606623795:27:5)</p><p>    at TaskContent (http://localhost:5173/src/Page/Planner/modal/task.jsx?t=1696611872665:113:5)</p><p>    at TaskModal (http://localhost:5173/src/Page/Planner/modal/task.jsx?t=1696611872665:69:7)</p><p>    at div</p><p>    at MotionComponent (http://localhost:5173/node_modules/.vite/deps/framer-motion.js?v=7abbe2b5:269:40)</p><p>    at PresenceChild (http://localhost:5173/node_modules/.vite/deps/framer-motion.js?v=7abbe2b5:7005:24)</p><p>    at AnimatePresence (http://localhost:5173/node_modules/.vite/deps/framer-motion.js?v=7abbe2b5:7071:26)</p><p>    at Planner (http://localhost:5173/src/Page/Planner/Planner.jsx?t=1696609296596:28:37)</p><p>    at div</p><p>    at div</p><p>    at div</p><p>    at O2 (http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=7abbe2b5:1258:6)</p><p>    at DefaultLayoutComponent (http://localhost:5173/src/Layout/default.jsx?t=1696606623795:48:5)</p><p>    at ModalProvider (http://localhost:5173/src/Context/Modal.conetxt.jsx?t=1696606623795:24:5)</p><p>    at OverlayProvider (http://localhost:5173/src/Context/Overlay.context.jsx:23:5)</p><p>    at DefaultLayout (http://localhost:5173/src/Layout/default.jsx?t=1696606623795:28:5)</p><p>    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=7abbe2b5:3330:5)</p><p>    at Routes (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=7abbe2b5:3771:5)</p><p>    at DeviceProvider (http://localhost:5173/src/Context/Device.context.jsx:24:5)</p><p>    at App</p><p>    at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=7abbe2b5:3718:15)</p><p>    at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=7abbe2b5:4198:5)</p><p><br></p><p>Consider adding an error boundary to your tree to customize error handling behavior.</p><p>Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.</p><p><br></p><p>ChatGPT</p><p><br></p><p><br></p><p>The error message you provided seems to originate from a React application. The actual error message itself (i.e., what caused the error) seems to be omitted, but the message provides a stack trace detailing the component hierarchy leading to the component where the error occurred.</p><p>From the stack trace, here's what we can gather:</p><ol><li>The error occurred within a <code style=\"color: var(--tw-prose-code);\">&lt;div&gt;</code> component.</li><li>This <code style=\"color: var(--tw-prose-code);\">&lt;div&gt;</code> is a part of a component named <code style=\"color: var(--tw-prose-code);\">EditSection</code> which is nested inside a number of other components, ultimately being a part of the <code style=\"color: var(--tw-prose-code);\">Planner</code> component.</li><li>The application is using libraries like styled-components (as evidenced by <code style=\"color: var(--tw-prose-code);\">O2</code> and the <code style=\"color: var(--tw-prose-code);\">node_modules/.vite/deps/styled-components.js</code> URL) and framer-motion (from the <code style=\"color: var(--tw-prose-code);\">MotionComponent</code> and <code style=\"color: var(--tw-prose-code);\">node_modules/.vite/deps/framer-motion.js</code> URL).</li></ol><p><span style=\"color: var(--tw-prose-bold);\">Recommendations:</span></p><ol><li><span style=\"color: var(--tw-prose-bold);\">Error Boundary</span>: As the error message suggests, consider adding an <a href=\"https://reactjs.org/docs/error-boundaries.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgba(41,100,170,var(--tw-text-opacity));\">error boundary</a> to your component tree. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.</li><li><span style=\"color: var(--tw-prose-bold);\">Debugging</span>:</li></ol><ul><li class=\"ql-indent-1\">Start by checking the <code style=\"color: var(--tw-prose-code);\">EditSection</code> component since the stack trace points there.</li><li class=\"ql-indent-1\">Look for any recent changes in this component or related components that might have introduced the error.</li><li class=\"ql-indent-1\">Use the React Developer Tools to inspect the component's props, state, and other properties to ensure they are as expected.</li></ul><ol><li><span style=\"color: var(--tw-prose-bold);\">Logs and Error Message</span>:</li></ol><ul><li class=\"ql-indent-1\">The actual error message that describes what went wrong seems to be missing from the provided message. It might have been logged just before this stack trace. Check the console logs just above this message for more clues.</li><li class=\"ql-indent-1\">React usually gives descriptive error messages which can help you pinpoint the exact issue.</li></ul><ol><li><span style=\"color: var(--tw-prose-bold);\">Dependencies</span>:</li></ol><ul><li class=\"ql-indent-1\">Ensure that all your libraries (like styled-components and framer-motion) are up-to-date and compatible with your version of React.</li><li class=\"ql-indent-1\">Check if there are any known issues with the versions of the libraries you're using.</li></ul><ol><li><span style=\"color: var(--tw-prose-bold);\">Check Components</span>:</li></ol><ul><li class=\"ql-indent-1\">Ensure that any required props are being passed to components.</li><li class=\"ql-indent-1\">If there's any asynchronous code (like network requests), make sure error handling is in place.</li><li class=\"ql-indent-1\">For the <code style=\"color: var(--tw-prose-code);\">&lt;div&gt;</code> where the error occurred, check if there's any dynamic content or computations that might result in undefined or unexpected values.</li></ul><ol><li><span style=\"color: var(--tw-prose-bold);\">Reproduce</span>:</li></ol><ul><li class=\"ql-indent-1\">Try to reproduce the error in a consistent manner. Knowing the exact steps leading to the error can significantly simplify the debugging process.</li></ul><p>Lastly, if you have specific parts of your code in <code style=\"color: var(--tw-prose-code);\">EditSection</code> or related components that you believe might be the cause, sharing that can also help in identifying the root cause of the issue.</p><p><br></p><p><br></p><p><br></p><p><span style=\"color: transparent;\"><img src=\"https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F635d748d9229bc7e61e7cfa39f086eef%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fma.png&amp;w=96&amp;q=75\" alt=\"User\" height=\"36\" width=\"36\"></span></p><p><br></p><p><br></p><p>- this is the function trigger the event </p><p><br></p><p>const handleChooseDateDl = async (date) =&gt; {</p><p>        await setDataInput({...dataInput, deadline: date[0] })</p><p>        if(mode === \"edit\") await setSecOpen({...secOpen, deadline: !secOpen.deadline })</p><p>    }</p><p><br></p><p>- this is the component contain the function </p><p>   &lt;Flatpickr </p><p>                            options={{</p><p>                                inline: true,</p><p>                                minDate: \"today\",</p><p>                            }}</p><p>                            onChange={(date) =&gt; handleChooseDateDl(date)}</p><p>                            /&gt;</p><p><br></p><p>ChatGPT</p><p><br></p><p><br></p><p>The function <code style=\"color: var(--tw-prose-code);\">handleChooseDateDl</code> and the <code style=\"color: var(--tw-prose-code);\">Flatpickr</code> component usage seem to be related to date selection. Let's break down what you have:</p><ol><li><span style=\"color: var(--tw-prose-bold);\">handleChooseDateDl Function</span>:</li></ol><ul><li class=\"ql-indent-1\">You're updating the state using <code style=\"color: var(--tw-prose-code);\">setDataInput</code>. This function is asynchronous and takes some time to complete.</li><li class=\"ql-indent-1\">Then, if <code style=\"color: var(--tw-prose-code);\">mode</code> is \"edit\", you're updating another piece of state <code style=\"color: var(--tw-prose-code);\">setSecOpen</code>. This is also asynchronous.</li></ul><ol><li><span style=\"color: var(--tw-prose-bold);\">Flatpickr Component</span>:</li></ol><ul><li class=\"ql-indent-1\">You're using the <code style=\"color: var(--tw-prose-code);\">onChange</code> prop of <code style=\"color: var(--tw-prose-code);\">Flatpickr</code> to capture date changes and passing them to <code style=\"color: var(--tw-prose-code);\">handleChooseDateDl</code>.</li><li class=\"ql-indent-1\">The options prop sets the picker to be inline and allows date selection from today onwards.</li></ul><p><span style=\"color: var(--tw-prose-bold);\">Potential Issues and Recommendations</span>:</p><ol><li><span style=\"color: var(--tw-prose-bold);\">Async State Updates</span>: You're using <code style=\"color: var(--tw-prose-code);\">await</code> with state setters. However, the state update functions returned by <code style=\"color: var(--tw-prose-code);\">useState</code> (like <code style=\"color: var(--tw-prose-code);\">setDataInput</code> and <code style=\"color: var(--tw-prose-code);\">setSecOpen</code>) are asynchronous by nature, but they don't return Promises. So using <code style=\"color: var(--tw-prose-code);\">await</code> with them won't have the desired effect. Remove the <code style=\"color: var(--tw-prose-code);\">await</code> from those lines.</li><li><span style=\"color: var(--tw-prose-bold);\">State Dependency</span>: If the new state depends on the previous state (as you're doing with the spread operator for <code style=\"color: var(--tw-prose-code);\">dataInput</code>), it's safer to use the function form of the state setter:</li></ol><pre class=\"ql-syntax\" spellcheck=\"false\">javascript\n\nCopy code\nsetDataInput(prevData =&gt; ({ ...prevData, deadline: date[0] })); \n</pre><ol><li><span style=\"color: var(--tw-prose-bold);\">State Update Side Effects</span>: Remember that state updates can be batched, so by the time you're calling <code style=\"color: var(--tw-prose-code);\">setSecOpen</code>, the state from <code style=\"color: var(--tw-prose-code);\">setDataInput</code> might not be updated yet. If the logic in the second state update depends on the first state being updated, you could run into issues.</li><li><span style=\"color: var(--tw-prose-bold);\">Error Source</span>: The provided error message and code don't show an explicit relation. The error might not be directly due to this function or component but can be due to how the updated state is used in rendering or in other side effects. Check if the updated <code style=\"color: var(--tw-prose-code);\">dataInput</code> or <code style=\"color: var(--tw-prose-code);\">secOpen</code> states are being used somewhere that could throw an error.</li><li><span style=\"color: var(--tw-prose-bold);\">Event Parameter</span>: The <code style=\"color: var(--tw-prose-code);\">onChange</code> event of <code style=\"color: var(--tw-prose-code);\">Flatpickr</code> returns an array of selected dates, which you're passing directly to <code style=\"color: var(--tw-prose-code);\">handleChooseDateDl</code>. Ensure that the returned date array is as expected (i.e., it contains the date values you're anticipating).</li><li><span style=\"color: var(--tw-prose-bold);\">Error Handling</span>: If there are other asynchronous operations within <code style=\"color: var(--tw-prose-code);\">handleChooseDateDl</code> or elsewhere that might fail, ensure you have error handling in place to catch and manage those scenarios.</li><li><span style=\"color: var(--tw-prose-bold);\">Flatpickr Versions</span>: Ensure that the version of <code style=\"color: var(--tw-prose-code);\">Flatpickr</code> you're using is compatible with your React version and doesn't have any known issues.</li></ol><p><br></p>"
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
                        note={data.note}
                        subTask={data.sub}
                        />
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
        note = "",
        subTask = [] } = p
    const { modal, openModal }  = useContext(ModalContext)

    const [checked, setChecked] = useState(false)
    const [subOpen, setSubOpen] = useState(false)
    const [sub, setSub] = useState(subTask)
    const [subDone, setSubDone] = useState(0)

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
      
    const updateSubCheck = (id, check) => {
        const newSub = [...sub]; //prevent mutating
        const index = newSub.map(e => e.id).indexOf(id);
        newSub[index].done = check;
        setSub(newSub); 
    }

    const deleteSubTask = (id) => {
        let newSub = [...sub]; //prevent mutating
        newSub = newSub.filter(data => data.id !== id)
        setSub(newSub); 
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    const openSubTask = () => {
        setSubOpen(!subOpen)
    }

    const AddSub = (data) => {
        const newData = [...sub, data]
        setSub(newData)
    }

    const handleOpenDetail = () => {
        const data = {
            title,
            color,
            deadline,
            area,
            note,
        }
        openModal(title, data)
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
                    {sub.length > 0 && <span>({subDone}/{sub.length})</span>}
                    <span><Img.subTask/></span>
                </div>
                
                <div className={`card-option ${color ?"text-white" : ""}`}>
                    <Img.option/>
                    <span onClick={handleOpenDetail}><Img.arrowRight/></span>
                </div>
            </MainTask>

            {subOpen && 
            <Fragment>
                <SubTaskList>
                {sub && sub.map((sub, idx) => {
                    return <SubTask key={idx} id={sub.id} color={color} title={sub.title} done={sub.done} updateSubCheck={updateSubCheck} deleteSubTask={deleteSubTask}/> 
                })}
                </SubTaskList>

                <AddSubTask color={color} AddSub={AddSub} placeholder={sub.length > 0 ? "": "Thêm subtask"}/>    
            </Fragment>}

        </TaskCardContainer>
    )
}

const SubTask = (p) => {
    const { color, title, done, updateSubCheck, id, deleteSubTask } = p

    const [checked, setChecked] = useState(done)
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(title)

    useEffect(() => {
        setValue(title)
    }, [title])

    const inputStyle = {
        width:"100%",
        height:"35px",
        backgroundColor:"transparent",
        border: "none",
        fontSize: "1.2rem"
    }

    const handleCheck = (e) => {
        setChecked(!checked)

        const id = e.currentTarget.id
        updateSubCheck(id, !checked)
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

    const handleDel = (e) => {
        const id = e.currentTarget.getAttribute("name")
        deleteSubTask(id)
    }
    
    return (
    <SubTaskContainer className={`item ${color ?"text-white" : ""}`}>
        <div className="title-wrapper">
        <span id={id} onClick={handleCheck} className={`${checked ? "blur" : ""}`}>{checked ? <Img.checkboxChecked /> : <Img.checkbox/>}</span>
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
            <span name={id} onClick={handleDel}><Img.deleteIcon/></span>
        </div>
    </SubTaskContainer>
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
        line-height: 1;
        svg {
            width: 17.8px;
            cursor: pointer;
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
        width: 18px;
    }
`