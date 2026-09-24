import { createContext } from "react-router";
import { useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({chidren}) =>{
    
    const [productsData, setProductsData] = useState([])
    return <MyStore.Provider value = {{productsData, setProductsData}}>{chidren}</MyStore.Provider>
}