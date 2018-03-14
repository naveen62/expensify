import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props) => {
  return(
    <div className='box-layout'>
      <div className='box-layout__box'>
      <h1 className='box-layout__title' >Expensify</h1>
      <p>Time to get expenses control</p>
      <button className='box-layout__button' onClick={() => {
          props.dispatch(startLogin()).then(() => {
            console.log('login succsfull')
          })
        }} >Login With Google</button>
      </div>
    </div> 
  )  
}
export default connect()(Login)

