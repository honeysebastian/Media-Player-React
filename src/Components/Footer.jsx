import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '300px' }} className='container mt-5 w-100'>
            <div className="d-flex justify-content-between">
                <div style={{ width: '400px' }} className="intro">
                    <h5><i className="fa-solid fa-music me-3"></i>Media player</h5>
                    <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                    <p>Code licensed MIT, docs CC BY 3.0.</p>
                    <p>Currently v5.3.3.</p>
                </div>
                <div className="links d-flex flex-column">
                    <h5>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                    <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>Watch History Page</Link>


                </div>
                <div className="guides d-flex flex-column">
                    <h5>Guides</h5>
                    <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</a>
                    <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
                    <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Router</a>

                </div>
                <div className="contact  d-flex flex-column">
                    <h5>Contact Us</h5>
                    <div className="d-flex">
                        <input type="text" className='form-control me-3' placeholder='Enter Your Email Here' />
                        <button style={{ color: 'white', width: '60px', height: '60px' }} className='bg-primary rounded fw-bolder fs-5 '><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'> <i class="fa-solid fa-envelope"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-twitter"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright &copy; Media Player 2024. Built with React</p>
        </div>
    )
}

export default Footer