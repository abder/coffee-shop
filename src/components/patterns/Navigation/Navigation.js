import React from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

export const Navigation = () => {
  return (
    <nav>
        <ul>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/cart">Cart</Link>
                </ListItem>
                <ListItem>
                    <Link to="/userProfile">Profile</Link>
                </ListItem>
           
        </ul>
    </nav>
  )
}

const ListItem = styled.li  `
    padding: 20px;
`


