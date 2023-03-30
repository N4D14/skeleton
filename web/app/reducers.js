// Combine all reducers in this file and export the combined reducers.
// If we were to do this in store.js, reducers wouldn't be hot reloadable.

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import globalReducer from 'containers/App/reducer';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';

import { UNSET_AUTH_SUCCESS } from 'containers/App/constants';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Route Reducer to merge route into the global application state
 * @param  {[type]} [state=routeInitialState] [description]
 * @param  {[type]} action                    [description]
 * @return {[type]}                           [description]
 */
const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 * on user logout the redux state is completely reset
 * @param  {object} asyncReducers   asynchronously loaded reducers
 * @return {object}                 global reducer
 */
const createReducer = (injectedReducers) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    ...injectedReducers,
  });
  return (state, action) => {
    if (action.type === UNSET_AUTH_SUCCESS) {
      state = undefined;
    }
    const result = appReducer(state, action);
    return result;
  }
};

export default createReducer;
