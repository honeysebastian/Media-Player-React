import React from 'react'
import { Link } from 'react-router-dom'
import beats from '../assets/giphy.gif'

function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h3>Welcome to<span className='text-primary'> Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player app will allow user to add or remove heir uploaded videos from youtube and also allow them to arrangeit it in different categories by drag and drop. User can also havethe provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!! </p>
            <Link to={'/home'}><button style={{color:'white'}} className='btn bg-primary rounded p-2 mt-3'>Get Started</button></Link>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' style={{background:'none'}} src={beats} alt=""  />
          </div>
        </div>

      </div>

    </>
  )
}

export default Landing