import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI,removeHistoryAPI } from '../Services/allAPI'

function History() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deleteHistory,setDeleteHistory]=useState('')
  console.log(videoHistory );

  useEffect(()=>{
    getAllHistory()
  },[deleteHistory])

  const getAllHistory = async () => {
    try {
      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const handleRemoveHistory=async(videoId)=>{
    try{
      const result=await removeHistoryAPI(videoId)
      setDeleteHistory(result.data)

    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video link</th>
            <th>Time Stamp</th>
            <th><div className="fa-solid fa-ellipsis-vertical"></div></th>
          </tr>
        </thead>
        <tbody>
          { videoHistory.length>0?videoHistory?.map((item,index)=>(
             <tr key={item?.id}>
             <td>{index+1}</td>
             <td>{item?.caption}</td>
             <td><a href={item?.youtubeURL} target='_blank'>{item?.youtubeURL}</a></td>
             <td>{item?.timeStamp}</td>
             <td><button onClick={()=>handleRemoveHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
           </tr>
          ))          
          :
          <div className='text-danger fw-bolder'>Your watch history is empty!!</div>

          }
        </tbody>
      </table>
    </div>
  )
}

export default History