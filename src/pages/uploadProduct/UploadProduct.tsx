import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UploadProductsProps } from "../../interfaces";
import { HttpService } from "../../services/base.service";
import { productService } from "../../services/product.service";
import axios from "axios";
import { UploadProductSchema } from "../../validations/upload.product.validation";
import Cloudinary from "cloudinary";
import { Image } from "cloudinary-react";

const UploadProduct: React.FC = () => {
  let history = useHistory();

  let imageURL: string = "";
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(UploadProductSchema),
  });

  const onSubmit = async (data: UploadProductsProps) => {
    console.log(data);
    console.log("Before");
    data.image = "http://localhost:5000/" + imageURL;
    console.log(data);
    console.log("after");

    try {
      await axios.post("http://localhost:5000/api/product/uploadProduct", data);
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const openWidget =() => {
    try {
      let widget = (window as any).cloudinary.createUploadWidget(
        {
          cloudName: `duckyou`,
          uploadPreset: `ml_default`,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("URL: " + result.info.url);
            imageURL = result.info.url;
          }
        }
      );
      widget.open();
      console.log(widget);
    } catch (error) {
      console.log(error);
    }
    };

  // const handleChange = async (event: any) => {
  //   try {
  //     const fd = new FormData();
     
  //     fd.append("file", event.target.files[0]);

  //      fd.append("upload_preset", "uppwslr7");
   
  //     let res = await axios.post(
  //       "https://api.cloudinary.com/v1_1/dpmmnkiu4/image/upload",
  //       fd
  //     );

  //     console.log("this is image", res);
  //     imageURL = res.data.image;
    
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <div className="form-containor">
        <button onClick={openWidget}>Upload</button>
        <form
          style={{ width: "300px", textAlign: "center" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>Upload Product</legend>
          <fieldset>
            <div className="form-group">
              <label className="label-text">Title</label>
              <input
                type="text"
                ref={register}
                className="form-control"
                id="email"
                name="title"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.title?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Description</label>
              <input
                name="description"
                type="text"
                ref={register}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Description"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.description?.message}
              </small>
            </div>

            <div className="form-group">
              <label className="label-text">Category</label>
              <input
                type="text"
                ref={register}
                className="form-control"
                id="email"
                name="category"
                aria-describedby="emailHelp"
                placeholder="Enter Category"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.category?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Image</label>
              {/* <input
                type="file"
                ref={register}
                className="form-control"
                id="email"
                name=""
                onChange={openWidget}
                aria-describedby="emailHelp"
                placeholder="Enter Image"
              /> */}
              {/* <img src={selectedFile} width="40px" height="40px"/> */}
              <small id="emailHelp" className="form-text text-muted">
                {errors.image?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Price</label>
              <input
                type="number"
                ref={register}
                className="form-control"
                id="email"
                name="price"
                aria-describedby="emailHelp"
                placeholder="Enter Price"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.price?.message}
              </small>
            </div>

            <div className="form-group">
              <label className="label-text">Continents</label>
              <input
                type="number"
                ref={register}
                className="form-control"
                id="email"
                name="continents"
                aria-describedby="emailHelp"
                placeholder="Enter Continents"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.continents?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">Sold</label>
              <input
                type="number"
                ref={register}
                className="form-control"
                id="email"
                name="sold"
                aria-describedby="emailHelp"
                placeholder="Enter number of items Sold"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.sold?.message}
              </small>
            </div>
            <div className="form-group">
              <label className="label-text">views</label>
              <input
                type="number"
                ref={register}
                className="form-control"
                id="email"
                name="views"
                aria-describedby="emailHelp"
                placeholder="Enter Views"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.views?.message}
              </small>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Create Product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
