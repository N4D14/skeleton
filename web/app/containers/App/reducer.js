import { fromJS } from 'immutable';
import { createReducer } from 'utils/reducer';

import {
  SET_AUTH,
  SET_AUTH_SUCCESS,
  UNSET_AUTH,
  UNSET_AUTH_SUCCESS,
  UPDATE_USER,
  AUTH_ERROR
} from './constants';


// The initial state of the App
export const initialState = fromJS({
  sending: false,
  error: false,
  loggedIn: false,
  userData: {
    username: false,
    name: false,
    isSuperuser: false,
    profile: null,
    groups: [],
    settings: {},
    menu: [],
    routes: {}
  },
});

/**
 * Send user auth data request state
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 * @return {object}       updated state
 */
const setAuth = (state, action) => state
  .set('sending', true)
  .set('error', false)
  .set('loggedIn', false)
  .setIn(['userData', 'username'], false)
  .setIn(['userData', 'name'], false)
  .setIn(['userData', 'isSuperuser'], false)
  .setIn(['userData', 'profile'], null)
  .setIn(['userData', 'groups'], fromJS([]))
  .setIn(['userData', 'settings'], fromJS({}))
  .setIn(['userData', 'menu'], fromJS([]))
  .setIn(['userData', 'routes'], fromJS([]));

/**
 * Auth request succeeded, set the new user data on the state
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 * @return {object}       updated state
 */
const setAuthSuccess = (state, action) => {
  const cnames = {};
  action.userdata.companies.forEach(c => {
    cnames[c.id] = c.name;
  });
  return state
    .set('sending', false)
    .set('loggedIn', true)
    .setIn(['userData', 'username'], action.userdata.username)
    .setIn(['userData', 'name'], action.userdata.first_name)
    .setIn(['userData', 'isSuperuser'], action.userdata.is_superuser)
    .setIn(['userData', 'profile'], action.userdata.profile)
    .setIn(['userData', 'groups'], fromJS(action.userdata.groups))
    .setIn(['userData', 'settings'], fromJS(action.userdata.settings))
    .setIn(['userData', 'routes'], fromJS(action.userdata.dashboard_routes))
    .setIn(['userData', 'menu'], fromJS(action.userdata.dashboard_menu));
}

/**
 * Update the user's userdata with changes made from within the app
 * Should only affect superusers!
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 * @return {object}       updated state
 */
const updateUser = (state, action) => {
 if ('settings' in action.data) {
    return state
      .setIn(['userData', 'settings'], fromJS(action.data.settings))
  }
  return state;
}

/**
 * Send user logout request
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 * @return {object}       updated state
 */
const unsetAuth = (state, action) => state
  .set('sending', true)
  .set('error', false);

/**
 * Logout request succeeded
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 * @return {object}       updated state
 */
const unsetAuthSuccess = (state, action) => state
  .set('sending', false)
  .set('loggedIn', false)
  .setIn(['userData', 'username'], false)
  .setIn(['userData', 'name'], false)
  .setIn(['userData', 'isSuperuser'], false)
  .setIn(['userData', 'profile'], null)
  .setIn(['userData', 'groups'], fromJS([]))
  .setIn(['userData', 'settings'], fromJS({}))
  .setIn(['userData', 'menu'], fromJS([]))
  .setIn(['userData', 'routes'], fromJS({}));

/**
 * Request errored
 * @param {object} state  the current app state
 * @param {object} action the action to apply
 */
const authError = (state, action) => state
  .set('error', action.error)
  .set('sending', false);

/**
 * App reducer
 * @type {func}
 */
const appReducer = createReducer(initialState, {
  [SET_AUTH]: setAuth,
  [SET_AUTH_SUCCESS]: setAuthSuccess,
  [UNSET_AUTH]: unsetAuth,
  [UNSET_AUTH_SUCCESS]: unsetAuthSuccess,
  [UPDATE_USER]: updateUser,
  [AUTH_ERROR]: authError
});

export default appReducer;
