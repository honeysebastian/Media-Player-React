import React from 'react'
import { Link } from 'react-router-dom'
import beats from '../assets/giphy.gif'
import Card from 'react-bootstrap/Card';
import feature1 from '../assets/settings.gif'
import feature2 from '../assets/category.gif'
import feature3 from '../assets/history.gif'

function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h3>Welcome to<span className='text-primary'> Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player app will allow user to add or remove heir uploaded videos from youtube and also allow them to arrangeit it in different categories by drag and drop. User can also havethe provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!! </p>
            <Link to={'/home'}><button style={{ color: 'white' }} className='btn bg-primary rounded p-2 mt-3'>Get Started</button></Link>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' style={{ borderRadius: '50%' }} src={beats} alt="" />
          </div>
        </div>
        <div className="features my-5">
          <h3 className='text-center mb-5'>Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card style={{ width: '22rem',height:'400px', marginBottom:'3rem' }}>
                <Card.Img variant="top" src={feature1} className='img-fluid' style={{height:'230px' }} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Users can upload, view and remove the videos.
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px',marginBottom:'3rem' }}>
                <Card.Img variant="top" src={feature2} className='img-fluid' style={{height:'230px' }}/>
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                    Users can categorise the videos by drag and drop feature.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px',marginBottom:'3rem' }}>
                <Card.Img variant="top" src={feature3}className='img-fluid' style={{height:'230px' }} />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    Users can manage the watch history of all videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="embbeded-youtube-video row border rounded border-secondary my-5" style={{padding:'3rem'}}>
          <div className="col-lg-6">
            <h4 className='text-primary mb-5 mt-5 pt-4'>Simple, Fast and Powerful</h4>
            <div className="left-youtube">
              <p className='mb-2'><span style={{fontSize:'25px'}}>Play Everything:  </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='mb-2'><span style={{fontSize:'25px'}}>Categorise Videos:  </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='mb-2'><span style={{fontSize:'25px'}}>Manage History:  </span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             
              
            </div>
          </div>
          <div className="col-lg-6">
          <iframe width="100%" height="450" src="https://www.youtube.com/embed/atRzwlp0iDk?si=7m9K35b3vSZYRVxr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing