import { fromJS } from 'immutable'

export const setError = ({ errorCode, errorDetails }) =>
  fromJS({ code: errorCode, message: errorDetails })

export const isError = (error) => !!(error && error.message)

export const emptyError = fromJS({ message: undefined, code: undefined })

export default {
  setError,
  isError,
  emptyError,
}