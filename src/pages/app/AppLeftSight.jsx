import React from "react";
import AppNav from "../../components/app_comp/AppNav";
import ProfilePic from '../../assets/recycle-sign.png'

const AppLeftSight = ({ user }) => {
  return (
    <div className="sticky top-0">
      {/* user profile */}

      <div>
        <div className="avatar w-full select-none">
          <div className="w-24 rounded-full mx-auto my-0">
            <img src={ProfilePic} alt="Profile"/>
          </div>
        </div>
        <p className="text-center border-b-4 rounded-sm uppercase tracking-widest border-teal-200">
          {user?.username}
        </p>
      </div>
      {/* side nav for app  */}
      <div className="mt-2 ">
        <AppNav />
      </div>
    </div>
  );
};

export default AppLeftSight;
