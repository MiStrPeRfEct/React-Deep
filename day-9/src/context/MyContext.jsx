import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children}) => {

    const [centralValue, setCentralValue] = useState("mai context se hu")
    return <MyStore.Provider value = {centralValue}></MyStore.Provider>
}
