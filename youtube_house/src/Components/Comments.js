import React from 'react'
import useComments from '../Hooks/useComments'
import { useSelector } from 'react-redux';

const Comments = () => {
  const commentsList=useSelector((store)=>store?.Videos?.comments)
  console.log(commentsList);
  useComments();
  return (
    <div className=' px-8 -mt-20 w-5/12'>
      Comments : {commentsList.length}
      {
        commentsList.map((commentData)=>{
          return <div key={commentData.id} className=' mt-3 flex  gap-20'>
            <img className=' w-8 h-8  rounded-full' src={commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            ?commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl:""} alt=''/>
            <div>
              <p>{commentData?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Comments