import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

import getSagaInjectors from './sagaInjectors';
import getReducerInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer and a saga, passes component's props as reducer/saga arguments
 *
 * @param {string} key A key of the reducer/saga
 * @param {function} saga A root saga that will be injected
 * @param {function} reducer A root reducer that will be injected
 * @param {string} [mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */
export default ({ key, reducer, saga, mode }) => WrappedComponent => {
  class InjectAll extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withReducerSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props, context) {
      super(props, context);

      this.sagaInjectors = getSagaInjectors(context.store);
      this.sagaInjectors.injectSaga(key, { saga, mode }, this.props);

      getReducerInjectors(context.store).injectReducer(key, reducer);
    }

    componentWillUnmount() {
      this.sagaInjectors.ejectSaga(key);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectAll, WrappedComponent);
};
