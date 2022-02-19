import React from 'react';
import './Nav.css'

export default function navbar() {
    return <div className='navbar flex-row space-between'>
        <h1>MCP</h1>
        <div className='align-center search-input-wrapper'>
            <label htmlFor='search-input'>Find your coin</label>
            <input type='search' className='search-input' id='search-input'></input>
        </div>
    </div>
}