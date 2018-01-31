/*eslint consistent-return: 0*/
import { forEach, isUndefined } from 'lodash'
import { push } from 'react-router-redux'
import { emptyError } from '../../helpers/errors'

export const HTTP_CODES = {
  NO_CONTENT: 204
}

const API_URL = ''

export default function apiMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callApi,
      shouldCallApi = () => true,
      payload = {}
    } = action

    if (!types) {
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

export function getApiTypes(actions, actionPrefix) {
  return [
    actions[`${actionPrefix}_REQUEST`],
    actions[`${actionPrefix}_SUCCESS`],
    actions[`${actionPrefix}_FAILURE`]
  ]
}

export function fetchFromApi(url, init, dispatch) {

  const URL = `api/${url}`

  return new Promise((resolve, reject) => {
    fetch(buildRequest(URL, init))
      .then(response => {
        switch (response.status) {
          case 401:
            if (response.url === buildApiUrl('login')) {
              resolve(response)
            }
            dispatch(push('/logout'))
            return reject()

          case 403:
            dispatch(push('/logout'))
            return resolve(response)

          case 404:
            dispatch(push('/not-found'))
            return resolve(response)

          default:
            if (response.status >= 400) {
              reject(response)
            } else {
              resolve(response)
            }
        }
      })
      .catch(err => reject(err))
  })
}

export function buildRequest(url, init) {
  const request = new Request(buildApiUrl(url), { ...init, mode: 'cors' })

  request.headers.set('Accept', 'application/json')
  request.headers.set('Content-Type', 'application/json')

  /*if (getIsAuthenticated()) {
    request.headers.set('Authorization', `Bearer ${getAccessToken()}`)
  }*/

  return request
}

function buildApiUrl(url) {
  return [API_URL, url].join('/')
}