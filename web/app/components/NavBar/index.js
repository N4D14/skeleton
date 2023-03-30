import React from 'react';
import PropTypes from 'prop-types';

import NavBarLink from './NavBarLink';
import NavBarExternalLink from './NavBarExternalLink';
import NavBarButton from './NavBarButton';
import NavBarDropDown from 'components/DropDowns/NavBar';
import Wrapper from './Wrapper';

/**
 * NavBar component
 * @param {array} items each navbar item has a link and text
 */
const NavBar = ({items, light, vertical}) => {
  const direction = vertical ? 'column' : 'row';
  if (items && items.length > 0) {
    const content = items.map((item, index) => {
        if ('link' in item) {
          return (
            <NavBarLink
              key={`item-${index}`}
              to={item.link}
              text={item.text}
              color={item.color}
              selected={item.selected}
              vertical={vertical}
              light={light}/>
          );
        } else if ('external' in item) {
          return (
            <NavBarExternalLink
              key={`item-${index}`}
              href={item.external}
              target='_blank'
              selected={item.selected}
              vertical={vertical}>{item.text}</NavBarExternalLink>
          );
        } else if ('dropdown' in item) {
          return (
            <NavBarDropDown
              key={`item-${index}`}
              selected={item.selected}
              items={item.dropdown}
              vertical={vertical}
              text={item.text} />
          );
        } else {
          return (
            <NavBarButton
              key={`item-${index}`}
              onClick={item.click}
              text={item.text}
              light={light}/>
          );
        }
    });
    return (
      <Wrapper direction={direction}>
        {content}
      </Wrapper>
    );
  }
  return null;
}

NavBar.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  vertical: PropTypes.bool
};

NavBar.defaultProps = {
  vertical: false
};

export default NavBar;
