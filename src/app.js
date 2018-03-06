import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


import configStore from './store/configStore';

import AppRouter from './routes/AppRouter';

// actions
import {addExpense} from './actions/expense';
import {removeExpense} from './actions/expense'
import {setTextFilter} from './actions/filter';
import getVisibility from './selectors/expenses';

const store = configStore();

console.log( store.getState());

store.subscribe(() => {
    const state = store.getState();
    const getVisibilityExpense = getVisibility(state.expenses, state.filter);
    console.log(getVisibilityExpense);
})

store.dispatch(addExpense({description: 'Water bill', amount: 4500,}));
const re = store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500,}));
// setTimeout(() => {
//     store.dispatch(store.dispatch(removeExpense()));    
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))

