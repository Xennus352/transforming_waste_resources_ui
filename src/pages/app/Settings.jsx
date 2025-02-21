import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider";
import ProfileCard from "../../components/ProfileCard";
import { useGetCurrentUser, useGetUserPost } from "../../react-query/user";
import { Languages } from "lucide-react";
import { useDeleteBlog } from "../../react-query/admin/admin";

const Settings = () => {
  //get language
  const [lang, setLang] = useState(false);

  // get current user
  const { data: user } = useGetCurrentUser();

  //delete post
  const { mutate: deletePost } = useDeleteBlog();

  // Effect to set initial language from localStorage
  useEffect(() => {
    const currentLang = localStorage.getItem("Language");
    if (currentLang === "myanmar") {
      setLang(false); // Assuming true means Myanmar
    } else {
      setLang(true); // Assuming false means English
    }
  }, [lang]);

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

  // get post
  const { data: currentUserPosts } = useGetUserPost();

  // Filter posts where userId matches currentUser Id
  const userPosts = currentUserPosts
    ? currentUserPosts
        .filter((post) => post.user_id === user.id) // Filter posts
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort in descending order
    : [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xl">Profile</div>
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

      <Divider />
      <div>
        <ProfileCard />
      </div>
      <Divider title={"Manage Posts"} />

      <div>
        {userPosts?.map((post) => {
          return (
            <div
              key={post.id}
              className="card lg:card-side bg-base-100 shadow-xl my-3"
            >
              <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full ">
                <img src={post?.picture} className="object-cover" alt="post" />
              </figure>
              <div className="card-body  lg:w-2/5 xl:w-2/5">
                <h2 className="card-title">{post?.title}</h2>

                <div className="">
                  {lang ? (
                    <p>{post.content}</p>
                  ) : (
                    <p>
                      {post.contentInBurmese
                        ? post.contentInBurmese
                        : "Not add in db"}
                    </p>
                  )}
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-error btn-outline"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
