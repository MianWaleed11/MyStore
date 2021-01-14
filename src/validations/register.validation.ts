import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.number().required(),
});
