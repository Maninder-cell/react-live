import React from 'react';
import { NavLink } from 'react-router-dom';
 
function Nav(){
    return(
        <>
            <NavLink exact className='op' activeClassName="kl" to="/">Head</NavLink>
            <NavLink exact className='op' activeClassName="kl" to="/sec/joi/23"> Body</NavLink>
        </>
    )
}

export default Nav;