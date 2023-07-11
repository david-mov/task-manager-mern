import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const passwordString = () => {
  return yup
    .string('The password must be a text')
    .required('The password field cannot be left empty')
    .min(8, 'Your password must have at least 8 characters')
}

const confirmedPasswordString = () => {
  return yup
    .string('The password confirmation must be a text')
    .required('The password confirmation field cannot be left empty')
    .when('pass', ([pass], schema) => {
      return schema.test({
        test: (confirmedpass) => !!pass && pass === confirmedpass,
        message: 'The password and its confirmation must be equals',
      })
    })
}

const emailString = () => {
  return yup
    .string('The email must be a text')
    .email('You must enter a valid email')
    .required('The email field cannot be left empty')
}

const nameString = () => {
  return yup
    .string('The username must be a text')
    .required('The username field cannot be left empty')
}

const schema = yup.object().shape({
  name: nameString(),
  email: emailString(),
  pass: passwordString(),
  confirmedpass: confirmedPasswordString(),
})

export default yupResolver(schema)
