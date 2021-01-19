import { styled } from 'shared'

export const SLayout = styled.div`
  position: relative;
  background: ${({ theme }) => theme?.layout?.colors?.body};

  min-width: 28rem;

  > main {
    padding: 0 1rem;
    min-height: 100vh;
  }
`
