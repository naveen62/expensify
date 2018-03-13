import uuid from 'uuid';
import db from '../firebase/firebase';

// ADD_EXPENSE

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData
        const expense = {description, note, amount, createdAt}

      return  db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
// REMOVE_EXPENSE
const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return db.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
        })
    }
}
// EDIT_EXPENSE
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}
const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
      return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const expensesData = []
       return db.ref(`users/${uid}/expenses`).once('value')
    }
}
export {
    addExpense,
    removeExpense,
    editExpense,
    startAddExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
}