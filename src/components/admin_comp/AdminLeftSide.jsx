import React from "react";
import AdminNav from "./AdminNav";
import ProfilePic from "../../assets/recycle-sign.png";

const AdminLeftSide = ({ user }) => {
  return (
    <div className="sticky top-0">
      {/* user profile */}

      <div  className="  border-b-4 rounded-sm  border-teal-200">
        <div className="avatar w-full select-none">
          <div className="w-24 rounded-full mx-auto my-0">
            <img src={ProfilePic} alt="Profile" />
          </div>
        </div>
        <p className="text-center border-b-4 rounded-sm uppercase tracking-widest hidden sm:hidden md:block lg:block xl:block">
          {user?.username}
        </p>
      </div>
      {/* side nav for app  */}
      <div className="mt-2 ">
        <AdminNav user={user} />
      </div>
    </div>
  );
};

export default AdminLeftSide;
