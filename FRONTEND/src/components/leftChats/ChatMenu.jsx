import React, { useState } from 'react'
import { Header } from './Header'
import { ParticularChats } from './ParticularChats'
import { SearchBar } from './SearchBar'

export const ChatMenu = () => {
    const [text, setText] = useState('');
    return (
        <>
            <Header/>
            <SearchBar setText={setText}/>
            <ParticularChats text={text}/>
        </>
    )
}
