import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const passwordString = () => {
  return yup
    .string('The password must be a text')
    .required('You must enter a password')
    .min(8, 'Your password must have at least 8 characters')
}

const schema = yup.object().shape({
  name: yup
    .string('The username must be a text')
    .required('The username field cannot be left empty'),
  email: yup
    .string('The email must be a text')
    .email('You must enter a valid email')
    .required('The email field cannot be left empty'),
  pass: passwordString(),
  confirmedpass: passwordString().when('newpass', ([newpass], schema) => {
    return schema.test({
      test: (confirmedpass) => !!newpass && newpass === confirmedpass,
      message: 'The new password and its confirmation must be equals',
    })
  }),
})

export default yupResolver(schema)
