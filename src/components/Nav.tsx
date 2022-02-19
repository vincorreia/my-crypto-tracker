import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function navbar() {
    return <div className='navbar flex-row space-between'>
        <Link to="/">
            <h1>MCP</h1>
        </Link>
        <div className='align-center search-input-wrapper'>
            <label htmlFor='search-input'>Find your coin</label>
            <input type='search' className='search-input' id='search-input'></input>
        </div>
    </div>
}