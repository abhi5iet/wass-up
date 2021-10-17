import { Box } from '@mui/system'
import React from 'react'
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'

export const Chat = () => {
    return (
        <Box>
            <ChatHeader/>
            <Messages/>
        </Box>
    )
}
