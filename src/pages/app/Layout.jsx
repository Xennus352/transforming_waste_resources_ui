import React from "react";
import { Outlet } from "react-router-dom";
import { useGetCurrentUser } from "../../react-query/user";
import AppLeftSight from "./AppLeftSight";

const Layout = () => {
  // get current user
  const { data: user } = useGetCurrentUser();

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-full">
        <div className=" col-span-2 border-r-2 p-2 sticky top-0">
          <AppLeftSight user={user}/>
        </div>

        {/* data from nested routes  */}
        <div className="col-span-10 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
