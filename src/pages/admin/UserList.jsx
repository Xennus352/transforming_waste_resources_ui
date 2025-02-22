import React from "react";
import recycleSign from "../../assets/recycle-sign.png";

import { useDeleteUser, useGetAllUsers } from "../../react-query/admin/admin";

const UserList = () => {
  // get all users
  const { data: users, isLoading } = useGetAllUsers();
  console.log(users);

  //delete user
  const { mutate: deleteUser } = useDeleteUser();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
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

            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index} className="hover hover:cursor-pointer ">
                    <th>{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className="p-0">
                      <img
                        src={user.picture ? user.picture : recycleSign}
                        className=" w-2/4 h-1/4 object-cover rounded-full"
                        alt="picture"
                      />
                    </td>
                    <td className="flex flex-col gap-2 items-center h-full  my-6">
                      {/* <button
                        className="btn btn-outline btn-primary disabled:bg-success disabled:cursor-not-allowed"
                        onClick={() => {}}
                      >
                        Update
                      </button> */}
                      <button
                        className="btn btn-outline btn-error "
                        onClick={() => {
                          deleteUser(user.id);
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

export default UserList;
