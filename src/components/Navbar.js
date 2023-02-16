import React, { useState, useContext } from 'react'
import { Navbar, Button, Modal, Container } from 'react-bootstrap'

import { CartContext } from '../CartContext'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const cart = useContext(CartContext)
  const productsCount = cart.items.
                          reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
          <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Button onClick={handleShow}>Cart ({productsCount} items)</Button>
          </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBar
