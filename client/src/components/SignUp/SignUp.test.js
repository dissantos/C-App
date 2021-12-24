import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('<SignUp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignUp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
