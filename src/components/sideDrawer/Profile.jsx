import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { AcccountContext } from '../../store/AcccountContext'

const useStyles = makeStyles({
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
    dpp: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0px'
    },
    nameCont: {
        padding: '12px 30px 2px',
        background: '#FFFFFF',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14,
            color: '#009688',
        },
        '& :last-child': {
            margin: '14px 0px',
            color: '#4A4A4A',
        },
    },
    desc: {
       padding: '20px 20px 28px 30px',
       '& > *': {
           fontSize: 13,
           color: 'rgba(0, 0, 0, 0.45)'
       }
    }
})

export const Profile = () => {
    const myStyle = useStyles();
    const {acc} = useContext(AcccountContext);
    return (
        <>
            <Box className={myStyle.imgCont}>
                <img className={myStyle.dpp} src={acc.imageUrl} alt="dpp" />
            </Box>
            <Box className={myStyle.nameCont}>
                <Typography>Your Name</Typography>
                <Typography>{acc.name}</Typography>
            </Box>
            <Box className={myStyle.desc}>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </Box>
            <Box className={myStyle.nameCont}>
                <Typography>About</Typography>
                <Typography>Hey There ! I'm using Wass-Up</Typography>
            </Box>
        </>
    )
}
