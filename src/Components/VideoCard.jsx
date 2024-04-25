import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card>
                <Card.Img onClick={handleShow} height={'180px'} style={{ cursor: 'pointer' }} variant="top" src="https://c.saavncdn.com/402/Varshangalkku-Shesham-Malayalam-2024-20240407163807-500x500.jpg" />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <p>caption</p>
                        <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Caption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/I5NMD5nd-NU?si=n-QTgJvXBfcM9Zlx&autoplay=1" title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </Modal.Body>
            </Modal>

        </>
    )
}

export default VideoCard