import React from 'react';
import MainNews from './MainNews';
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it('should render Mains news page', () => {
    const spy = jest.spyOn(global.console, 'error')
    
    const app = mount( 
        <MainNews/>,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})
