import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdminWarning = (Wrapped) => {
    return (props) =>(
        <div>
            {props.isAdmin && <p>this is private info please dont share</p>}
            <Wrapped {...props}/>
        </div>
    ) 
}
const requireAuthentication = (Wrapped) => (
     (props) => (
        <div>
            {props.isAuth ? <Wrapped {...props}/> : <p>Please login to produce</p>}
        </div>

    )
)
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info='this is the detail' />, document.querySelector('#app'))
// ReactDOM.render(<AdminInfo isAuth={true} info='this is the detail' />, document.querySelector('#app'))