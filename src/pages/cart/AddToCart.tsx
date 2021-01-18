import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
export interface AddToCartProps {}

const AddToCart: React.FC<AddToCartProps> = () => {
  const isloggedIn = useSelector((state: any) => {
    return state.userReducer.isloggedIn;
  });

//   if (isloggedIn===false) {
//     // user not logged in
//     return (
//       <Redirect
//         to={{
//           pathname: "/login",
//           state: { next: routeProps.location.pathname }
//         }}
//       />
//     );
//   }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">-</th>
            <th scope="col">Number</th>
            <th scope="col">+</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Subtotal:Amount</p>
      </div>
    </div>
  );
};

export default AddToCart;
