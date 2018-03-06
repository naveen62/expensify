import {addExpense, editExpense, removeExpense} from '../../actions/expense'

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
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 1000,
        note: 'this was last month rent'
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
test('should add expense when argus not provided', () => {
    const data = addExpense();
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data.expense,
            id: expect.any(String)
        }
    })
})