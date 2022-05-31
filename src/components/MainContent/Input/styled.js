import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
`

export const Input = styled.input`
  width: 300px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
`

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 5px;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    background: #f3f3f3;
  }
`