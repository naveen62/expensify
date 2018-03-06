import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react';

import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Expense from '../components/Expennse';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route path='/' component={Expense} exact={true}    />
        <Route path='/create' component={AddExpense} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)
export default AppRouter;