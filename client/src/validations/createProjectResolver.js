import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  title: yup
    .string('The title must be a text')
    .required('The title field cannot be left empty'),
  description: yup
    .string('The description must be a text')
    .required('The description field cannot be left empty'),
})

export default yupResolver(schema)
