import {login, logout} from '../../actions/auth';

test('should dispatch login user', () => {
    const action = login('123abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    })
})
test('should dispatch logout user', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
