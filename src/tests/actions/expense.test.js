import {addExpense, editExpense, removeExpense, startAddExpense} from '../../actions/expense'
import expenses from '../fixtures/expenses'
import configMock from 'redux-mock-store';
import thunk from 'redux-thunk'
import db from '../../firebase/firebase';

const createMock = configMock([thunk])

test('should remove an expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})
test('should edit an expense', () => {
    const action = editExpense('123abc', {desc: 'hello', amount: 500});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            desc: 'hello',
            amount: 500
        }
    })
})
test('should add expense when argus provided', () => {
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})
test('should add expense to database and store', (done) => {
    const store = createMock({})
    const expenseData = {
        description: 'Mouse',
        amount: 30,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
    })
    done();
})

// test('should add expense when argus not provided', () => {
//     const data = addExpense();
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...data.expense,
//             id: expect.any(String)
//         }
//     })
// })