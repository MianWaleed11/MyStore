import React from "react";
// import { ILoginData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../validations/login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../redux/user/user.slice";
const RegisterPage: React.FC = () => {
  let dispatch = useDispatch();
  const userState = useSelector((state: any) => state.userReducer.products);
  // const { register, handleSubmit, errors } = useForm<ILoginData>({
  //   resolver: yupResolver(loginSchema),
  // });
  // const onSubmit = async (data: ILoginData) => {
  //   console.log(data);
  //   dispatch(Action.userThunk(data));
  //   console.log(userState);
  // };
 
  return (
    <div>hello</div>
    // <div className="at-formholder">
    //   <h1>Create User</h1>
    //   <form
    //     style={{ width: "300px", textAlign: "center" }}
    //     onSubmit={onSubmit}
    //   >
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">First Name</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="firstname"
    //         name="name.firstname"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter First Name"
    //         ref={register}
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.name?.firstname?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Last Name</label>
    //       <input
    //         ref={register}
    //         type="text"
    //         className="form-control"
    //         id="text"
    //         name="name.lastname"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Last Name"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.name?.lastname?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="email"
    //         placeholder="Enter Email"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.email?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Username</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="text"
    //         name="username"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Username"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.username?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">City</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.city"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter City"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.city?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Street Name</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.street"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Street Name"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.street?.message}
    //       </small>
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">House Number</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.number"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter House Number"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.number?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Zipcode</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.zipcode"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Zipcode"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.zipcode?.message}
    //       </small>
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Lat</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.geolocation.lat"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter latitude"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.geolocation?.lat?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Long</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="address.geolocation.long"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Long"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.address?.geolocation?.long?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Phone</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="phone"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Phone"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.phone?.message}
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Password</label>
    //       <input
    //         type="text"
    //         ref={register}
    //         className="form-control"
    //         id="email"
    //         name="password"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter Password"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         {errors.password?.message}
    //       </small>
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Create User
    //     </button>
    //   </form>
    // </div>
  );
};

export default RegisterPage;
