import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '', 
    note = '', 
    amount = "", 
    createdAt = ''
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}
// SET_TEXT
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FLITER',
    filter: {
        text,
    }
})
// SORTBY_AMOUNT
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
    sort: 'amount'
}) 
// SORTBY_DATE
const sortByDate = () => ({
    type: 'SORTBY_DATE',
    sort: 'date'
})
// START_DATE
const setStartDate = (date = undefined) => ({
    type: 'START_DATE',
    date: {
        startDate: date
    }
})
// END_DATE
const setEndDate = (date = undefined) => ({
    type: 'END_DATE',
    date
})

// expense
const expenseReducerState = [];

const expenseReducer = (state = expenseReducerState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((id) => action.id != id.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state
    }
}
// filter
const filterReducerState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FLITER':
            return {
                ...state,
                ...action.filter
            }
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: action.sort
            }
        case 'SORTBY_DATE':
            return{
                ...state,
                sortBy: action.sort
            }
        case 'START_DATE':
            return {
                ...state,
                ...action.date
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}
const getVisiableExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' ||expense.createdAt <=endDate;
        const textMatch = expense.description.includes(text) || expense.description.toLowerCase().includes(text)

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);
store.subscribe(() => {
    const state = store.getState()
    const visiableExpenses = getVisiableExpenses(state.expenses, state.filter);
    console.log(visiableExpenses)
    // console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1234));
// store.dispatch(setEndDate());