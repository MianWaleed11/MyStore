import React from "react";
// import { ILoginData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../validations/login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
<<<<<<< HEAD
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
 
=======
import { useDispatch } from "react-redux";
import "./register.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Actions from "../../redux/user/user.slice";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
// 564695661364-q05j2r1ptgu63jdoorulcl5iho8n54kv.apps.googleusercontent.com client id
// XES5AIFxRP1L3ePOTZUBAhSr secret
const RegisterPage: React.FC = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data: ILoginData) => {
    try {
      let res = await axios.post(
        "http://127.0.0.1:3000/api/users/signup",
        data
      );
      console.log(res.data.meta.token);
      dispatch(Actions.setLogin(res.data.meta.token));
      history.replace("/");
    } catch (error) {}
  };

  const responseFacebook = (response: any) => {
    console.log(response);
  };
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const alreadyUser = () => {
    history.push("/login");
  };

>>>>>>> 385ba3c6a8f0f41ea46568eb952300ddf8bd42f4
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

<<<<<<< HEAD
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
=======
            <div>
              <label onClick={alreadyUser}>Already a User? Sign In</label>
            </div>
            <div>
              <FacebookLogin
                appId="848624172349220"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
            <div>
              <GoogleLogin
                clientId="564695661364-q05j2r1ptgu63jdoorulcl5iho8n54kv.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
>>>>>>> 385ba3c6a8f0f41ea46568eb952300ddf8bd42f4
  );
  history.push("/products/${}");
};

export default RegisterPage;
