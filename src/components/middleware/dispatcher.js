export const makeDispatch = (dispatch, callback) =>
  (...args) =>
    dispatch(callback.apply(null, args))