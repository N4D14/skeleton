import React from 'react';
import { shallow } from 'enzyme';

import NavBarLink from '../NavBarLink';

const text = 'Test Link';
const link = '/test';
const renderComponent = () => shallow(
  <NavBarLink to={link}>{text}</NavBarLink>
);

describe('<NavBarLink />', () => {
  it('should have a to attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('to')).toEqual(link);
  });
});
