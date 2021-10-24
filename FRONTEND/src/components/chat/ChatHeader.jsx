import MoreVert from '@mui/icons-material/MoreVert';
import Search from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AcccountContext } from '../../store/AcccountContext';

const useStyles = makeStyles({
    hddr: {
        display: 'flex',
        height: 35,
        backgroundColor: '#EDEDED',
        padding: '10px 16px',
        alignItems: 'center'
    },
    dpp: {
        width: 37,
        height: 37,
        borderRadius: '50%',
        padding: '0px 2px',
    },
    name: {
        marginLeft: 10,
    },
    status: {
        fontSize: 12,
        marginLeft: 10,
        color: 'rgb(0, 0, 0, 0.6)',
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    }
})

export const ChatHeader = ({ person }) => {
    const myStyles = useStyles();
    const { activeUser } = useContext(AcccountContext);
    return (
        <Box className={myStyles.hddr}>
            <img className={myStyles.dpp} src={person.imageUrl} alt="dpp" />
            <Box>
                <Typography className={myStyles.name}>{person.name}</Typography>
                <Typography className={myStyles.status}>{activeUser?.find(user => user.userId === person.googleId) ? "Online" : "Offline"}</Typography>
            </Box>
            <Box className={myStyles.rightContainer}>
                <Search />
                <MoreVert />
            </Box>
        </Box>
    )
}
