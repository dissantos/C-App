import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
