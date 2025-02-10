import React from 'react'
import { useGetUserSavePost } from '../../react-query/user'
import { Languages } from 'lucide-react'
import Divider from '../../components/Divider'
import SingleCard from '../../components/Cards/SingleCard'

const SaveCollections = () => {
  const {data:savedPost , isLoading} = useGetUserSavePost()

  return (
    <div className="flex flex-col h-full">
    <div className="flex items-center justify-between">
    <div className="text-xl">Saved Collections</div>
      {/* <button className="btn btn-primary " >
       
        <Languages /> Translate
      </button> */}
    </div>
    <Divider/>

    {/* cards  */}
    <div className="m-3 flex flex-col gap-4">
      {isLoading
        ? "Loading"
        : savedPost &&
          savedPost?.map((savedPost, index) => {
            return (
              <div key={index}>
                {" "}
                <SingleCard post={savedPost}/>
              </div>
            );
          })}
    </div>
  </div>
  )
}

export default SaveCollections