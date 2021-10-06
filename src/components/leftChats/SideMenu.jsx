import React, { useContext, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import { GoogleLogout } from 'react-google-login';
import { cID } from '../account/Login';
import { AcccountContext } from '../../store/AcccountContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    items : {
        fontSize: 14,
        padding : '15px 60px 5px 24px',
        color: '#4A4A4A',
    },
    logout : {
        border: 'none !important',
        boxShadow: 'none !important',
        '& > *': {
            padding : '0px !important',
        }
    }
})

export const SideMenu = () => {
    const myStyle = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const {setAcc} = useContext(AcccountContext);
    const onLogoutSucc = () => {
        alert('Logout Success');
        console.clear();
        setAcc(null);
    }
    return (
        <>
            <MoreVertIcon onClick={(e) => setAnchorEl(e.currentTarget)} />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(false)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={myStyle.items} onClick={() => setAnchorEl(false)}>Profile</MenuItem>
                <MenuItem className={myStyle.items} onClick={() => setAnchorEl(false)}>My account</MenuItem>
                <MenuItem className={myStyle.items} onClick={() => setAnchorEl(false)}>
                    <GoogleLogout
                    clientId={`${cID}`}
                    buttonText='LogOut'
                    onLogoutSuccess={onLogoutSucc}
                    className={myStyle.logout}
                    />
                </MenuItem>
            </Menu>
        </>
    )
}
