/*eslint consistent-return: 0*/
import { isUndefined } from 'lodash'
import { emptyError } from '../../helpers/errors'
export const HTTP_CODES = {
  NO_CONTENT: 204
}

export default function apiMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callApi,
      shouldCallApi = () => true,
      payload = {}
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (!Array.isArray(types)
      || types.length !== 3
      || !types.every(type => typeof type === 'string')) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callApi !== 'function') {
      throw new Error('Expected `callApi` to be a function.')
    }

    if (!shouldCallApi(getState())) {
      return
    }

    const publicData = undefined

    const [ requestType, successType, failureType ] = types
    dispatch({ ...payload, type: requestType })
    return callApi(dispatch, publicData).then(
      response => {
        if (response.status === HTTP_CODES.NO_CONTENT) {
          return dispatch({ ...payload, response, type: successType })
        } else {
          return processBodyIfAny(response)
            .then(data => dispatch({ ...payload, response, data, type: successType }))
        }
      },
      err => processBodyIfAny(err)
        .then(bodyError => {
          const error = bodyError || emptyError
          return dispatch({ ...payload, error, type: failureType })
        })
    )
  }
}

export function processBodyIfAny(httpReponse) {
  const {
    body
  } = httpReponse
  return !isUndefined(body)
    ? httpReponse.json()
    .catch(err => {
      console.log('Error occurred in middleware while parsing response as JSON: ', err)
      return body
    })
    : Promise.resolve(body)
}