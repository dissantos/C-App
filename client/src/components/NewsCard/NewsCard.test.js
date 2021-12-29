import React from 'react';
import { shallow } from 'enzyme';
import NewsCard from './NewsCard';

describe('<NewsCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NewsCard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
