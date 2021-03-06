import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
 return ( <Route {...rest} component={(props) => {
     return (
        isAuth ? (
            <div>
            <Header />
            <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )
 }} />
 )
}
const mapStateToProps = (state) => {
    return {
        isAuth: !!state.auth.uid
    }
}
export default connect(mapStateToProps)(PrivateRoute)