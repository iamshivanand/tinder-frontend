import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
           {/* <h2>This is the header</h2>  */}
           <IconButton>
                <PersonIcon fontSize="large" className="hearder__icon"/>
           </IconButton>
           <img 
                className="header_logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="hearder-logo"
           />
           <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
           </IconButton>
           
        </div>
    )
}

export default Header
