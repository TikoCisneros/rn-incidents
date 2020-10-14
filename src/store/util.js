const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
};

// eslint-disable-next-line import/prefer-default-export
export { createReducer };
