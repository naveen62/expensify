import {Router, Route, Switch,} from 'react-router-dom'
import React from 'react';
import createHistory from 'history/createBrowserHistory'

import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Expense from '../components/Expennse';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
    <div>
    <Switch>
        <PublicRoute path='/' component={Login} exact={true} />
        <PrivateRoute path='/dashboard' component={Expense} />
        <PrivateRoute path='/create' component={(props) => {
            return (<AddExpense {...props}/>)    
        }} />
        <PrivateRoute path='/edit/:id' component={EditExpense} />
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)
export default AppRouter;