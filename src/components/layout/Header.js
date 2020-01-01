import React from 'react'

export default function Header() {
    return (
        <header style={header_style}>
            <h1>
                TodoList
            </h1>
        </header>
    )
}


const header_style = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}