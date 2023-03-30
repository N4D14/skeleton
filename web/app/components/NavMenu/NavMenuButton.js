import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenuStyledButton = styled.button`
  width: 100%;
  font-size: 1em;
  font-family: 'Roboto' sans-serif;
  padding: 1em 0;
  background-color: Transparent;
  background-repeat:no-repeat;
  cursor: pointer;
  outline: 0;
  color: rgba(74, 74, 74, 1);
  border: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: left;

  &:hover {
    font-weight: 700;
  }
`;

/**
 * NavBar button that takes a click callback prop
 * and text to render
 * @param {function} onClick  click action callback
 * @param {string} text     button text
 */
const NavMenuButton = ({onClick, text}) => {
  return (
    <NavMenuStyledButton onClick={onClick}>
      {text}
    </NavMenuStyledButton>
  );
}

NavMenuButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default NavMenuButton;
