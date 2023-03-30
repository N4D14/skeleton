import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { Link } from 'react-router-dom';

import { media } from 'utils/media';

const NavBarStyledLink = styled(Link)`
  display: block;
  font-size: 0.7em;
  padding: 0;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  font-family: ${theme.font};
  color: #aaaaaa;

  &:hover {
    color: #aaaaaa;
  }

  &:active {
    color: #aaaaaa;
  }

  ${media.tablet`
    padding: 0 0.75em;
  `}
`;

const NavBarStyledLinkLight = styled(NavBarStyledLink)`
  color: ${props => props.color !== null ? props.color : `${theme.navBarText}`};
  font-size: 0.75em;
  font-family: ${theme.font};

  &:hover {
    color: ${props => props.color !== null ? props.color : `${theme.navBarTextDark}`};
  }

  &:active {
    font-weight: 700;
  }
`;

const Nest = styled.div`
  padding: ${props => props.vertical ? '0.25em 0': '0 1.5em'};
  font-weight: ${props => props.selected ? 700 : 400};
`;

/**
 * NavBar Link
 * @param {string} text     link text
 */
const NavBarLink = ({to, text, color, light, selected, vertical}) => {
  const L = light === true ? NavBarStyledLinkLight : NavBarStyledLink;
  return (
    <Nest selected={selected} vertical={vertical}>
      <L color={color} to={to}>
        {text}
      </L>
    </Nest>
  );
}

export default NavBarLink;
