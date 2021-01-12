import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  name: yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
  }),
  address: yup.object().shape({
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.number().required(),
    zipcode: yup.number().required(),
    geolocation: yup.object().shape({
      lat: yup.number().required(),
      long: yup.number().required(),
    }),
  }),
  phone: yup.number().required(),
});
