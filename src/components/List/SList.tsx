import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  max-width: 32rem;
  width: 50%;

  > h1 {
    line-height: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme?.colors()?.secondary};
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
  }

  > div {
    background-color: ${({ theme }) => theme?.layout?.colors?.header};
    border-radius: ${({ theme }) => theme?.border?.radius};
    border: ${({ theme }) => theme?.border?.wsc};
    max-height: calc(100vh - 11.5rem);
    overflow-y: hidden;

    > ul {
      * {
        overflow-anchor: none;
      }
      padding: 4rem 1rem;
      max-height: calc(100vh - 16.5rem);
      overflow-y: auto;
      overflow-x: hidden;

      > li:last-child {
        height: 1px;
        overflow-anchor: auto;
      }
    }

    > div:last-child {
      opacity: 0.7;
      background-color: #ff9800;
      transition: opacity 0.2s ${({ theme }) => theme?.transition};

      &:hover {
        opacity: 1;
      }

      > button {
        padding: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme?.layout?.colors?.textOpposite};

        > svg {
          width: 2.5rem;
          height: 2.5rem;
        }

        > span {
          @media screen and (min-width: ${SCREEN.MOBILE}px) {
            margin-left: 2rem;
            font-size: 1.7rem;
          }

          @media screen and (max-width: ${SCREEN.MOBILE}px) {
            margin-left: 1rem;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`
