import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
 return ( <Route {...rest} component={(props) => {
     return (
        isAuth ? (
            <div>
            <Component {...props} />
            </div>
        ) : (
            <Redirect to="/dashboard" />
        )
    )
 }} />
 )
}
const mapStateToProps = (state) => {
    return {
        isAuth: !state.auth.uid
    }
}
export default connect(mapStateToProps)(PublicRoute)