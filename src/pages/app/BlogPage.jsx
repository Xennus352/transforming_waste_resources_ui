import React, { useState } from "react";
import BlogCard from "../../components/Cards/BlogCard";
import { useGetBlog } from "../../react-query/admin/admin";
import { Languages } from "lucide-react";
import Divider from "../../components/Divider";

const BlogPage = () => {
  const { data: blog, isLoading } = useGetBlog();

  const [lang, setLang] = useState(false);

  const wastType = [
    { title: "most like" },
    { title: "useful" },
    { title: "water" },
    { title: "air" },
    { title: "ground" },
    { title: "plastic" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="text-xl w-full">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-primary w-full  max-w-xl"
          />
        </div>
        <button
          className="btn btn-primary "
          onClick={() => {
            setLang(!lang);
          }}
        >
          {" "}
          <Languages /> Search
        </button>
      </div>

      <div className="flex items-center justify-evenly flex-wrap mt-3 gap-3">
        {" "}
        {wastType.map((t, i) => {
          return (
            <div className="btn btn-outline" key={i}>
              {t.title}
            </div>
          );
        })}
      </div>

      <Divider />

      {/* cards  */}
      <div className="m-3 flex flex-col gap-4">
        {isLoading
          ? "Loading"
          : blog &&
            blog?.map((blog, index) => {
              return (
                <div key={index}>
                  {" "}
                  <BlogCard blog={blog} lang={lang} setLang={setLang} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default BlogPage;
