import React, { useState } from 'react'
import { Header } from './Header'
import { ConversationList } from './ConversationList'
import { SearchBar } from './SearchBar'

export const ChatMenu = () => {
    const [text, setText] = useState('');
    return (
        <>
            <Header/>
            <SearchBar setText={setText}/>
            <ConversationList text={text}/>
        </>
    )
}
