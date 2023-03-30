import { createSelector } from 'reselect';

/**
 * Isolate the landing state object
 * @param  {object} state   current app state
 * @return {object}         the landing state
 */
const selectMain = (state) => state.get('main');

/**
 * Get the nav menu visibility from the landing state
 * @return {function}   makes nav menu visibility selector from state
 */
const makeSelectNavMenuVisible = () => createSelector(
  selectMain,
  (landingState) => landingState.get('navMenuVisible')
);

export {
  selectMain,
  makeSelectNavMenuVisible,
};
