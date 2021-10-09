import React from 'react'
import { Header } from './Header'
import { ParticularChat } from './ParticularChat'
import { SearchBar } from './SearchBar'

export const ChatMenu = () => {
    return (
        <>
            <Header/>
            <SearchBar/>
            <ParticularChat/>
        </>
    )
}
