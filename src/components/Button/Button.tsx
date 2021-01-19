import { FC, ReactNode } from 'react'
import Loader from 'react-loader-spinner'
import { SButton } from './SButton'

interface ButtonProps {
  children: ReactNode
  loading?: number
  type?: 'submit' | 'button' | 'reset'
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const { loading, type, className, disabled } = rest

  return (
    <SButton className={className} type={type} disabled={disabled || !!loading} {...rest}>
      {loading ? <Loader type="ThreeDots" color="#fff" height={19} width={38.8} /> : children}
    </SButton>
  )
}

export default Button
