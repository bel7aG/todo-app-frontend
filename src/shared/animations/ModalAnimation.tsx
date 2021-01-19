import { keyframes } from 'styled-components'

export const ModalSlideAnimationX = keyframes`
0% {
  transform: translateX(100%);
}

100% {
  transform: translateX(0%);
}
`

export const ModalSlideAnimationY = keyframes`
0% {
  transform: translateY(100%);
}

100% {
  transform: translateY(0%);
}
`

export const ModalEnterAnimation = keyframes`
0% {
  opacity: 0.2;
  transform: translateY(6%);
}

100% {
  opacity: 1;
  transform: translateY(0%);
}
`
