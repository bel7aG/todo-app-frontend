import { useState, createContext, useContext, ReactNode, FC } from 'react'

interface ModalContextType {
  isOpen: boolean
  pickedForm: PickedFormInput
  handleModal: (isOpen: boolean, chosen?: PickedFormInput) => void
}

interface ModalProviderProps {
  children: ReactNode
}

interface PickedFormInput {
  name: string
  title: string
}

const INITIAL_STATE: ModalContextType = {
  isOpen: false,
  pickedForm: { name: '', title: '' },
  handleModal: () => null
}

const ModalContext = createContext<ModalContextType>(INITIAL_STATE)

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [pickedForm, setPickedForm] = useState<PickedFormInput>({
    name: '',
    title: ''
  })

  const handleModal = (isOpen: boolean, chosen: PickedFormInput | undefined) => {
    setIsOpen(isOpen)

    if (chosen) if (isOpen) setPickedForm(chosen)
  }

  return <ModalContext.Provider value={{ isOpen, pickedForm, handleModal }}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)
