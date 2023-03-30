import React from 'react';
import { shallow } from 'enzyme';

import SocialMediaLink from '../SocialMediaLink';

const link = '/';
const icon = 'fa fa-facebook';
const renderComponent = () => shallow(
  <SocialMediaLink to={link} icon={icon} />
);

describe('<SocialMediaLink />', () => {
  it('should have a to attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('to')).toEqual(link);
  });

  it('renders its children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.props().children.type).toEqual('span');
    expect(renderedComponent.props().children.props.className).toEqual(icon);
  });
});
