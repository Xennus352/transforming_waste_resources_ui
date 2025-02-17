import React from "react";
import { Outlet } from "react-router-dom";
import { useGetCurrentUser } from "../../react-query/user";

import AdminLeftSide from "../../components/admin_comp/AdminLeftSide";

const AdminLayout = () => {
  const { data: user } = useGetCurrentUser();

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-full">
        <div className=" col-span-2 border-r-2 p-2 sticky top-0">
          <AdminLeftSide user={user} />
        </div>

        {/* data from nested routes  */}
        <div className="col-span-10 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
