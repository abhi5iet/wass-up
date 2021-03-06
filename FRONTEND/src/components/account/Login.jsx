import { useContext } from 'react';
import { Dialog, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles, withStyles } from '@mui/styles';
import { GoogleLogin } from 'react-google-login';
import { AcccountContext } from '../../store/AcccountContext';
import { addUser } from '../../Servers/appi';

export const cID = process.env.REACT_APP_G_CLIENT_ID;
export const stylle = {
    dialogg: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
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
    const { setAcc } = useContext(AcccountContext);
    const onLogSucc = async (res) => {
        setAcc(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLogFail = (res) => {
        console.log('Login Failed', res);
    }

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
                <Box style={{ position: 'relative' }}>
                    <img src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="qrCode" className={sttyle.qrCode} />
                    <Box style={{ position: 'absolute', left: '50%', top: '50%' }}>
                        <GoogleLogin
                            clientId={`${cID}`}
                            buttonText=''
                            isSignedIn={true}
                            onSuccess={onLogSucc}
                            onFailure={onLogFail}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(stylle)(Login);