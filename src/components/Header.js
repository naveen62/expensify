import React from 'react';
import {NavLink} from  'react-router-dom';

const Header = () => {
    return (
        <div>
        <header>
            <h1>Expensify</h1>
            <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
            <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        </header>
        </div>
    )
}
export default Header;