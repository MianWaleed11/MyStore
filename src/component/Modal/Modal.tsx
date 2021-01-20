import React, { useState } from "react";
import "./Modal.css";
import {Check} from 'react-bootstrap-icons'
import { Button, Modal } from "react-bootstrap";
export interface CartModalProps {
  show: boolean;
  handleClose:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  redirectToCart:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  productImage: string;
  
}

const CartModal: React.FC<CartModalProps> = (props) => {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_cart_image">
           <Check/> Added to Cart
           <br/>
            <img
              src={props.productImage}
              alt="product"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="subTotal">
            <p> SubTotal:Subtotal here </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.redirectToCart}>
            View Cart
          </Button>
          <Button variant="warning" onClick={props.handleClose}>
            Proceed To Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
