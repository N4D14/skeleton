// Global state selectors
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Isolate the global state object
 * @param  {object} state   current app state
 * @return {object}         the global state
 */
const selectGlobal = (state) => state.get('global');

/**
 * Get the user data from the global state
 * @return {function}   makes user selector from state
 */
const makeSelectUserData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('userData').toJS()
);

/**
 * Get the viewed company from the global state
 * @return {function}   makes user selector from state
 */
const makeSelectViewedCompany = () => createSelector(
  selectGlobal,
  (globalState) => {
    const ud = globalState.get('userData').toJS();
    let company = ud.companies[0];
    let viewedCompany = company;
    if ('settings' in ud && ud.settings !== null && 'viewed_company' in ud.settings){
      ud.companies.forEach(c => {
        if (c.id === ud.settings.viewed_company){
          viewedCompany = c;
        }
      })
    }
    viewedCompany['routes'] = ud.routes;
    return viewedCompany;
  }
);

/**
 * Get the logo url from the user data in the  global state
 * @return {function}   makes user selector from state
 */
const makeSelectLogoUrl = () => createSelector(
  selectGlobal,
  (globalState) => {
    const ud = globalState.get('userData').toJS();
    const companies = ud.companies;
    const settings = ud.settings;
    let logo_url = false;
    if (ud.isSuperuser && settings && settings.viewed_company) {
      if (companies){
        companies.forEach(c => {
          if (c.id === settings.viewed_company) {
            logo_url = c.logo_url;
          }
        });
      }
    } else if (companies && companies.length > 0 && 'name' in companies[0]){
      logo_url = companies[0].logo_url;
    }
    return logo_url;
  }
);

/**
 * Get the username from the global state
 * @return {function}   makes user selector from state
 */
const makeSelectUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'username'])
);

/**
 * Get the username from the global state
 * @return {function}   makes user selector from state
 */
const makeSelectUserIsAdmin = () => createSelector(
  selectGlobal,
  (globalState) => {
    const groups = globalState.getIn(['userData', 'groups']).toJS();
    const result = groups.filter(g => g.name === 'admins');
    return result.length > 0 ? true : false;
  }
);

/**
 * Get the username from the global state
 * @return {function}   makes user selector from state
 */
const makeSelectUserIsAdmanager = () => createSelector(
  selectGlobal,
  (globalState) => {
    const groups = globalState.getIn(['userData', 'groups']).toJS();
    const result = groups.filter(g => g.name === 'admanagers');
    return result.length > 0 ? true : false;
  }
);

/**
 * Get the loggedIn status from the global state
 * @return {function}   makes auth selector from state
 */
const makeSelectAuth = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loggedIn')
);

/**
 * Get the sending request status from the global state
 * @return {function}   makes sending selector from state
 */
const makeSelectSending = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('sending')
);

/**
 * Get the error from the global state
 * @return {function}   makes error selector from state
 */
const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

/**
 * Get the location state from the global state
 * @return {function}   makes location selector from state
 */
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = fromJS(state.get('router'));

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectAuth,
  makeSelectUserData,
  makeSelectLogoUrl,
  makeSelectUser,
  makeSelectUserIsAdmin,
  makeSelectUserIsAdmanager,
  makeSelectSending,
  makeSelectError,
  makeSelectLocationState,
  makeSelectViewedCompany
};
