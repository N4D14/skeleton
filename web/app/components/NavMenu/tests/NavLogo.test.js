import React from 'react';
import { shallow } from 'enzyme';

import Image from 'components/Image';
import NavLogo from '../NavLogo';
import Logo from 'components/Headers/Logos/sf-logo-orange-eyes.svg';

describe('<NavLogo />', () => {

  it('should render an Image tag', () => {
    const renderedComponent = shallow(
      <NavLogo src={Logo} alt="Test"/>
    );
    expect(renderedComponent.find(Image).length).toBe(1);
  });
})
