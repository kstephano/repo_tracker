import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, NavBar, RepoList } from '../../components';
import { getRepos } from '../../helpers/index';
import './style.css';

const Repo = () => {
    const result  = useSelector(state => state.result);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    const search = query => dispatch(getRepos(query));

    const renderResult = () => loading ? <p className='loading message'>Loading . . .</p> : <RepoList repositories={result.repos} />

    console.log(result)
    return (
        <>
            <NavBar getRepos={search}/>
            <div className='main-container'>
                { result.repos.length > 0 && !error && <Header login={result.user.login} avatar_url={result.user.avatar_url} html_url={result.user.html_url} email={result.user.email} /> }
                { error ? <p className='error-message message'>Invalid GitHub user name. {console.log(error)}</p> : renderResult() }
            </div>
        </>
    )
}

export default Repo;