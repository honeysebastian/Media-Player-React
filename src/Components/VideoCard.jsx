import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { removeVideoAPI } from '../Services/allAPI';

function VideoCard({displayData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRemoveVideo=async(videoId)=>{
        try{
            const result=await removeVideoAPI(videoId)

        }catch(err){
            console.log(err);

        }

    }
    return (
        <>
            <Card>
                <Card.Img onClick={handleShow} height={'180px'} style={{ cursor: 'pointer' }} variant="top" src={displayData?.imageURL} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <p>{displayData?.caption}</p>
                        <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="400" src={`${displayData?.youtubeURL}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </Modal.Body>
            </Modal>

        </>
    )
}

export default VideoCard