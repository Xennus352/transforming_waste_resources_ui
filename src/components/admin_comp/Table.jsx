import React from "react";
import {
  useApprovePost,
  useDeleteBlog,
  useGetBlog,
} from "../../react-query/admin/admin";
import { useGetUserPost } from "../../react-query/user";

const Table = () => {
  const { data: blog } = useGetBlog();

  // get all user post
  const { data: userPosts, isLoading } = useGetUserPost();

  //delete posts
  const { mutate: adminDeleteBlog } = useDeleteBlog();

  // approve post
  const { mutate: approve } = useApprovePost();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
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

            {userPosts &&
              userPosts.map((blog, index) => {
                return (
                  <tr key={index} className="hover hover:cursor-pointer ">
                    <th>{index + 1}</th>
                    <td>{blog.title}</td>
                    <td>{blog.content}</td>
                    <td>{blog.contentInBurmese}</td>
                    
                    <td className="p-0">
                      <img
                        src={blog.picture}
                        className=" w-2/4 h-1/4 object-cover"
                        alt="picture"
                      />
                    </td>
                    <td className="flex flex-col gap-2 items-center h-full  my-6">
                      <button
                        className="btn btn-outline btn-primary disabled:bg-success disabled:cursor-not-allowed"
                        disabled={blog.isApprove == 1}
                        onClick={() => {
                          approve(blog.id);
                        }}
                      >
                        Approve
                      </button>
                      {/* <button className="btn btn-outline ">Edit</button> */}
                      <button
                        className="btn btn-outline btn-error "
                        onClick={() => {
                          adminDeleteBlog(blog.id);
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

export default Table;
