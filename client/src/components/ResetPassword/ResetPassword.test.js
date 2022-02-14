import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from './ResetPassword';

describe('<ResetPassword />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ResetPassword />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
