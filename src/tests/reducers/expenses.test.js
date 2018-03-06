import moment from 'moment'
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]])
})
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})
test('should add new expense', () => {
    const addExpense = {
        id: '123abcn',
        description: 'service bill',
        note: '',
        amount: 500,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...addExpense
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toContainEqual(addExpense);
})
test('should edit expense by id', () => {
    const updates = {
        amount: 150
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    }
    const state = expenseReducer(expenses, action);
    expect(state[0].amount).toBe(150)
})
test('should edit expense by id', () => {
    const updates = {
        amount: 150
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '7',
        updates
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})


// const expenses = [{
//     id: '1',
//     description: 'gas',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     id: '3',
//     description: 'Credit card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }]