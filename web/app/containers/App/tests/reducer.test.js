import { fromJS } from 'immutable';
import appReducer from '../reducer';

import {
  setAuth,
  setAuthSuccess,
  unsetAuth,
  unsetAuthSuccess,
  authError
} from '../actions';

import {
  SET_AUTH,
  SET_AUTH_SUCCESS,
  UNSET_AUTH,
  UNSET_AUTH_SUCCESS,
  AUTH_ERROR
} from '../constants';

import { initialState } from '../reducer';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      sending: false,
      error: false,
      loggedIn: false,
      userData: {
        username: false,
        name: false,
        isSuperuser: false,
        companies: [],
        channels: [],
        groups: []
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('handles the setAuth action', () => {
    const expectedResult = state
      .set('sending', true)
    expect(appReducer(state, setAuth())).toEqual(expectedResult);
  });

  it('handles the setAuthSuccess action', () => {
    const userdata = {username: 'testuser', first_name: 'testname', companies: [{name: 'OneData'}], groups: [], channels: []};
    const cnames = {};
    userdata.companies.forEach(c => {
      cnames[c.id] = c.name;
    });
    const expectedResult = state
      .set('sending', false)
      .set('loggedIn', true)
      .setIn(['userData', 'username'], userdata.username)
      .setIn(['userData', 'name'], userdata.first_name)
      .setIn(['userData', 'isSuperuser'], userdata.is_superuser)
      .setIn(['userData', 'companies'], fromJS(userdata.companies))
      .setIn(['userData', 'companiesById'], fromJS(cnames))
      .setIn(['userData', 'groups'], fromJS(userdata.groups))
      .setIn(['userData', 'channels'], fromJS(userdata.channels));
    expect(appReducer(state, setAuthSuccess(userdata))).toEqual(expectedResult);
  });

  it('handles the unsetAuth action', () => {
    const expectedResult = state
      .set('sending', true)
    expect(appReducer(state, unsetAuth())).toEqual(expectedResult);
  });

  it('handles the unsetAuthSuccess action', () => {
    const expectedResult = state;
    expect(appReducer(state, unsetAuthSuccess())).toEqual(expectedResult);
  });

  it('handles the authError action', () => {
    const error = 'Test error message';
    const expectedResult = state
      .set('error', error);
    expect(appReducer(state, authError(error))).toEqual(expectedResult);
  });
});
