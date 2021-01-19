import { useState, useEffect, useRef, FC, ReactNode, RefObject } from 'react'

import { useModal } from 'context'
import { FadeMagicTween } from 'tweens'
import { XSVG } from 'components'
import { useKeyUp } from 'hooks'
import { SModal, SModalProps } from './SModal'

interface ModalProps extends SModalProps {
  children: ReactNode
  title: string
}

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  const { title, smoke = '', direction = 'x' } = props

  const modalRef = useRef<HTMLElement | any>() as RefObject<HTMLDivElement>

  const { isOpen, handleModal } = useModal()

  const [render, setRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setRender(true)
      FadeMagicTween(true, modalRef.current)
    } else {
      FadeMagicTween(false, modalRef.current)
      setTimeout(() => {
        setRender(false)
      }, 400)
    }
  }, [isOpen])

  useKeyUp(({ keyCode }: KeyboardEvent) => {
    if (keyCode === 27) handleModal(false)
  })

  return (
    <SModal smoke={smoke} ref={modalRef} direction={direction}>
      <div onClick={() => handleModal(false)} />
      <div>
        <div>
          <div>
            <h1>{title || 'title'}</h1>
            <button onClick={() => handleModal(false)}>
              <XSVG />
            </button>
          </div>
        </div>
        {render && children}
      </div>
    </SModal>
  )
}

export default Modal
