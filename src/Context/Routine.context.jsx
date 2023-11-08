import { nanoid } from "nanoid";
import React, { createContext } from "react";

const RoutineContext = createContext()

const mockData = [
    {   
        "id": nanoid(),
        "title": "Đánh Cờ",
        "color": "#3c2eff",
        "area": [],
        "deadline": "Thu Oct 09 2023 17:23:12 GMT+0700 (Indochina Time)",
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
        "id": nanoid(),
        "title": "Chơi game",
        "color": "#372408",
        "area": [
            "health",
            "growth"
        ],
        "deadline": "Thu Oct 12 2023 17:23:12 GMT+0700 (Indochina Time)",
        "note": "\n<p>Chơi với bạn bè</p>\n",
    },
    {
        "id": nanoid(),
        "title": "test",
        "color": "#cb18a7",
        "area": [
            "health",
            "growth"
        ],
        "deadline": "Thu Oct 12 2023 17:23:12 GMT+0700 (Indochina Time)",
        "note": "\n<p>Chơi với bạn bè</p>\n",
    }
]

export const RoutineProvider = (p) => {
    const { children } = p


    const [routine, setRoutine] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        const routineData = setTimeout(() => {
            setRoutine(mockData)
            setLoading(false)
        }, 500)

        return () => clearTimeout(routineData)
        
    }, [])

    const valueContext = {
        routine, setRoutine, loading, setLoading
    }

    return (
        <RoutineContext.Provider value={valueContext}>
            {children}
        </RoutineContext.Provider>
    )
}

export default RoutineContext