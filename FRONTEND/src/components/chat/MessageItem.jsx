import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AcccountContext } from '../../store/AcccountContext';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "#FFFFFF",
        padding: 5,
        maxWidth: '60%',
        display: 'flex',
        borderRadius: 10,
        width: 'fit-content',
        wordBreak: 'break-word',
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px',
    },
    time: {
        fontSize: 10,
        margin: 'auto',
        marginTop: 6,
        color: '#919191',
        wordBreak: 'keep-all'
    },
    own: {
        backgroundColor: '#DCF8C6',
        padding: 5,
        maxWidth: '60%',
        display: 'flex',
        borderRadius: 10,
        width: 'fit-content',
        wordBreak: 'break-word',
        marginLeft: 'auto',
    }
})

export const MessageItem = ({ message }) => {
    const myStyles = useStyles();
    const { acc } = useContext(AcccountContext);
    const formatDate = (date) => {
        return date < 10 ? '0' + date : date;
    }
    return (
        <Box className={acc.googleId === message.sender ? myStyles.own : myStyles.wrapper}>
            <Typography className={myStyles.text}>{message.text}</Typography>
            <Typography className={myStyles.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )
}
