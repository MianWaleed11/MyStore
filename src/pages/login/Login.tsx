import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { LogInInterface } from "../../interfaces/login.interface";
import { loginSchema } from "../../validations/login.validation";
import { LoginProps } from "../../interfaces";
import "./login.css";
import * as Actions from "../../redux";
import {
  selectRedirectPath,
  selectToken,
} from "../../redux/user/user.selector";
import Swal from "sweetalert2";
import { selectData } from "../../redux/cart/cart.selector";
interface temp {
  from: string;
}
const Login: React.FC<LoginProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  let { from } = useParams<temp>();

  //selectors here
  const path = useSelector(selectRedirectPath);
  const token = useSelector(selectToken);
  const Userdata = useSelector(selectData);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const registerFirst = () => {
    history.replace("/register");
  };
  
  const onSubmit =async  (data: LogInInterface) => {
  
   const res:any=await  dispatch(Actions.loginUser(data));
   console.log(res);
   
    if (res.payload.loginSuccess === false) {
    
      Swal.fire({
        title: "product info",
        titleText: "Please Register Your Account",
        icon: "warning",
        confirmButtonText: "Register",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/register");
        }
      });
    } else {
   
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      history.replace(path);
    }
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
              <span onClick={registerFirst}>New Here? Register First.</span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
