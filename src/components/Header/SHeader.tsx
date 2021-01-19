import { styled } from 'shared'

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme?.layout?.colors?.header};
  border-bottom: ${({ theme }) => theme?.border?.wsc};

  > a {
    font-size: 2rem;
    color: ${({ theme }) => theme?.colors()?.primary};
    font-weight: 900;
    text-transform: uppercase;
  }
`
