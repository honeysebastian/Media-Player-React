import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="bg-secondary">
                <Container>
                    <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder p-2'>
                        <Navbar.Brand style={{color:'white',fontSize:'32px'}}>
                        <i className="fa-solid fa-music me-3"></i>
                            Media Player
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header