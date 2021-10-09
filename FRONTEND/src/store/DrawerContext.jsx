import React, { createContext, useState } from 'react'

export const DrawerContext = createContext(null);

export const DrawerContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <DrawerContext.Provider value={{open, setOpen}} >
            {children}
        </DrawerContext.Provider>
    )
}