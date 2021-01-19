import { validateTitle } from './fields-validations'

export const todoValidation = (formValues: any) => {
  const { title } = formValues

  const errors: any = {}

  const requiredFields = ['title']

  requiredFields.forEach((field) => {
    if (!formValues[`${field}`]) {
      errors[field] = `${field} is missing`
    }
  })

  validateTitle(title, errors)

  return errors
}
