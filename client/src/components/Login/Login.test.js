import React from 'react'
import toJson from 'enzyme-to-json'
import Login from './Login'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it('should render Login page', () => {
    const spy = jest.spyOn(global.console, 'error')
    
    const app = mount( 
        <Login/>,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})