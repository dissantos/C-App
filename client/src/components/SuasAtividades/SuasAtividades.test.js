import React from 'react';
import { shallow } from 'enzyme';
import SuasAtividades from './SuasAtividades';

describe('<SuasAtividades />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SuasAtividades />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
