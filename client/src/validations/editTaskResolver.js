import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { prioritiesArray } from '../helpers/consts/taskPriorities'

const validatePriorityRegex = new RegExp(prioritiesArray.join('|'), 'gi')

const schema = yup.object().shape({
  title: yup
    .string('The title must be a text')
    .required('The title field cannot be left empty'),
  description: yup.string('The description must be a text'),
  dueDate: yup.date('The due date must be a valid date'),
  priority: yup
    .string('The priority level must be a text')
    .matches(validatePriorityRegex, {
      message: 'You must select a valid priority level',
    })
    .required('The priority level field cannot be left empty'),
})

export default yupResolver(schema)
