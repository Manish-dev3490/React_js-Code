import React from 'react'
import useComments from '../Hooks/useComments'
import { useSelector } from 'react-redux';

const Comments = () => {
  const commentsList=useSelector((store)=>store?.Videos?.comments)
  useComments();
  return (
    <div className='  px-8 -mt-20 w-9/12'>
      Comments : {commentsList.length}
      {commentsList&&
        commentsList.map((commentData)=>{
          return <div key={commentData.id} className=' rounnded-xl bg-gray-100 py-3 px-3 mt-3 flex gap-10'>
            <img className=' w-8 h-8  rounded-full' src={commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            ?commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl:""} alt=''/>
            <div>
              <p className='font-medium'>{commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
              <p>{commentData?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Comments