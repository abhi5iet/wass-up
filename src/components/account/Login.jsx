import React from 'react';
import { Dialog, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles, withStyles } from '@mui/styles';

const style = {
    dialogg: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
    }
}

const useStyles = makeStyles({
    comp: {
        display: 'flex',
    },
    lftComp: {
        padding: '56px 0px 56px 56px',
    },
    qrCode: {
        padding: '50px 0px 0px 50px',
        height: 264,
        width: 264
    },
    title: {
        marginBottom: 0,
        fontSize: 26,
        fontWeight: 300,
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        color: '#525252',
    },
    listt: {
        '& > *': {
            padding: 0,
            fontSize: 18,
            marginTop: 15,
            color: '#4a4a4a',
            lineHeight: '28px',
        }
    }
})

const Login = ({ classes }) => {
    const sttyle = useStyles();
    return (
        <Dialog open={true} classes={{ paper: classes.dialogg }} BackdropProps={{ style: { backgroundColor: 'unset' } }}>
            <Box className={sttyle.comp}>
                <Box className={sttyle.lftComp}>
                    <Typography className={sttyle.title}>To Use WhatsaApp on your computer :</Typography>
                    <List className={sttyle.listt}>
                        <ListItem>1. Open WhatsApp On your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen and capture the code</ListItem>
                    </List>
                </Box>
                <Box>
                    <img src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="qrCode" className={sttyle.qrCode} />
                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);