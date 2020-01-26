import React,{useState} from "react";

export const HistoryContext = React.createContext()
export const HistoryProvider = props =>{
    const [routerHistory,setRouterHistory] = useState(null)

    return(
        <HistoryContext.Provider
            value={{
                routerHistory,
                setRouterHistory
            }}
        >
            {props.children}
        </HistoryContext.Provider>
    )
}