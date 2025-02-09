import React from "react";
import Table from "../../components/admin_comp/Table";
import Divider from "../../components/Divider";
import { modal } from "../../utils/modal";

const AdminBlog = () => {
  return (
    <div>
      <div className="text-2xl flex items-center justify-between">
        Dashboard
        <div
          className="btn btn-outline"
          onClick={() => {
            modal("create-blog-form");
          }}
        >
          Create New Blog
        </div>
      </div>
      <Divider />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default AdminBlog;
