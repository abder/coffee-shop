import styled from 'styled-components'

export const Button = ( { className, disabled, onClick, children } ) => {
  return (
    <Btn className={className} onClick={onClick} disabled={disabled}>{children}</Btn>
  )
}

const Btn= styled.button`
    background-color: #0A84FF;
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
`;

