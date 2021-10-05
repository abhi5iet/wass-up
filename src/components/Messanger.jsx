import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Login from './account/Login';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    height: 200,
    backgroundColor: '#00bfa5',
    boxShadow: 'none',
}));
const StyledBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    backgroundColor: '#DCDCDC',
}));

export const Messanger = () => {
    return (
        <StyledBox>
            <StyledAppBar position="static">
                <Toolbar>
                </Toolbar>
            </StyledAppBar>
            <Login />
        </StyledBox>
    )
}