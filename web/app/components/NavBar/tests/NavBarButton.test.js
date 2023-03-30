import React from 'react';
import { shallow } from 'enzyme';

import { NavBarStyledButton } from '../NavBarButton';
import NavBarButton from '../NavBarButton';

const text = 'Test Link';
const clickSpy = jest.fn();
const renderComponent = () => shallow(
  <NavBarButton onClick={clickSpy} text={text} />
);

describe('<NavBarButton />', () => {
  it('should render a navbar button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(NavBarStyledButton).length).toBe(1);
  });

  it('renders its button text', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });
});
