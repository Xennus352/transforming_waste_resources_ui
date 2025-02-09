import React from "react";
import { useDeleteBlog, useGetBlog } from "../../react-query/admin/admin";

const Table = () => {
  const { data: blog } = useGetBlog();

   const { mutate: adminDeleteBlog } = useDeleteBlog();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}

            {blog &&
              blog.map((blog,index) => {
                
                return (
                  <tr key={index} className="hover hover:cursor-pointer">
                    <th>{index +  1}</th>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
                    <td>
                      <img src={blog.waste_pic} width={39} alt="picture" />
                    </td>
                    <td className="flex gap-2">
                      <button className="btn btn-outline ">Edit</button>
                      <button className="btn btn-outline " onClick={() => { adminDeleteBlog(blog.id) }}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
