import { createContext, useState } from "react";
import data from "../assets/photos/background.json"

const AppearanceContext = createContext()

export const AppearanceProvider = (p) => {
    const { children } = p
    const [appearance, setAppearance] = useState(data.background[0])


    const contextValue = {
        appearance, setAppearance
    }

    return (
        <AppearanceContext.Provider value={contextValue}>
            {children}
        </AppearanceContext.Provider>
    )
}

export default AppearanceContext