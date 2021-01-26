import React from "react";
import * as Actions from "../../redux";
import "./addToCart.css";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import { selectCart, selectCartInfo } from "../../redux/cart/cart.selector";
export interface AddToCartProps {}

const AddToCart: React.FC<AddToCartProps> = () => {
  const cartInfo = useSelector(selectCartInfo);
  const cart = useSelector(selectCart);
  let dispatch = useDispatch();
  let subTotal = 0;
  const quantity = cart.map((v: any) => {
    return v.quantity;
  });
  const removeFromCart = (id: string) => {
    console.log(id);
    dispatch(Actions.removeCartItem(id));
  };
  const cartDetail = cartInfo.map((v: any, i: number) => {
    return (
      <tr>
        <th scope="row">{i + 1}</th>
        <td>{v.title}</td>
        <td>{v.price}</td>
        <td>{quantity[i]}</td>
        <td>
          <button onClick={() => removeFromCart(v._id)}>Delete</button>
        </td>
        <td>{quantity[i] * v.price}</td>

        <td hidden={true}> {(subTotal = subTotal + quantity[i] * v.price)}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Number</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>{cartDetail}</tbody>
      </table>
      <div className="btn-center">
        <p>Subtotal: {subTotal}</p>
        <PayPalButton
          amount="0.01"
          onSuccess={(
            details: { payer: { name: { given_name: string } } },
            data: { orderID: any }
          ) => {
            alert("Transaction completed by " + details.payer.name.given_name);
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

export default AddToCart;
