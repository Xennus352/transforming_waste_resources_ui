import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BookCopy,
  BookMarked,
  House,
  LogOut,
  ScanSearch,
  Settings,
  Store,
  Webhook,
} from "lucide-react";
import { useLogout } from "../../react-query/auth";
import { useGetUserPost } from "../../react-query/user";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
const AppNav = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: logout } = useLogout();
  // const { data: posts } = useGetUserPost();

  const [newPostCount, setNewPostCount] = useState(0);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("newPostNotification", (post) => {
      setNotifications((prev) => [...prev, `New post: ${post.title}`]);
    });

    socket.on("updatePostCount", (count) => {
      setNewPostCount(count);
    });

    return () => {
      socket.off("newPostNotification");
      socket.off("updatePostCount");
    };
  }, []);

  // 21 > new = 23

  //item 20 last 23

  //   // Sort posts by created_at in descending order
  //   const temp = []

  //   const sortedPosts =
  //   posts &&
  //   posts
  //     .sort((a, b) => b.id - a.id)
  //     .slice(0,1);

  // console.log('from db new', sortedPosts);

  // // Sort posts by date and get the latest
  // const latestPosts = posts && sortedPosts.length > 0
  //   ? posts.sort((a) => a.id > sortedPosts[0].id)
  //   : [];

  //   let test  = sortedPosts && sortedPosts[0].id > latestPosts
  //   temp.push(test)
  //   console.log('temp',temp)

  // console.log('from db old', latestPosts);

  //   useEffect(() => {
  //     if (posts && location.pathname !== "/app/feed") {
  //       const currentPostCount = posts.length;
  //       console.log("latest", sortedPosts?.length);
  //       console.log("Current post count:", currentPostCount);

  //       // Check if there are new posts
  //       if (newPostCount < currentPostCount) {
  //         // Increment new post count by the number of new posts
  //         setNewPostCount(sortedPosts?.length);
  //       }
  //     }
  //   }, [posts, sortedPosts?.length, newPostCount]);

  useEffect(() => {
    // Reset new post count when the user navigates to the posts page
    if (location.pathname === "/app/feed") {
    setNewPostCount(0); // Reset to 0 when viewing the feed
      console.log("Reset post count to 0", newPostCount);
    }
  }, [location.pathname, newPostCount]);


  const path = location.pathname; 
  const lastSegment = path.split('/').pop(); 

  // routes
  const routes = [
    {
      path: "feed",
      title: "Feed",
      icon: <House />,
    },
    {
      path: "search",
      title: "Search",
      icon: <ScanSearch />,
    },
    {
      path: "market",
      title: "Market",
      icon: <Store />,
    },

    {
      path: "hand-made-guide",
      title: "Handmade",
      icon: <BookCopy />,
    },
    {
      path: "save",
      title: "Saved",
      icon: <BookMarked />,
    },
    {
      path: "setting",
      title: "Profile",
      icon: <Settings />,
    },
  ];
  return (
    <div>
      {/* buttons  */}
      <div>
        {/* create route button  */}
        {routes.map((r, index) => {
          return (
            <div
              key={index}
              className={`${
                r.path === "feed" && newPostCount ? "animate-bounce" : ""
              } `}
            >
              <div
                className={`btn btn-outline w-full mt-3 relative  ${lastSegment == r.path ? "bg-primary" : "" } `}
                onClick={() => navigate(`/app/${r.path}`, { replace: true })}
              >
                <span className="hidden sm:hidden md:block lg:block xl:block">
                  {r.title}
                </span>
                {r.icon}
                {r.path === "feed" && newPostCount > 0 && (
                  <div className="badge badge-secondary">
                    {newPostCount}
                   
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* handle to go to web  */}
      <div
        className="btn btn-outline w-full mt-3"
        onClick={() => navigate("/")}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block">
          Website
        </span>{" "}
        <Webhook />
      </div>
      {/* handle to logout  */}
      <div
        className="btn btn-outline w-full mt-3"
        onClick={() => {
          logout(user.id);
        }}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block">
          Logout
        </span>{" "}
        <LogOut />
      </div>
    </div>
  );
};

export default AppNav;



