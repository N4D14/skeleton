import {SET_NAVMENU_VISIBILITY} from './constants';

/**
 * Set the visibility of the slide out nav menu
 * @param {bool} visible is visible or not
 */
const setNavMenuVisibility = (visible) => ({
  type: SET_NAVMENU_VISIBILITY,
  visible
});

export {
  setNavMenuVisibility,
};
