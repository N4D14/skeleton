import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectUser,
  makeSelectAuth,
  makeSelectSending,
  makeSelectError,
  makeSelectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectUser', () => {
  const userSelector = makeSelectUser();
  it('should select the current user', () => {
    const testuser = 'testuser';
    const mockedState = fromJS({
      global: {
        userData: {
          username: testuser
        }
      },
    });
    expect(userSelector(mockedState)).toEqual(testuser);
  });
});

describe('makeSelectAuth', () => {
  const authSelector = makeSelectAuth();
  it('should select the auth status', () => {
    const loggedIn = false;
    const mockedState = fromJS({
      global: {
        loggedIn,
      },
    });
    expect(authSelector(mockedState)).toEqual(loggedIn);
  });
});


describe('makeSelectSending', () => {
  const sendingSelector = makeSelectSending();
  it('should select the sending', () => {
    const sending = false;
    const mockedState = fromJS({
      global: {
        sending,
      },
    });
    expect(sendingSelector(mockedState)).toEqual(sending);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 'Test Error';
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
