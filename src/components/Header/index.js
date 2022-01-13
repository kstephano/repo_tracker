import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';

import './style.css';

const Header = ({ login, avatar_url, html_url, email }) => {
    
    return (
        <div className='user-header'>
            <div className='header-content'>
                <img src={avatar_url} alt='Home Button'/>
                <div className='header-text-container'>
                    <h1>{login}</h1>
                    <div className='flex-row'>
                        <div className='header-item'>
                            {avatar_url && <LinkIcon />}
                            
                            <a className='github-link' href={html_url} target="_blank">{html_url}</a>
                        </div>

                        { email && <div className='header-item'>
                            <EmailIcon />
                            <p>{email}</p>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

                      