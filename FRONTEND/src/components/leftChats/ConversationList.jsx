import React, { useEffect, useState, useContext } from 'react'
import { getUsers } from '../../Servers/appi';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { AcccountContext } from '../../store/AcccountContext';
import { ConversationItem } from './ConversationItem';

const useStyles = makeStyles({
    mainBox: {
        height: '81vh',
        overflow: 'overlay'
    }
})

export const ConversationList = ({ text }) => {
    const myStyles = useStyles();
    const [users, setUsers] = useState([]);
    const { acc, socket, setActiveUser } = useContext(AcccountContext);
    useEffect(() => {
        async function fetchIt() {
            const data = await getUsers();
            const filteredData = data.data.filter(el => el.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchIt();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', acc.googleId);
        socket.current.on('getUsers', users => {
            setActiveUser(users);
        })
    }, [acc])

    return (
        <Box className={myStyles.mainBox}>
            {users.map(item => item.googleId !== acc.googleId && <ConversationItem key={item.googleId} user={item} />)}
        </Box>
    )
}
