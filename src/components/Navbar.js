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
          {productsCount > 0
          ? <>
              <h1>Items in Cart :</h1>
              {cart.items.map((currentProduct, idx) => (
                <h1>{currentProduct.item}</h1>
              ))}
              <h1>Total : {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success'>
                Purchase items !
              </Button>
            </>
          : <h1>There are no items added to cart</h1>}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBar
