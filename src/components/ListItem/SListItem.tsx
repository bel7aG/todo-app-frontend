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
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    margin-bottom: 1rem;

    > span:not(:first-child) {
      cursor: pointer;
      border-radius: ${({ theme }) => theme?.border?.radius};
      background-color: #ff9800;
      padding: 4px;
      font-size: 1.4rem;
      color: ${({ theme }) => theme?.layout?.colors?.textOpposite};
    }
  }

  > p {
    white-space: pre;
  }

  opacity: 0.9;
  transition: opacity 0.2s ${({ theme }) => theme?.transition};

  &:hover {
    opacity: 1;
  }
`
