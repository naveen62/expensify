import {addExpense, editExpense, removeExpense, startAddExpense, startSetExpenses} from '../../actions/expense'
import expenses from '../fixtures/expenses'
import configMock from 'redux-mock-store';
import thunk from 'redux-thunk'
import db from '../../firebase/firebase';
import {setExpenses} from '../../actions/expense'

const createMock = configMock([thunk])

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({id, description, amount, note, createdAt}) => {
        expenseData[id] = {description, amount, note, createdAt}
    })
    db.ref('expenses').set(expenseData).then(() => {
        done()
    })
})

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
test('should set up expense object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
         type: 'SET_EXPENSES',
         expenses
    })
})
test('should fetch the expenses from firebase', () => {
    const store = createMock({});
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expense
        })
        done();
    })
})