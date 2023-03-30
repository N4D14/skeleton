import React from 'react';
import { render, shallow } from 'enzyme';

import SocialMediaBar from '../index';

const renderItemsComponent = (items) => render(
  <SocialMediaBar items={items}/>
);

const renderNullComponent = () => shallow(
  <SocialMediaBar items={false}/>
);

describe('<SocialMediaBar />', () => {
  it('should render null if no items are passed', () => {
    const renderedComponent = renderNullComponent();
    expect(renderedComponent.getElement()).toEqual(null);
  });

  it('should render the items', () => {
    const items = [
      {link: '/', iconClass: 'fa fa-facebook'},
      {link: '/about', iconClass: 'fa fa-linkedin-square'}
    ];
    const renderedComponent = renderItemsComponent(items);
    expect(renderedComponent.find(items)).toBeDefined();
  });
});
