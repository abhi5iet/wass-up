import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 18,
    backgroundColor: '#F6F6F6',
    margin: '0px 13px',
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    color: '#919191',
    display: 'flex',
    alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%',
    },
}));

export const SearchBar = () => {
    return (
        <Box style={{backgroundColor: '#F6F6F6', height: '45px', display:'flex', alignItems: 'center'}}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon fontSize='small' />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search or start a new chat"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
    )
};