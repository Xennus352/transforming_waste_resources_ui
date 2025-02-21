import React, { useState } from "react";
import Divider from "../../components/Divider";
import {
  useGetLike,
  useGetUserPost,
} from "../../react-query/user";
import { useForm } from "react-hook-form";
import MarketCard from "../../components/Cards/MarketCard";

const BlogPage = () => {
  const { data: posts = [], isLoading, isError } = useGetUserPost();

  // get like
  const { data: totalLike } = useGetLike();


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
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Assuming posts have a title
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) // Assuming posts have a body
  );

  //! for form submitting
  const onSubmit = (data) => {
    console.log(data);
  };


  //* specific button array
  const wastType = [
    { title: "all" },
    { title: "water" },
    { title: "air" },
    { title: "ground" },
    { title: "plastic" },
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
      content = filteredPosts.map((blog, i) => {
        // Find the total likes for the current post
        const postLikes = totalLike?.find((like) => like.post_id === blog.id);
        const totalLikesCount = postLikes ? postLikes.total_like_count : 0; // Assuming 'count' holds the number of likes

        return (
          <div key={i}>
            <MarketCard post={blog} />
          </div>
        );
      });
      break;


    // Add more cases for other filters
    case "water":
      content = filteredPosts
        .filter((post) => post.category === "water")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "air":
      content = filteredPosts
        .filter((post) => post.category === "air")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "ground":
      content = filteredPosts
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
      content = filteredPosts
        .filter((post) => post.category === "plastic")
        .map((blog, i) => {
          return (
            <div key={i}>
              <MarketCard post={blog} />
            </div>
          );
        });
      break;

    case "other":
      content = filteredPosts
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
      content = filteredPosts.map((blog, i) => {
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

export default BlogPage;
