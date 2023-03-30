import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from 'utils/media';

export const NavBarStyledButton = styled.button`
  display: block;
  font-size: 0.8em;
  ${''/* line-height: 6em; */}
  ${''/* line-height: 4em; */}
  padding: 0.25em 1em;
  margin: 0 0.25em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Roboto' sans-serif;
  color: rgba(255, 255, 255, 1);
  border: none;
  background-color: Transparent;
  background-repeat:no-repeat;
  outline: none;
  -webkit-appearance: none;
  text-transform: uppercase;
  border: rgba(255, 105, 65, 1) solid 1px;
  border-radius: 5px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  ${media.tablet`
    padding: 0.25em 0.75em;
  `}
`;

export const NavBarStyledButtonLight = styled(NavBarStyledButton)`
  color: rgba(74, 74, 74, 1);

  &:hover {
    color: rgba(74, 74, 74, 1);
  }
`;

/**
 * NavBar button that takes a click callback prop
 * and text to render
 * @param {function} onClick  click action callback
 * @param {string} text     button text
 */
const NavBarButton = ({onClick, text, light}) => {
  const B = light === true ? NavBarStyledButtonLight : NavBarStyledButton;
  return (
    <B onClick={onClick} light={light}>
      {text}
    </B>
  );
}

NavBarButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  light: PropTypes.bool
};

export default NavBarButton;
