import React from "react";
import { ILoginData } from "../../interfaces/register.interface";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../validations/register.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import "./register.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Actions from "../../redux";
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
    console.log(data)
    try {
      await axios.post("http://localhost:5000/api/users/register", data);
      history.replace("/login");
    } catch (error) {
      console.log(error);
    }
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

  return (
    <div>
      <div className="at-formholder">
        <form
          style={{ width: "300px", textAlign: "center" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>Register User</legend>
          <fieldset>
            <div className="form-group">
              <label className="label-text">First Name</label>
              <input
                type="text"
                className="form-control"
                id="text"
                name="name"
                aria-describedby="emailHelp"
                placeholder="Enter First Name"
                ref={register}
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.name?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Last Name</label>
              <input
                ref={register}
                type="text"
                className="form-control"
                id="text"
                name="lastname"
                aria-describedby="emailHelp"
                placeholder="Enter Last Name"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.lastname?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Role</label>
              <input
                ref={register}
                type="text"
                className="form-control"
                id="text"
                name="role"
                aria-describedby="emailHelp"
                placeholder="Enter Role"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.role?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Email</label>
              <input
                type="email"
                ref={register}
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.email?.message}
              </small>
            </div>

            <div className="form-group">
              <label className="label-text">Password</label>
              <input
                name="password"
                type="password"
                ref={register}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.password?.message}
              </small>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>

            <div>
              <label onClick={alreadyUser}>Already a User? Sign In</label>
            </div>
            <div>
              <FacebookLogin
                appId="848624172349220"
                autoLoad={false}
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
  );
 
};

export default RegisterPage;
