import React, { useState } from "react";
import BlogCard from "../../components/Cards/BlogCard";
import Divider from "../../components/Divider";
import {
  useGetLike,
  useGetLikeByTotalCount,
  useGetUserPost,
} from "../../react-query/user";
import { useForm } from "react-hook-form";
import SingleCard from "../../components/Cards/SingleCard";

const BlogPage = () => {
  const { data: posts = [], isLoading, isError } = useGetUserPost();

  // get post by most liked
  const { data: mostLike } = useGetLikeByTotalCount();

  // get like
  const { data: totalLike } = useGetLike();

  // get language
  const lang = localStorage.getItem("Language");

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

  //* for specific requests
  const mostLikeFilter = () => {
    return mostLike?.map((ml, i) => {
      return (
        <div key={i}>
          <BlogCard post={ml} />
        </div>
      );
    });
  };

  //* specific button array
  const wastType = [
    { title: "all" },
    { title: "most like" },
    { title: "useful" },
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
            <SingleCard post={blog} lang={lang} totalLikes={totalLikesCount} />
          </div>
        );
      });
      break;

    case "most like":
      content = mostLikeFilter();
      break;

    // Add more cases for other filters
    case "useful":
      content = filteredPosts
        .filter((post) => post.useful == 1)
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "water":
      content = filteredPosts
        .filter((post) => post.category === "water")
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "air":
      content = filteredPosts
        .filter((post) => post.category === "air")
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "ground":
      content = filteredPosts
        .filter((post) => post.category === "ground")
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    // Add more cases for other filters
    case "plastic":
      content = filteredPosts
        .filter((post) => post.category === "plastic")
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;
          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    case "other":
      content = filteredPosts
        .filter((post) => post.category === "other")
        .map((blog, i) => {
          const postLikes = totalLike?.find((like) => like.post_id === blog.id);
          const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

          return (
            <div key={i}>
              <SingleCard
                post={blog}
                lang={lang}
                totalLikes={totalLikesCount}
              />
            </div>
          );
        });
      break;

    default:
      content = filteredPosts.map((blog, i) => {
        const postLikes = totalLike?.find((like) => like.post_id === blog.id);
        const totalLikesCount = postLikes ? postLikes.total_like_count : 0;

        return (
          <div key={i}>
            <SingleCard post={blog} lang={lang} totalLikes={totalLikesCount} />
          </div>
        );
      });
      break;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <form
          className="text-xl w-full flex  items-center justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
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
