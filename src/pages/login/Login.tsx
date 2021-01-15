import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import { LogInInterface } from "../../interfaces/login.interface";
import { loginSchema } from "../../validations/login.validation";
import axios from "axios";
import * as Actions from "../../redux/user/user.slice";
import "./login.css";
export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();
  let  from:any  = location.state || { from: { pathname: "/" } };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const registerFirst =() =>{
    history.replace("/register") 
  }
  const onSubmit = async (data: LogInInterface) => {
    console.log(data);
    history.replace(from)
    // try {
    //   let res = await axios.post(
    //     "http://localhost:5000/api/users/login",
    //     data
    //   );
    //   console.log(res.data.userId);
    //   dispatch(Actions.setLogin(res.data.userId));
    //   history.replace("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <div className="form-containor">
        <form
          style={{ width: "300px", textAlign: "center" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>Sign In</legend>
          <fieldset>
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
              Log In
            </button>
            <div>
              <span onClick={registerFirst}>
                New Here? Register First.
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
