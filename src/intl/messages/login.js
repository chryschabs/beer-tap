import { defineMessages } from 'react-intl'

const login = defineMessages({
  login: {
    id: 'login.login',
    defaultMessage: 'Login'
  },
  email: {
    id: 'login.email',
    defaultMessage: 'Email'
  },
  password: {
    id: 'login.password',
    defaultMessage: 'Password'
  }
})

export { login as lMsg }
export { login as default }