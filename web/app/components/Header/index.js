import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from 'utils/media';

import HeaderLink from './HeaderLink';
import HeaderLoginLink from './HeaderLoginLink';
import HeaderTitle from './HeaderTitle';
import Wrapper from './Wrapper';

import NavBar from 'components/NavBar';
import MenuIcon from 'components/MenuIcon';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${media.phone`
    display: none;
  `};
`;

/**
 * Render the title bar for the public site
 */
const Header = ({onMenuIconClick, navItems, originalLogo}) => {
  return (
    <Wrapper>
      <Link to='/'>
        <HeaderTitle src={'angle-right'} alt="x" />
      </Link>
      <MenuIcon onClick={onMenuIconClick}/>
      <NavWrapper>
        <NavBar items={navItems} light={true} vertical={false}/>
      </NavWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  onMenuIconClick: PropTypes.func,
  navItems: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  originalLogo: true
};

export default Header;
