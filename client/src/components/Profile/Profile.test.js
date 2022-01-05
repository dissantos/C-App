import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Profile />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
