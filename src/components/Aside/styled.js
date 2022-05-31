import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 100vh;
`
export const List = styled.ul`
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: all .2s linear;

  &:hover {
    background: #f3f3f3;
  }
`

export const Button = styled.button`
  border: 1px solid #1c1c1c;
  border-radius: 5px;
  outline: none;
  background: transparent;
  font-size: 11px;
  cursor: pointer;
`