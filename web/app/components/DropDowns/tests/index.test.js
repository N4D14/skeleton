import React from 'react';
import { shallow } from 'enzyme';

import DropDownBase from '../index';

const renderedDropDownBase = () => shallow(
  <DropDownBase />
);

describe('<DropDownBase />', () => {
  it('should render a nothing', () => {
    const renderedComponent = renderedDropDownBase();
    expect(renderedComponent.children().length).toBe(0);
  });
});
