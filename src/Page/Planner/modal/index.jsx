import Modal from "../../../Component/Modal";
import { Img } from "../../../Assets/svg";
import { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../../Context/Modal.conetxt";
import 'react-quill/dist/quill.snow.css';
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/flatpickr.css";
import { isDateString } from "../../../Util/util";
import DOMPurify from 'dompurify';
import TaskContext from "../../../Context/Task.context";
import { nanoid } from "nanoid";
import TaskContent from "./task";


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
        name: "spirit",
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
    const { modal  }  = useContext(ModalContext)
    const [editMode, setEditMode] = useState(!!modal.content)
    const [dataInput, setDataInput] = useState({})
    
    const [areaData, setArea] = useState({
        health: false,
        play: false,
        spirit: false,
        environment: false,
        work: false,
        wealth: false,
        growth: false,
        relationship: false,
    })

    useEffect(() => {
        if(modal.content !== null) 
            setEditMode(true)
        else 
            setEditMode(false)
    },[modal.content])
    
    useEffect(() => {
        const area = {
            health: false,
            play: false,
            spirit: false,
            environment: false,
            work: false,
            wealth: false,
            growth: false,
            relationship: false,
        }

        if(modal.content !== null) {
            
            setDataInput({
                title: modal?.content?.title || "",
                color: modal?.content?.color || "",
                area: modal?.content?.area || [],
                deadline: modal?.content?.deadline,
                note: modal?.content?.note || "",
            })


            const relate = modal.content.area.reduce((prev, next) => {
                return {...prev, [next]: true}
            }, area)
            setArea(relate)
        } else {
            setDataInput({
                title: "",
                color: "",
                note: "",
                // deadline: "",
                area: [],
                sub: []
            })
            setArea(area)
        }

        return () => setDataInput({})
    }, [editMode, modal.content]);



    // useEffect(() => {
    //     if(modal.content) {
    //         const relate = modal.content.area.forEach(area => { data[area] = true })
    //         setArea(relate)
    //         console.log("relate", relate)
    //     }
    // }, [editMode]);


    return <ModalContent 
                mode={ editMode ? "edit" : "add"}
                dataInput={ dataInput }
                areaData={ areaData }
                setDataInput = {setDataInput}
                // areaData={area} 
                />
}

const ModalContent = (p) => {
    const { dataInput, setDataInput, mode, areaData } = p

    const { modal, closeModal }  = useContext(ModalContext)
    const { task, setTask, loading }  = useContext(TaskContext)
    const [valid, setValid] = useState(true)

    const sanitizedHTML = DOMPurify.sanitize(dataInput.note);
    // const [dataInput, setDataInput] = useState(data)
    const radioData = [
        {
            id: "today",
            value: "Nay"
        },
        {
            id: "tomorrow",
            value: "Mai"
        },
        {
            id: "someday",
            value: "Ngày nào đó"
        },
        {
            id: "specific-day",
            value: "Chọn ngày"
        },
    ]

    const [area, setArea] = useState(areaData)
    
    const [hex, setHex] = useState(dataInput.color);
    const [secOpen, setSecOpen] = useState({
        color: true,
        area: true,
        note: true,
        deadline: true
    });
    const fp = useRef(null);

    
    useEffect(() => {
        console.log("listen event close modal")
        window.addEventListener('modalClosing', closeModalProcess);

        return () => {
            window.removeEventListener('modalClosing', closeModalProcess);
        };
    }, []);

    useEffect(() => {
        areaData && setArea(areaData)
    }, [areaData]);

    useEffect(() => {
        if(dataInput) {
            dataInput.color && setHex(dataInput.color);
        }
    }, [dataInput]);

    const openSec = async (e) => {
        const name = e.currentTarget.getAttribute("name")
        console.log(name)

        await setSecOpen({...secOpen, [name]: !secOpen[name] })
        if(name === "deadline" && isDateString(dataInput.deadline))  {
            await deadlineHdle.openFP()
        }
    }

    const handleInput = (e, from = null) => {

        const name = from || e.target.name
        const value = e.target.value

        console.log(name, value)
        setDataInput({...dataInput, [name]: value })
    }

    const handleChooseArea = (name) => {
        console.log(name)
        let newArea = {...area, [name]: !area[name] };
        setArea(newArea)
    
        const newData = Object.keys(newArea).reduce((prev, next) => {
            if(newArea[next]) {
                return [...prev, next]
            } else {
                return prev
            }
        }, [])
        console.log("newData", newData)
    
        setDataInput({...dataInput, area: newData })
    }

    const deadlineHdle = {
        openFP: () => { // open flatpicker
            document.querySelector(".flat-picker-wrapper").style.display = "flex"
        },
        closeFP: () => { // close flatpicker
            document.querySelector(".flat-picker-wrapper").style.display = "none"
        },
        choseType: (e, mode) => { //handle Choose type of deadline

            console.log(e.target.id)
            const id = e.target.id
            let dateStr = id
            if(id === "") return 
            if(id === "today") {
                const today = new Date()
                today.setHours(23,59,59,0)
                dateStr = today
            }else if(id === "tomorrow") {
                const today = new Date()
                const tomorrow = new Date(today.setHours(0,0,0,0))
                tomorrow.setDate(tomorrow.getDate() + 1)
    
                dateStr = tomorrow
            }
            else if(id === "specific-day") {
                deadlineHdle.openFP()
            } else {
                deadlineHdle.closeFP()
                if(mode === "edit") setSecOpen({...secOpen, deadline: !secOpen.deadline })
            }
    
            console.log(dateStr)
            setDataInput({...dataInput, deadline: dateStr.toString() })
        },
        choseDateFP: (date) => { // handle choose date from flatpicker
            setDataInput(prevData => ({ ...prevData, deadline: date[0].toString() }));
            console.log(date[0].toString())
            fp.current.flatpickr.close();
        }
    }

    const closeModalProcess = () => {
        setDataInput({})
        setSecOpen({
            color: true,
            area: true,
            note: true,
            deadline: true
        })
    }

    const checkValid = () => {
        if(typeof(dataInput.title) === "undefined" || dataInput.title.trim() === "") {
            setValid(false)
            return false
        }
        return true
    }
    // submit
    const handleSave = async () => {
        console.log("dataInput", dataInput)
        const valid = checkValid()

        console.log(valid)

        if(valid){
            setValid(true)
            await setTask(prevData => {
                if(mode === "edit") {
                    const newData = prevData.map(data => {
                        if(data.id === modal.content.id) {
                            return {...dataInput, id: data.id, sub: data.sub }
                        } else {
                            return data
                        }
                    })
                    return newData
                } else {
                    const newData = {...dataInput}
                    if(typeof(newData.deadline) === "undefined") {
                        const today = new Date()
                        today.setHours(23,59,59,0)

                        newData.deadline = today.toString()
                    }
                    return [...prevData, {...newData, id: nanoid(), sub: [] }]
                }
            })
            closeModal()
        }
    }

    return ( 
    <Modal >
        <TaskContent
        
        />
    </Modal>
     );
}

 



 
export default TaskModal;