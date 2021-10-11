import React, { useEffect, useState, useContext } from 'react'
import { getUsers } from '../../Servers/appi';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { AcccountContext } from '../../store/AcccountContext';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    dpp: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0 14px',
    },
    comp: {
        display: 'flex',
        height: 40,
        cursor: 'pointer',
        padding: '13px 0px'
    },
    mainBox: {
        height: '81vh',
        overflow: 'overlay'
    }
})

export const ParticularChats = ({text}) => {
    const myStyles = useStyles();
    const [users, setUsers] = useState([]);
    const { acc } = useContext(AcccountContext);
    useEffect(() => {
        async function fetchIt() {
            const data = await getUsers();
            const filteredData = data.data.data.filter(el => el.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchIt();
    }, [text])
    return (
        <Box className={myStyles.mainBox}>
            {users.map(item => item.googleId !== acc.googleId && (
                <Box className={myStyles.comp}>
                    <Box>
                        <img className={myStyles.dpp} src={item.imageUrl} alt="DPP" />
                    </Box>
                    <Box>
                        <Typography style={{paddingTop:'7px'}}>{item.name}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
