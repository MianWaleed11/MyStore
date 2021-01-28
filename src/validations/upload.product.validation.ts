import * as yup from "yup";

export const UploadProductSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().required(),
  // image: yup.string().required(),
  continents: yup.number().required(),
  sold: yup.number().required(),
  views: yup.number().required(),
});