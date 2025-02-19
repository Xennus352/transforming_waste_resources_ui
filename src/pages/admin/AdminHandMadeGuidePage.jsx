import React from "react";
import Divider from "../../components/Divider";
import { modal } from "../../utils/modal";
import HandTable from "../../components/admin_comp/HandTable";

const AdminHandMadeGuidePage = () => {
  return (
    <div>
      <div className="text-2xl flex items-center justify-between">
        Dashboard
        <div
          className="btn btn-outline"
          onClick={() => {
            modal("create-handmade-form");
          }}
        >
          Create New Blog
        </div>
      </div>
      <Divider />
      <div>
        <HandTable />
      </div>
    </div>
  );
};

export default AdminHandMadeGuidePage;
