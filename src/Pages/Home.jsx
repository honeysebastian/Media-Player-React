import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link, useSearchParams } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  const [addVideoResponse,setAddVideoresponse]=useState('')
  return (
    <>
    <div className="container my-5 d-flex justify-content-between">
      <Add setAddVideoresponse={setAddVideoresponse} />
      <Link to={'/history'}>View History</Link>
    </div>
    <div className="container-fluid my-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View addVideoResponse={addVideoResponse} />
        
      </div>
      <div className="col-lg-6">
        <Category/>
      </div>
    </div>



    </>
  )
}

export default Home