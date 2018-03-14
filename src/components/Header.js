import React from 'react';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => {
    return (
        <div>
        <header className='header' >
        <div className='content-container' >
            <div className='header__content'>
            <Link className='header__title'  to="/dashboard">
                <h1>Expensify</h1>
            </Link>
            <button className='page-header__button' onClick={startLogout}>Logout</button>
            </div>
        </div>
        </header>
        </div>
    )
}
const mapToprops = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}
export default connect(undefined, mapToprops)(Header);