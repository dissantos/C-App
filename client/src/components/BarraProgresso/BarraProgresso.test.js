import React from 'react';
import { shallow } from 'enzyme';
import BarraProgresso from './BarraProgresso';

describe('<BarraProgresso />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BarraProgresso />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
