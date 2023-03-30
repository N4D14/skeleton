import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';
import Wrapper from './Wrapper';

/**
 * Title bar hamburger icon button that takes a click callback prop
 * @param {function} onClick  click action callback
 */
const MenuIcon = ({onClick}) => {
  return (
    <Wrapper>
      <MenuButton onClick={onClick}/>
    </Wrapper>
  );
}

MenuIcon.propTypes = {
  onClick: PropTypes.func,
};

export default MenuIcon;
