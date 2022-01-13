import React, { useState } from 'react';
import './style.css';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { borderBottom } from '@mui/system';
import { slotShouldForwardProp } from '@mui/material/styles/styled';

const RepoItem = ({ repository }) => {
    const [ showInfo, setShowInfo ] = useState(false);
    console.log(repository);

    return (
        <Card className ='card-wrapper' style={{ borderBottom: "1px solid black" }}>
            <Card.Title> 
                <h3 className="repo-link" onClick= {() => window.open(repository.html_url, "_blank")} > {repository.full_name} </h3> 
                { !showInfo && <ExpandMoreIcon onClick={() => setShowInfo(showInfo => !showInfo)} style={{ cursor: "pointer" }} /> }
                { showInfo && <ExpandLessIcon onClick={() => setShowInfo(showInfo => !showInfo)} style={{ cursor: "pointer" }}/> }
            </Card.Title>
            <Card.Body>
                { showInfo && repository.description != null && <p className='repo-description'>{repository.description}</p> }
                { showInfo && repository.description === null && <p className='repo-description'>No description available.</p>}
                <div className='repo-info'>
                    <div className='count-container'>
                        <StarOutlineIcon /> 
                        <p>{repository.stargazers_count}</p> 
                    </div>
                    <div className='count-container'>
                        <AltRouteIcon /> 
                        <p>{repository.forks_count} </p>
                    </div>
                    <div className='count-container'>
                        <ErrorOutlineIcon /> 
                        <p>{repository.open_issues_count}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )  
}

export default RepoItem;




