import React from 'react';
import { shallow } from 'enzyme';

import HeaderLink from '../HeaderLink';
import { StyledHeaderLink } from '../HeaderLink';

const text = 'Test Link';
const link = '/test';
const renderComponent = () => shallow(
  <HeaderLink to={link} text={text} />
);

const renderInnerComponent = () => shallow(
  <StyledHeaderLink to={link}>{text}</StyledHeaderLink>
);

describe('<HeaderLink />', () => {
  it('should contain a header link', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(StyledHeaderLink).length).toBe(1);
  });
});

describe('<StyledHeaderLink />', () => {
  it('should have a to attribute', () => {
    const renderedComponent = renderInnerComponent();
    expect(renderedComponent.prop('to')).toEqual(link);
  });

  it('renders its children', () => {
    const renderedComponent = renderInnerComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });
});
