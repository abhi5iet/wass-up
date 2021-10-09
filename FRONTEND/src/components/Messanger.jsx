import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Login from './account/Login';
import { AcccountContext } from '../store/AcccountContext';
import ChatNow from './ChatNow';

const StyledBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    backgroundColor: '#DCDCDC',
}));

export const Messanger = () => {
    const { acc } = useContext(AcccountContext);

    const StyledAppBar = styled(AppBar)(({ theme }) => ({
        height: acc ? 115 : 200,
        backgroundColor: '#128C7E',
        boxShadow: 'none',
    }));
    
    return (
        <StyledBox>
            <StyledAppBar position="static">
                <Toolbar>
                </Toolbar>
            </StyledAppBar>
            {acc ? <ChatNow/> : <Login />}
        </StyledBox>
    )
}