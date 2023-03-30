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

describe('App Actions', () => {

  describe('setAuth', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SET_AUTH,
      };
      expect(setAuth()).toEqual(expectedResult);
    });
  });

  describe('setAuthSuccess', () => {
    it('should return the correct type and the userdata', () => {
      const userdata = {username: 'testuser', name: 'testname'};
      const expectedResult = {
        type: SET_AUTH_SUCCESS,
        userdata
      };
      expect(setAuthSuccess(userdata)).toEqual(expectedResult);
    });
  });

  describe('unsetAuth', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: UNSET_AUTH,
      };
      expect(unsetAuth()).toEqual(expectedResult);
    });
  });

  describe('setAuthSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: UNSET_AUTH_SUCCESS,
      };
      expect(unsetAuthSuccess()).toEqual(expectedResult);
    });
  });

  describe('authError', () => {
    it('should return the correct type and the error', () => {
      const error = 'Test error message';
      const expectedResult = {
        type: AUTH_ERROR,
        error,
      };
      expect(authError(error)).toEqual(expectedResult);
    });
  });
});
