import React from "react";
import { useDeleteHand, useGetBlog } from "../../react-query/admin/admin";

const HandTable = () => {
  const { data: blog, isLoading } = useGetBlog();

  //delete posts
  const { mutate: adminDeleteHand } = useDeleteHand();

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
              <th>Description In Burmese</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr className=" w-full text-center text-2xl">
                <td>Fetching Data!</td>
              </tr>
            )}
            {/* row  */}

            {blog &&
              blog.map((blog, index) => {
                return (
                  <tr key={index} className="hover hover:cursor-pointer ">
                    <th>{index + 1}</th>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
                    <td>{blog.description_burmese}</td>
                    
                    <td className="p-0">
                      <img
                        src={blog.waste_pic}
                        className=" h-3/4 object-cover"
                        alt="picture"
                      />
                    </td>
                    <td className="flex flex-col gap-2 items-center h-full  my-6">
                      {/* <button className="btn btn-outline ">Edit</button> */}
                      <button
                        className="btn btn-outline btn-error "
                        onClick={() => {
                          adminDeleteHand(blog.id);
                        }}
                      >
                        Delete
                      </button>
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

export default HandTable;
