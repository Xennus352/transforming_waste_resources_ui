import React, { useState } from "react";
import BlogCard from "../../components/Cards/BlogCard";
import { useGetBlog } from "../../react-query/admin/admin";
import { Languages } from "lucide-react";
import Divider from "../../components/Divider";

const BlogPage = () => {
  const { data: blog, isLoading } = useGetBlog();

  const [lang, setLang] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
      <div className="text-xl">Information About The Recycle</div>
        <button className="btn btn-primary " onClick={() => { setLang(!lang) }}>
          {" "}
          <Languages /> Translate
        </button>
      </div>
      <Divider/>

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
