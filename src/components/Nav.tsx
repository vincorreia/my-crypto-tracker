import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function navbar() {
    return <div className='navbar flex-row justify-center'>
        <Link to="/">
            <h1>My Crypto Tracker</h1>
        </Link>
    </div>
}