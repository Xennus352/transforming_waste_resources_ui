import { ImageUp, Send } from "lucide-react";
import React, { useState } from "react";
import { useCreateProduct } from "../../react-query/product";
import { useForm } from "react-hook-form";

const Product = () => {
  const [base64, setBase64] = useState("");
  const [error, setError] = useState("");

  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    setValue, //To manually set form values
    formState: { errors },
  } = useForm();

  //   to create product
  const { mutate: createProduct } = useCreateProduct();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setBase64(reader.result);
          setValue("image", reader.result); // Update react-hook-form
        }
      };
      reader.onerror = () => {
        setError("Error converting file");
      };
    }
  };

  const onSubmit = (data) => {
    if (!base64) {
      setError("Please upload an image.");
      return;
    }
    data.image_url = base64; //Ensure base64 is sent in form data
    createProduct(data);
  };

  // category list
  const categories = [
    {
      value: "ground",
      name: "Ground",
    },
    {
      value: "plastic",
      name: "Plastic",
    },
    {
      value: "tire",
      name: "Tire",
    },
    {
      value: "paper",
      name: "Paper",
    },
  ];
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card lg:card-side shadow-xl bg-base-100 ">
          {/* image start  */}
          <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
            <label>
              <input type="hidden" {...register("picture")} />{" "}
              {/* Hidden input for base64 */}
              <div className=" w-full h-full">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p
                  className={`${
                    base64 && "hidden"
                  } cursor-pointer border-r-2 border-info h-full flex items-center justify-center`}
                >
                  Choose Photo <ImageUp size={38} />
                </p>

                {error && <p className="text-red-500">{error}</p>}
                {base64 && (
                  <div className="border-r-2 border-info w-full h-full flex items-center justify-center">
                    <img
                      src={base64}
                      alt="Uploaded"
                      className=" w-full h-full cursor-pointer object-cover"
                    />
                  </div>
                )}
              </div>
            </label>
            {/* image end */}
          </figure>
          <div className="card-body lg:w-2/5 xl:w-2/5">
            <h2 className="card-title">
              <input
                {...register("product_name", { required: true })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered m-2  border-t-0 input-info w-full max-w-xs"
              />
              <select
                className="select select-info border-t-0 m-2 w-full max-w-xs"
                {...register("category", { required: true })}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
            </h2>

            <div>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered m-2  border-t-0 input-info w-full max-w-xs"
              />
              <input
                {...register("quantity", { required: true })}
                type="text"
                placeholder="Quantity"
                className="input input-bordered m-2  border-t-0 input-info w-full max-w-xs"
              />
            </div>
            <div className="">
              <textarea
                placeholder="Description"
                {...register("description", { required: true })}
                className="textarea textarea-info  border-t-0 m-2 w-full h-40"
              ></textarea>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Post <Send />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;
