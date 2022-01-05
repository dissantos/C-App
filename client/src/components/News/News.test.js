import React from 'react';
import News from './News';
import toJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it('should render News page', () => {
    const spy = jest.spyOn(global.console, 'error')
    
    const app = mount( 
        <News category="Graduação" title="Edital seleciona alunos especiais para Mestrado em Automação e Sistemas" url="https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-em-automacao-e-sistemas/"/>,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})