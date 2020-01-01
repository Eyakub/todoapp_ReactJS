import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header style={header_style}>
            <h1>
                TodoList
            </h1>
            <Link style={link_style} to="/">Home</Link> | <Link style={link_style}  to='/about'>About</Link>
        </header>
    )
}


const header_style = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const link_style = {
    color: '#fff',
    textDecoration: 'none',
}