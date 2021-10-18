import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import React from 'react'

const useStyles = makeStyles({
    component : {
        backgroundColor: '#F8F9FA',
        height: '100%',
        padding: '50px 0px',
        textAlign: 'center',
        
    },
    image: {
        width: '420px'
    }
})

export const EmptyChat = () => {
    const myStyles = useStyles();
    const url = 'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';
    return (
        <Box className={myStyles.component}>
            <img className={myStyles.image} src={url} alt="empty" />
        </Box>
    )
}
