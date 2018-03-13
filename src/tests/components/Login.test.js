import React from 'react';
import {shallow} from 'enzyme'
import Login from '../../components/Login';

test('testing login snap', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper).toMatchSnapshot()
})
test('should call startLogout on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled()
})