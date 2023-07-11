import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const passwordString = () => {
  return yup
    .string('The password must be a text')
    .required('The password field cannot be left empty')
    .min(8, 'Your password must have at least 8 characters')
}

const emailString = () => {
  return yup
    .string('The email must be a text')
    .email('You must enter a valid email')
    .required('The email field cannot be left empty')
}

const schema = yup.object().shape({
  email: emailString(),
  pass: passwordString(),
})

export default yupResolver(schema)
