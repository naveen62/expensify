import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


import configStore from './store/configStore';

import AppRouter, {history} from './routes/AppRouter';

// actions
import {startSetExpenses, setExpenses} from './actions/expense';
import {removeExpense} from './actions/expense'
import {login, logout} from './actions/auth';
import getVisibility from './selectors/expenses';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configStore();

 
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'))
        hasRendered = true
    }
}
ReactDOM.render(<LoadingPage />, document.querySelector('#app'))


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then((snapshot) => {
            const expensesData = []
            snapshot.forEach((expense) => {
                expensesData.push({
                    id: expense.key,
                    ...expense.val()
                })
            })
            store.dispatch(setExpenses(expensesData));
            renderApp()
            if(history.location.pathname == '/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})