import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookCopy,
  House,
  LetterText,
  LogOut,
  Rss,
  Settings,
  Store,
  Webhook,
} from "lucide-react";
import { useLogout } from "../../react-query/auth";

const AdminNav = ({ user }) => {
  const navigate = useNavigate();

  const { mutate: logout } = useLogout();

  // routes
  const routes = [
    {
      path: "feed",
      title: "Feed",
      icon: <House />,
    },
    {
      path: "blog",
      title: "Blog",
      icon: <Rss />,
    },
    {
      path: "market",
      title: "Market",
      icon: <Store />,
    },

    {
      path: "hand-made-guide",
      title: "Handmade ",
      icon: <BookCopy />,
    },
    {
      path: "feedback",
      title: "Feedback",
      icon: <LetterText />,
    },
    {
      path: "setting",
      title: "Setting",
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
            <div key={index}>
              <div
                className="btn btn-outline w-full mt-3"
                onClick={() =>
                  navigate(`/dashboard/${r.path}`, { replace: true })
                }
              >
                <span className="hidden sm:hidden md:block lg:block xl:block">
                  {r.title}
                </span>
                {r.icon}
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
          Wbsite
        </span>
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

export default AdminNav;
