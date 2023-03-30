import React from 'react';
import { render, shallow } from 'enzyme';

import NavMenu from '../index';
import CloseNavMenu from '../CloseNavMenu';

const open = true;
const clickSpy = jest.fn();

const renderItemsComponent = (items) => render(
  <NavMenu items={items} open={open} onClose={clickSpy}/>
);

const renderNullComponent = () => shallow(
  <NavMenu items={false} open={open} onClose={clickSpy}/>
);

describe('<NavMenu />', () => {
  it('should render null if no items are passed', () => {
    const renderedComponent = renderNullComponent();
    expect(renderedComponent.getElement()).toEqual(null);
  });

  it('should render the items', () => {
    const items = [
      {link: '/', text: 'Home'},
      {link: '/about', text: 'About'}
    ];
    const renderedComponent = renderItemsComponent(items);
    expect(renderedComponent.find(items)).toBeDefined();
  });

  it('should render the close button', () => {
    const items = [
      {link: '/', text: 'Home'},
      {link: '/about', text: 'About'}
    ];
    const renderedComponent = shallow(
      <NavMenu items={items} open={open} onClose={clickSpy}/>
    );
    expect(renderedComponent.find(CloseNavMenu).length).toBe(1);
  });
});
