import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import ItemsWrapper from './ItemsWrapper';
import NavMenuLink from './NavMenuLink';
import NavMenuButton from './NavMenuButton';
import CloseNavMenu from './CloseNavMenu';
import NavLogo from './NavLogo';

const Line = styled.div`
  margin-left: 1.5em;
  padding: 1em 0 0 0;
  width: 3em;
  height: 1.5em;
  border-top: 2px solid rgba(74, 74, 74, 1);
`;

const NavMenu = ({items, visible, onClose}) => {
  if (items && items.length > 0) {
    const content = items.map((item, index) => {
      if ('link' in item) {
        return (
          <NavMenuLink key={`item-${index}`} to={item.link}>
            {item.text}
          </NavMenuLink>
        );
      } else {
        return (
          <NavMenuButton key={`item-${index}`} onClick={item.click} text={item.text}/>
        );
      }
    });
    return (
      <Wrapper open={visible}>
        <CloseNavMenu onClick={onClose}>CLOSE</CloseNavMenu>
        <ItemsWrapper>
          {content}
        </ItemsWrapper>
        <Line />
        <NavLogo src={'angle-right'} alt="Skeleton"/>
      </Wrapper>
    );
  }
  return null;
}

NavMenu.propTypes = {
  visible: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onClose: PropTypes.func
};

export default NavMenu;
