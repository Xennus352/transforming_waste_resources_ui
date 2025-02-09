import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BookCopy,  House, LetterText, LogOut, Rss, Settings, Store, Webhook } from "lucide-react";

const AdminNav = () => {
  const navigate = useNavigate();

  // routes
  const routes = [
    {
      path: "feed",
      title: "Home Feed",
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
      title: "Hand Made Guide",
      icon: <BookCopy />,
    },
    {
      path: "feedback",
      title: "Feedback",
      icon: <LetterText />
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
                onClick={() => navigate(`/dashboard/${r.path}`, { replace: true })}
              >
                {r.title} {r.icon}
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
        Go to website <Webhook />
      </div>
      {/* handle to logout  */}
      <div
        className="btn btn-outline w-full mt-3"
        onClick={() => {
          toast.success("Successfully logged out!");
        }}
      >
        Logout <LogOut />
      </div>
    </div>
  );
};

export default AdminNav;
