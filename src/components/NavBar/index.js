import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css';
import searchIcon from '../../assets/search-icon.png';

const NavBar = ({ getRepos }) => {
    const [ user, setUser ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        getRepos(user);
        setUser("");
    }

    const updateInput = e => {
        setUser(e.target.value);
    }

    return (
    <div className='wrap-bar'>
        <div className='github-icon'>
            <GitHubIcon onClick={() => window.location.reload(false)}/>
        </div>
        <form onSubmit={handleSubmit} role="form">
            <input id="user-input" aria-label='user' type="text" placeholder="Enter a username" onChange={updateInput} value={user} required></input>
            <input src={searchIcon} type="image" id="search-icon" alt="Submit"></input>
        </form>
    </div>
    )
}

export default NavBar;


