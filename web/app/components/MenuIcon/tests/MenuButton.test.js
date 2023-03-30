import React from 'react';
import { shallow } from 'enzyme';

import MenuButton from '../MenuButton';

const clickSpy = jest.fn();
const renderComponent = () => shallow(
  <MenuButton onClick={clickSpy}/>
);

describe('<MenuButton />', () => {
  it('renders a <button>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('button')).toBe(true);
  });

  it('handles clicks', () => {
    const renderedComponent = renderComponent();
    renderedComponent.find('button').simulate('click');
    expect(clickSpy).toHaveBeenCalled();
  });
});
