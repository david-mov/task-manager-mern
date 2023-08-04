import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const passwordString = () => {
  return yup
    .string('The password must be a text')
    .required('You must enter a password')
    .min(8, 'Your password must have at least 8 characters')
}

const schema = yup.object().shape({
  currentPassword: passwordString(),
  newPassword: passwordString(),
  confirmedPassword: passwordString().when(
    'newPassword',
    ([newPassword], schema) => {
      return schema.test({
        test: (confirmedPassword) =>
          !!newPassword && newPassword === confirmedPassword,
        message: 'The new password and its confirmation must be equals',
      })
    }
  ),
})

export default yupResolver(schema)
