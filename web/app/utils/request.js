import 'whatwg-fetch';
import { push } from 'connected-react-router';
import { AUTH_ERROR_MESSAGE } from 'containers/App/constants';

/**
 * Parse request errors helper
 * @param  {Error} error  the generated error
 * @return {string}       string describing the error for display
 */
export const parseErrors = (error) => {
  return error.response.json()
    .then((json) => parseNestedErrors(json))
    .catch((jsonError) => error.toString())
}

/**
 * Parse nested errors returned from serializers
 * @param  {object} error the error object
 * @return {string}       the resulting error message
 * TODO: parse these by field for error display
 */
export const parseNestedErrors = (error) => {
  let err_msg = '';
  for (let prop in error) {
    if (error.hasOwnProperty(prop)) {
      if (typeof error[prop] === 'string') {
        err_msg += `${error[prop]} \n`;
      } else {
        err_msg += `${prop}: `;
        for (let val in error[prop]) {
          if (typeof error[prop][val] === 'string') {
            err_msg += `${error[prop][val]} `
          } else {
            for (let kval in error[prop][val]) {
              err_msg += `${error[prop][val][kval]} `
            }
          }
        }
        err_msg += '\n';
      }
    }
  }
  return err_msg;
}

/**
 * If a request fails due to auth, redirect to login
 * @param {string} msg the error message
 */
export const redirectOnAuthFail = (msg) => {
  if (AUTH_ERROR_MESSAGE.includes(msg.trim())){
    push('/accounts/login');
  }
}

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = (response) => {
  let final = 'success';
  if (response.status != 204){
    final = response.json();
  }
  return final;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response  A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response) => {
  if (response.ok)
    return response;

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Encode the URL parameters being sent
 * @param  {string} url the un-encoded string
 * @return {string}     the URL with encoded params
 */
const makeURLSafe = (url) => {
  let r = encodeURI(url);
  const a = r.split('?');
  if (a.length === 2) {
    r = a[0] + '?';
    const v = a[1].split('&');
    v.forEach((p, i) => {
      const lr = p.split('=');
      if (lr.length === 2){
        if (i>0) r = r + '&';
        r = r + lr[0] + '=' + encodeURIComponent(lr[1]);
      }
    });
    return r;
  }
  return r;
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
const request = (url, options) => {
  const safeUrl = makeURLSafe(url);
  return fetch(safeUrl, options)
    .then(checkStatus)
    .then(parseJSON)
}

export default request;
