import { defineMessages } from 'react-intl'

const login = defineMessages({
  email: {
    id: 'login.email',
    defaultMessage: 'Login'
  },
  password: {
    id: 'login.password',
    defaultMessage: 'Password'
  }
})

export { login as lMsg }
export { login as default }