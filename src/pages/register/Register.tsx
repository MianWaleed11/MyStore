import React from "react";
import { ILoginData } from "../../interfaces/register.interface";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../validations/register.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "./register.css";
import * as Action from "../../redux/user/user.slice";
import { useHistory } from "react-router-dom";
import { userService } from "../../services/user.service";
import axios from "axios";
import * as Actions from "../../redux/user/user.slice";

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
      dispatch(Actions.setToken(res.data.meta.token));
      history.replace("/");
    } catch (error) {}
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
                name="firstname"
                aria-describedby="emailHelp"
                placeholder="Enter First Name"
                ref={register}
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.firstname?.message}
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
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
