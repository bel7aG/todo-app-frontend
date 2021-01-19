export const validateTitle = (title: string, errors: any) => {
  if (title?.length < 2) errors[title.toLowerCase()] = 'Must contain more than 2 characters'
}
