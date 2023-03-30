import React from 'react';
import { shallow } from 'enzyme';

import MenuButton from '../MenuButton';
import MenuIcon from '../index';

const clickSpy = jest.fn();
const renderComponent = () => shallow(
  <MenuIcon onClick={clickSpy}/>
);

describe('<MenuIcon />', () => {
  it('should render a menu button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(MenuButton).length).toBe(1);
  });
});
