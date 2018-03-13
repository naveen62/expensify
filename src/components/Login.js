import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props) => {
  return(
    <div>
        <button onClick={() => {
          props.dispatch(startLogin()).then(() => {
            console.log('login succsfull')
          })
        }} >Login</button>
    </div> 
  )  
}
export default connect()(Login)

