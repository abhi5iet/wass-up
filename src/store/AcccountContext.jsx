import React, { createContext, useState } from 'react'

export const AcccountContext = createContext(null);

export const AcccountContextProvider = ({children}) => {
    const [acc, setAcc] = useState()
    return (
        <AcccountContext.Provider value={{acc, setAcc}} >
            {children}
        </AcccountContext.Provider>
    )
}
