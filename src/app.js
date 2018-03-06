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

 
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))

