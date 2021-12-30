import React from 'react';
import NewsCard from './NewsCard';
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it('should render News card component', () => {
    const spy = jest.spyOn(global.console, 'error')
    const props = {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez"
    }
    
    const app = mount( 
        <NewsCard {...props}/>,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})
