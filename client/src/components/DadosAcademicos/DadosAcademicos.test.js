import React from 'react';
import { shallow } from 'enzyme';
import DadosAcademicos from './DadosAcademicos';

describe('<DadosAcademicos />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DadosAcademicos />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
