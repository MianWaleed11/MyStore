import React, { useEffect, useState } from "react";
import "./userCartInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import * as Actions from "../../redux";
import { Iproduct } from "../../interfaces";
import { selectCart, selectCartInfo } from "../../redux/cart/cart.selector";
import { Icart } from "../../redux/cart/types";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const UserCartInfo: React.FC = () => {
  let subTotal = 0;

  const [showDel, setshowDel] = useState<boolean>(false);
  const [showAlert, setshowAlert] = useState<boolean>(false);
  const dispatch = useDispatch();

  //useselectors here

  const cart = useSelector(selectCart);
  const cartInfo = useSelector(selectCartInfo);

  useEffect(() => {
    dispatch(Actions.userCartInfo());
  }, [dispatch]);

  useEffect(() => {
    console.log(cartInfo, cart);
  }, [cartInfo, cart]);

  console.log("from cart info=========>", cart, cartInfo);

  /**
   * delete item from cart
   * @param _id
   */

  const removeProduct = (_id: string) => {
    Swal.fire({
      title: "product del",
      titleText: "Are You Sure To Remove This Item",
      icon: "warning",
      confirmButtonText: "Remove",
      showCancelButton: true,
      cancelButtonText: "cancel",
      confirmButtonColor: "red",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) dispatch(Actions.removeFromCart(_id));
    });
  };

  const quantity = cart?.map((v: Icart, index: number) => {
    return v.quantity;
  });

  // const addQuantity =async (_id: string) => {
  //  await dispatch(Actions.addToCart(_id));
  //   dispatch(Actions.setQuantity(addToCartReducer.data));
  // };
  // if (showAlert) {
  //   return <Alert variant="danger" show={showAlert} >Are You Sure To Remove This Item</Alert>;
  // }

  const cartDetails = cartInfo?.map((product: Iproduct, index: number) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{quantity[index]}</td>
        <td>
          <button
            onClick={() => removeProduct(product._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
        <td>Rs :{ Math.round(quantity[index] * product.price)}</td>
        <td hidden={true}>
          {subTotal =  Math.round(subTotal + (quantity[index] * product.price))}
        </td>
      </tr>
    );
  });

  //main return section;
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>{showDel === false && cartDetails}</tbody>
      </table>
      <div className="btn-center">
        <p>Subtotal Amount:{subTotal}</p>
        <PayPalButton
          amount="0.01"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(
            details: { payer: { name: { given_name: string } } },
            data: { orderID: any }
          ) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          }}
        />
      </div>
    </div>
  );
};

export default UserCartInfo;
