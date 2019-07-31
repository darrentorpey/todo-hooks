import { styled } from '~/theme'

export const Button = styled.button`
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: none;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 5px 16px;
  width: 100%;
  text-decoration: none;
  border: 1px solid #f50057;
  background-color: transparent;

  color: ${props => props.theme.palette.secondaryLight};
  border-color: ${props => props.theme.palette.secondaryLight};

  &:hover {
    background-color: rgba(159, 200, 287, 0.08);
  }

  &:focus {
    color: ${props => props.theme.palette.secondaryHighlight};
    border: 2px solid ${props => props.theme.palette.secondaryHighlight};
    padding: 5px 16px 4px;
    margin-top: -1px;
  }
`
