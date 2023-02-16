import React from 'react'
import { Navbar, Button, Modal, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="sm">
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button>Cart (0 items)</Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
