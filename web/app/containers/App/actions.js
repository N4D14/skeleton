
import {
  SET_AUTH,
  SET_AUTH_SUCCESS,
  UNSET_AUTH,
  UNSET_AUTH_SUCCESS,
  UPDATE_USER,
  AUTH_ERROR,
} from './constants';

const setAuth = () => ({
  type: SET_AUTH
});

const setAuthSuccess = (userdata) => ({
  type: SET_AUTH_SUCCESS,
  userdata
});

const unsetAuth = () => ({
  type: UNSET_AUTH
});

const unsetAuthSuccess = () => ({
  type: UNSET_AUTH_SUCCESS
});

const updateUser = (data) => ({
  type: UPDATE_USER,
  data
});

const authError = (error) => ({
  type: AUTH_ERROR,
  error
});

export {
  setAuth,
  setAuthSuccess,
  unsetAuth,
  unsetAuthSuccess,
  updateUser,
  authError
};
