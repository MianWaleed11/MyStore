import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { LogInInterface } from "../../interfaces/login.interface";
import { loginSchema } from "../../validations/login.validation";
import { LoginProps } from "../../interfaces";
import "./login.css";
import * as Actions from "../../redux";
import axios from "axios";
import { HttpService } from "../../services/base.service";
interface temp {
  from: string;
}
const Login: React.FC<LoginProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  let { from } = useParams<temp>();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const path: string = useSelector(
    (state: any) => state.userReducer.redirectPath
  );

  const userReducer = useSelector((state: any) => state.userReducer);

  const registerFirst = () => {
    history.replace("/register");
  };
  const onSubmit = (data: LogInInterface) => {
    // let res = await axios.post("http://localhost:5000/api/users/login", data);
    // console.log(path);
    // dispatch(Actions.setLogin(res.data.userId));
    dispatch(Actions.loginUser(data));

    history.replace(path);
    // HttpService.setToken(token)
    console.log("token================>", userReducer.token);

    //  catch (error) {
    //   console.log(error);
    // }
  };
  const goBack = () => {
    history.goBack();
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

            <button onClick={goBack} className="btn btn-outline-primary mr-5" >Cancel</button>
            <button type="submit" className="btn btn-outline-primary">
              Log In
            </button>
            <div>
              <span onClick={registerFirst}>New Here? Register First.</span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
