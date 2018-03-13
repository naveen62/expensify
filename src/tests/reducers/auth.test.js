import authReducer from '../../reducers/auth';

test('should returen obj', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: '123abc'
    })
})
test('should return empty obj when logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({}, action);
    expect(state).toEqual({})
})