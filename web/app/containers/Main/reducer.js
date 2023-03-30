import { fromJS } from 'immutable';

import {SET_NAVMENU_VISIBILITY} from './constants';

// The initial state of the Landing page
const initialState = fromJS({
  navMenuVisible: false,
});

/**
 * Landing reducer maps actions to state changes
 * @param  {object} [state=initialState]   initial login form state
 * @param  {object} action                 current action
 * @return {object}                        next state after the action
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAVMENU_VISIBILITY:
      return state.set('navMenuVisible', action.visible);
    default:
      return state;
  }
}

export default mainReducer;
