import { createContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';

export const AcccountContext = createContext(null);

export const AcccountContextProvider = ({ children }) => {
    const [acc, setAcc] = useState()
    const [activeUser, setActiveUser] = useState([]);
    const [msgFlag, setMsgFlag] = useState(false);
    const socket = useRef();
    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])
    return (
        <AcccountContext.Provider value={{ acc, setAcc, socket, activeUser, setActiveUser, msgFlag, setMsgFlag }} >
            {children}
        </AcccountContext.Provider>
    )
}
