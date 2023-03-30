
/**
 * Helper function to create a reducer
 * @param  {Object} initialState initialState of the reducer
 * @param  {Object} handlers     map of action type to handler function
 * @return {func}                the reducer function
 */

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
