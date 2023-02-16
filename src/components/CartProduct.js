import { Button } from "react-bootstrap";
import { useContext } from "react";

import { CartContext } from "../CartContext";

import { getProductData } from "../products";

const CartProduct = (props) => {
  const id = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  const cart = useContext(CartContext)
  
  return (
    <>
        <h1>{productData.item}</h1>
        <p>{quantity} total</p>
        <p>${ (quantity * productData.price).toFixed(2) }</p>
        <Button size='sm'
            onClick={() => cart.deleteFromCart(id)}>
                Remove
        </Button>
        <hr />
    </>
) 
}

export default CartProduct
