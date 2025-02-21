import React from "react";
import AppNav from "../../components/app_comp/AppNav";
import ProfilePic from "../../assets/recycle-sign.png";

const AppLeftSight = ({ user }) => {
  return (
    <div className="sticky top-0">
      {/* user profile */}

      <div className="  border-b-4 rounded-sm  border-teal-200">
        <div className="avatar w-full select-none">
          <div className="w-24 rounded-full mx-auto my-0">
            <img
              src={user?.picture ? user.picture : ProfilePic}
              alt="Profile"
            />
          </div>
        </div>
        <p
          className={`hidden sm:hidden md:block lg:block xl:block text-center uppercase tracking-widest `}
        >
          {user?.username}
        </p>
      </div>
      {/* side nav for app  */}
      <div className="mt-2 ">
        <AppNav user={user} />
      </div>
    </div>
  );
};

export default AppLeftSight;
