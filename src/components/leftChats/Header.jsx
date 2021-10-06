import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { AcccountContext } from '../../store/AcccountContext'
import ChatIcon from '@mui/icons-material/Chat';
import { makeStyles } from '@mui/styles';
import { SideMenu } from './SideMenu';

const useStyles = makeStyles({
    hddr : {
        backgroundColor: '#ededed',
        height: 35,
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
    },
    dpp : {
        height: 37,
        width: 37,
        borderRadius: '50%'
    },
    icons: {
        marginLeft: 'auto',
        '& > *' : {
            color: '#919191',
            padding: 8,
            marginLeft: 2,
        },
        '& :first-child' : {
            marginRight: 8,
            fontSize: 22,
            marginTop : 3,
        }
    }
})

export const Header = () => {
    const myStyle = useStyles();
    const { acc } = useContext(AcccountContext);
    return (
        <Box className={myStyle.hddr}>
            <img src={acc.imageUrl} alt="DP" className={myStyle.dpp} />
            <Box className={myStyle.icons}>
                <ChatIcon/>
                <SideMenu/>
            </Box>
        </Box>
    )
}
