import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider";
import { modal } from "../../utils/modal";
import SingleCard from "../../components/Cards/SingleCard";
import { useGetLike, useGetUserPost } from "../../react-query/user";
import { Languages } from "lucide-react";

const AppFeed = () => {
  const [lang, setLang] = useState(false);

  // get post
  const { data: posts = [], isLoading, isError } = useGetUserPost();

  // get like
  const { data: totalLike } = useGetLike();

  // Effect to set initial language from localStorage
  useEffect(() => {
    const currentLang = localStorage.getItem("Language");
    if (currentLang === "myanmar") {
      setLang(false); // Assuming true means Myanmar
    } else {
      setLang(true); // Assuming false means English
    }
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    // Get the current language from localStorage
    const currentLang = localStorage.getItem("Language");

    // Toggle the language
    if (currentLang === "myanmar") {
      localStorage.setItem("Language", "english"); // Set to English
      setLang(true); // Update state to English
    } else {
      localStorage.setItem("Language", "myanmar"); // Set to Myanmar
      setLang(false); // Update state to Myanmar
    }
  };
  console.log(totalLike);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xl">Feed</div>
        <button
          className="btn btn-primary "
          onClick={() => {
            setLang(!lang);
            toggleLanguage();
          }}
        >
          {" "}
          <Languages /> Translate
        </button>
      </div>
      <div className="top-0 sticky z-40 m-2">
        <Divider title={"Content"} />
        <input
          className="input placeholder:text-black placeholder:font-semibold file-input input-primary outline-none hover:cursor-pointer w-full disabled opacity-60"
          placeholder="What's on your mind! Let's create now..."
          type="text"
          onClick={() => {
            modal("create-post-form");
          }}
        />
      </div>

      {/* cards  */}
      <div className="m-3 flex flex-col gap-4">
        {isError && (
          <p className="text-error text-2xl  flex items-center gap-4 justify-center">
            {" "}
            Failed to fetch data! <Unplug />
          </p>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {posts &&
          posts?.map((post, index) => {
            return (
              <div key={index} className="flex flex-col">
                {/* only show when admin is approve  */}
                {post.isApprove == 0 && <SingleCard post={post} lang={lang} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AppFeed;
