import React from 'react';
import { shallow } from 'enzyme';

import NavMenuLink from '../NavMenuLink';

const text = 'Test Link';
const link = '/test';
const renderComponent = () => shallow(
  <NavMenuLink to={link}>{text}</NavMenuLink>
);

describe('<NavMenuLink />', () => {
  it('should have a to attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('to')).toEqual(link);
  });

  it('renders its children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });
});
