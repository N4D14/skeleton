import React from 'react';
import { shallow } from 'enzyme';

import { NavMenuStyledButton } from '../NavMenuButton';
import NavMenuButton from '../NavMenuButton';

const text = 'Test Link';
const clickSpy = jest.fn();
const renderComponent = () => shallow(
  <NavMenuButton onClick={clickSpy} text={text} />
);

describe('<NavMenuButton />', () => {
  it('should render a navbar button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(NavMenuStyledButton).length).toBe(1);
  });

  it('renders its button text', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });
});
