import React from 'react'
import toJson from 'enzyme-to-json'
import Search from './Search'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it('should render Search page', () => {
    const spy = jest.spyOn(global.console, 'error')
    
    const app = mount( 
        <Search/>,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})