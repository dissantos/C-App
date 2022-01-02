import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Search />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
