import React from 'react';
import { Dialog } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import { stylle } from './account/Login';
import { Box } from '@mui/system';
import { ChatMenu } from './leftChats/ChatMenu';
import { Chat } from './chat/Chat';

const chatStyle = {...stylle, dialogg : {...stylle.dialogg, width : '91%', marginTop : '30px'}}

const useStyles = makeStyles({
    comp: {
        display: 'flex',
    },
    lftComp: {
        minWidth: 380,
    },
    rytComp: {
        borderLeft : `1px solid rgba(0, 0, 0, 0.14)`,
        width: '70%',
        minWidth: '300',
        height: '100%'
    }
});

const ChatNow = ({classes}) => {
    const myCls = useStyles();
    return (
        <Dialog open={true} classes={{ paper: classes.dialogg }} BackdropProps={{ style: { backgroundColor: 'unset' } }}>
            <Box className={myCls.comp}>
                <Box className={myCls.lftComp}><ChatMenu/></Box>
                <Box className={myCls.rytComp}><Chat/></Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(chatStyle)(ChatNow);