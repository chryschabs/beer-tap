import {
  fetchFromApi,
  getActionType
} from '../../../components/middleware/api'

export const AccountActionTypes = {
  LOGIN: 'ACCOUNT/LOGIN'
}

export function onLogin() {
  const init = {
    method: 'GET',
  }
  return {
    types: getActionType(AccountActionTypes, 'LOGIN'),
    callApi: dispatch => fetchFromApi('login', init, dispatch),
  }
}

export const actions = {
  onLogin
}

export { actions as default }