import { styled } from 'shared'

export const SListItem = styled.li<{ color?: string }>`
  padding: 1rem;
  border-radius: ${({ theme }) => theme?.border?.radius};
  background-color: ${({ theme, color }) => color || theme?.colors()?.primary};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  > * {
    color: ${({ theme }) => theme?.layout?.colors?.textOpposite};
  }
  > h2 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  opacity: 0.9;
  transition: opacity 0.2s ${({ theme }) => theme?.transition};

  &:hover {
    opacity: 1;
  }
`
