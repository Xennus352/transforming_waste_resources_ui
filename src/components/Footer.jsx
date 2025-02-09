import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import ModalBtn from "./modal/ModalBtn";
import { useGetCurrentUser } from "../react-query/user";

const Footer = () => {
  const { pathname } = useLocation();
  const isAppRoute = useMatch("/app/*");
  const isAdminRoute = useMatch("/dashboard/*");

  // get current user
  const { data: user, isLoading } = useGetCurrentUser();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling effect
    });
  };

  return (
    <div
      className={`${
        pathname == "/hero" || isAppRoute || isAdminRoute ? "hidden" : "block"
      }`}
    >
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link
            to="/"
            className="btn btn-accent btn-outline"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-accent btn-outline"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="btn btn-accent btn-outline"
            onClick={scrollToTop}
          >
            Contact
          </Link>
          <Link
            to="/organization"
            className="btn btn-accent btn-outline"
            onClick={scrollToTop}
          >
            Organization
          </Link>

          {user ? (
            <div className="btn btn-accent btn-outline">Logout</div>
          ) : (
            // <ModalBtn id="login-form" btnName="Login" iconName="" />

            <ModalBtn id="login-form" btnName="Login" iconName="" />
          )}
        </nav>{" "}
        <div className="flex items-center">
          Currently logined as :{" "}
          <div className=" uppercase ">
            {isLoading ? (
              "loading..."
            ) : user ? (
              <p className="underline tracking-widest">{user?.username}</p>
            ) : (
              "not-login"
            )}
          </div>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Transforming Waste Into Resources
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
