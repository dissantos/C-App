import React from 'react';
import { shallow } from 'enzyme';
import MainNews from './MainNews';

describe('<MainNews />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainNews />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
