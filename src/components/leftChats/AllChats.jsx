import React from 'react'
import { Header } from './Header'
import { ParticularChat } from './ParticularChat'
import { SearchBar } from './SearchBar'

export const AllChats = () => {
    return (
        <>
            <Header/>
            <SearchBar/>
            <ParticularChat/>
        </>
    )
}
