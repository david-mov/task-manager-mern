import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  username: yup
    .string('The username must be a text')
    .required('The username field cannot be left empty'),
  email: yup
    .string('The email must be a text')
    .email('You must enter a valid email')
    .required('The email field cannot be left empty'),
})

export default yupResolver(schema)
