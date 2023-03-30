import React from 'react';
import { shallow } from 'enzyme';

import { CloseButton } from '../CloseNavMenu';

const text = 'Test Button';
const clickSpy = jest.fn();
const renderComponent = () => shallow(
  <CloseButton onClick={clickSpy}>{text}</CloseButton>
);

describe('<CloseButton />', () => {
  it('renders a <button>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('button')).toBe(true);
  });

  it('renders its children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles clicks', () => {
    const renderedComponent = renderComponent();
    renderedComponent.find('button').simulate('click');
    expect(clickSpy).toHaveBeenCalled();
  });
});
