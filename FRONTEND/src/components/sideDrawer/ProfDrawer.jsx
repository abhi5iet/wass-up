import { Drawer, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles';
import { DrawerContext } from '../../store/DrawerContext';
import { Profile } from './Profile';

const useStyles = makeStyles({
    hddr: {
        background: '#00bfa5',
        height: 97,
        color: '#fff',
        display: 'flex',
        '& > *' : {
            marginTop : 'auto',
            padding: 15,
            fontWeight: 600,
        }
    },
    compp: {
        background: '#ededed',
        height: '85%'
    }
})

export const ProfDrawer = () => {
    const {open, setOpen} = useContext(DrawerContext);
    const myStyle = useStyles()
    return (
        <Drawer anchor='left' style={{zIndex: 1400}} open={open} onClose={() => setOpen(false)}>
            <Box className={myStyle.hddr}>
                <ArrowBackIcon onClick={() => setOpen(false)} />
                <Typography>Profile</Typography>
            </Box>
            <Box className={myStyle.compp}>
                <Profile/>
            </Box>
        </Drawer>
    );
};