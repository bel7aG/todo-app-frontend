import { FC } from 'react'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { Field } from 'react-final-form'

import { useModal } from 'context'
import { CREATE_TODO_MUTATION } from 'apollo'
import { Form, Button, TextField } from 'components'
import { todoValidation } from 'validations'

const CreateTodoForm: FC = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { handleModal } = useModal()

  const [createTodo, { loading }] = useMutation(CREATE_TODO_MUTATION, {
    onCompleted: () => {
      handleModal(false)
      enqueueSnackbar('Todo created successfully')
    },

    update: (cache, { data: { createTodo: newTodo } }) => {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            return [...existingTodos, newTodo]
          }
        }
      })
    },
    onError: ({ message }) => {
      enqueueSnackbar(message, {
        variant: 'error'
      })
    }
  })

  const handleForm = async (formValues: any) => {
    createTodo({
      variables: { input: formValues }
    })
  }

  return (
    <Form validation={(formValues) => todoValidation(formValues)} handleForm={handleForm}>
      <div>
        <Field name="title" component={TextField} label="Title" />
      </div>
      <div>
        <Field
          name="description"
          component={TextField}
          label="Description"
          id="outlined-multiline-static"
          rows={4}
          multiline
        />
      </div>
      <div>
        <Button loading={Number(loading)} className="modal-submit" type="submit">
          <span>Create</span>
        </Button>
      </div>
    </Form>
  )
}

export default CreateTodoForm
