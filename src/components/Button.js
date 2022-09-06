import React from 'react';
import { Link } from 'react-router-dom';
import "../css/button.css";


export function Button () {
    return (
        <Link to='contact'>
            <button className='btn' href=''>
                Resume <i class="fas fa-external-link-alt"></i>   
            </button> 
        </Link>
    )
}