import { styled, css, ModalSlideAnimationX, ModalSlideAnimationY, ModalEnterAnimation } from 'shared'
import { SCREEN } from 'constant'

interface SModalProps {
  direction?: 'x' | 'y'
  smoke?: string
}

const ModalXAxis = css<SModalProps>`
  flex-direction: row;
  overflow-y: hidden;

  > div:first-child {
    height: 100vh;
    width: calc(100vw - 55rem);
  }

  > div:last-child {
    animation: ${ModalSlideAnimationX} 0.9s 0.3s forwards ${({ theme }) => theme?.transition};
    transform: translateX(100%);
    border-left: ${({ theme }) => theme?.border?.wsc};
    height: 100%;
    overflow-y: auto;

    > div {
      &:nth-child(2) {
        overflow-y: auto;
        max-height: calc(100vh - 9.3rem);
      }
    }

    &,
    > div {
      width: 100%;
      max-width: 55rem;
    }
  }
`

const ModalYAxis = css<SModalProps>`
  overflow-y: auto;
  flex-direction: column;

  * {
    user-select: none;
  }

  > div:first-child {
    height: 6rem;
    width: 100vw;
  }

  > div:last-child {
    border-top: ${({ theme }) => theme?.border?.wsc};
    transform: translateY(100%);
    height: calc(100vh - 6rem);
    width: 100vw;
    animation: ${ModalSlideAnimationY} 0.9s 0.3s forwards ${({ theme }) => theme?.transition};

    > div {
      &:nth-child(2) {
        max-height: calc(100vh - 15.4rem);
      }
    }
  }
`

export const SModal = styled.div<SModalProps>`
  ${({ direction }) => (direction === 'x' ? ModalXAxis : ModalYAxis)};

  visibility: visible;
  display: none;
  position: fixed;
  overflow-x: hidden;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background-color: ${({ theme }) => theme?.colors(0.27)?.secondary};

  > div:last-child {
    transform: translateX(100%);
    position: relative;
    background-color: ${({ theme }) => theme?.modal?.colors?.background};
    overflow-x: hidden;

    > div:first-child {
      > div {
        margin-bottom: 2rem;
        &:not(:last-child) {
          border-bottom: ${({ theme }) => theme?.border?.wsc};
        }

        display: flex;
        justify-content: space-between;
      }
    }

    &,
    > div {
      top: 0;
      right: 0;
    }

    > div {
      opacity: 0.2;
      transform: translateY(6%);
      animation: ${ModalEnterAnimation} 0.55s 0.95s forwards ${({ theme }) => theme?.transition};

      &:first-child {
        @media screen and (min-width: ${SCREEN.MOBILE}px) {
          padding: 1.5rem 4rem;
        }

        @media screen and (max-width: ${SCREEN.MOBILE}px) {
          padding: 1.5rem 2rem;
        }
      }

      &:nth-child(2) {
        height: 100%;
      }

      > div {
        > h1 {
          color: ${({ theme }) => theme?.layout?.colors?.text};
          text-transform: uppercase;
          font-weight: 500;
          line-height: 4.3rem;
        }

        > button {
          transition: transform 0.21s ease-in-out;
          > svg {
            fill: ${({ theme }) => theme?.colors()?.primary};
            height: 4rem;
            width: 4rem;
          }

          &:hover {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
`

export type { SModalProps }
