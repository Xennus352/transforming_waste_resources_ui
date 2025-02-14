import React from "react";
import { useGetUserSavePost } from "../../react-query/user";
import { Unplug } from "lucide-react";
import Divider from "../../components/Divider";
import SaveCard from "../../components/Cards/SaveCard";

const SaveCollections = () => {
  const {
    data: savedPost = [],
    isLoading,
  } = useGetUserSavePost();



  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="text-xl">Saved Collections</div>
        {/* <button className="btn btn-primary " >
      
        <Languages /> Translate
      </button> */}
      </div>
      <Divider />

      {/* cards  */}
      <div className="m-3 flex flex-col-reverse gap-4">
       
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : savedPost.length == 0 ? (
          <p className="text-error text-2xl  flex items-center gap-4 justify-center">
            {" "}
            Nothing in save collection! <Unplug />
          </p>
        ) : (
          savedPost?.map((savedPost, index) => {
            return (
              <div key={index}>
                {" "}
                <SaveCard post={savedPost} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SaveCollections;
