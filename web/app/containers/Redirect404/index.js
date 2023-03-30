import React from 'react';
import { Redirect } from 'react-router-dom';

const Redirect404 = ({ location }) => {
  console.log('Here in redirect as 404');
  return <Redirect to={Object.assign({}, location, { state: { is404: true }})}/>;
};


export default Redirect404;
