import { styled } from 'shared'
import { Button } from '@material-ui/core'

export const SButton = styled(Button)`
  border-radius: 3px;
  padding: 1rem 2rem !important;
  margin-top: 3rem !important;
  margin-bottom: 4rem !important;
  min-width: 7.9rem;

  background-color: ${({ theme }) => theme?.colors(0.85)?.primary} !important;
  transition: all 0.13s ease;

  > span:first-child > span:first-child {
    font-weight: 700;
  }

  &.modal-submit {
    width: 100%;
    height: 4.2rem;

    > div {
      > svg {
        margin: 0 auto;
      }
    }

    > span:first-child {
      > span {
        font-size: 1.3rem;
        transition: all 0.21s ease;
      }
    }

    &:hover {
      > span:first-child > span {
        letter-spacing: 1px;
      }
    }
  }

  > span:first-child {
    > div {
      > svg {
        margin: 0 auto;
      }
    }
  }

  > span.MuiButton-label {
    > div {
      display: flex;
      align-items: center;
    }
  }

  > span {
    &:first-child {
      > span {
        color: #fff;
        > div > svg {
          margin: 0 auto;
        }
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme?.colors()?.primary} !important;
  }
`
