import React, { useState } from "react";
import Divider from "../../components/Divider";
import { useGetProduct } from "../../react-query/product";
import { useForm } from "react-hook-form";
import MarketCard from "../../components/Cards/MarketCard";
import { modal } from "../../utils/modal";

const MarketPage = () => {
  // get product
  const { data: products = [], isLoading, isError } = useGetProduct();

  // handle form inputs using react hook form
  const [display, setDisplay] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watch the search term input
  const searchTerm = watch("searchTerm", "");

  // Filter posts based on the search term
  const filteredPosts = products?.filter(
    (post) =>
      post.product_name.toLowerCase().includes(searchTerm.toLowerCase()) || // Assuming posts have a title
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) // Assuming posts have a body
  );

  // Sort filtered posts in descending order based on the created_at property
  const sortedFilteredPosts = filteredPosts.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  //! for search form submitting no need for now but keep it for future
  const onSubmit = (data) => {
    console.log(data);
  };

  //* specific button array
  const wastType = [
    { title: "all" },
    { title: "ground" },
    { title: "plastic" },
    { title: "tire" },
    { title: "paper" },
    { title: "other" },
  ];

  // for data display
  let content;

  // Function to handle button clicks
  const handleButtonClick = (title) => {
    setDisplay(title);
  };

  // to handle the request
  switch (display) {
    case "all":
      content = sortedFilteredPosts.map((blog, i) => {
        return (
          <div key={i}>
            <MarketCard post={blog} />
          </div>
        );
      });
      break;

    // Add more cases for other filters
    case "ground":
      content = sortedFilteredPosts
        .filter((post) => post.category === "ground")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "plastic":
      content = sortedFilteredPosts
        .filter((post) => post.category === "plastic")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "tire":
      content = sortedFilteredPosts
        .filter((post) => post.category === "tire")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "paper":
      content = sortedFilteredPosts
        .filter((post) => post.category === "paper")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    case "other":
      content = sortedFilteredPosts
        .filter((post) => post.category === "other")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    default:
      content = sortedFilteredPosts.map((blog, i) => {
        return (
          <div key={i}>
            <MarketCard post={blog} />
          </div>
        );
      });
      break;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center  justify-around ">
        <h2 className="text-xl font-bold tracking-wider">Market Place</h2>
        <form className="text-xl " onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Search here"
            {...register("searchTerm")}
            className="input input-bordered input-primary w-full  max-w-xl"
          />
        </form>

        <div>
          <button
            className="btn btn-outline"
            onClick={() => {
              modal("product");
            }}
          >
            Create!
          </button>
        </div>
      </div>

      {/* for sub buttons  */}
      <div className="flex items-center justify-evenly flex-wrap mt-3 gap-3">
        {wastType.map((t, i) => {
          return (
            <div
              className="btn btn-outline"
              key={i}
              onClick={() => handleButtonClick(t.title)}
            >
              {t.title}
            </div>
          );
        })}
      </div>

      <Divider />

      {/* cards  */}
      <div className="m-3 flex flex-col gap-4">
        {isError && (
          <p className="text-error text-2xl  flex items-center gap-4 justify-center">
            Failed to fetch data! <Unplug />
          </p>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {content}
      </div>
    </div>
  );
};

export default MarketPage;
