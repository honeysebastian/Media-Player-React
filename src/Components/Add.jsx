import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {
    const [invalidYoutubeURL, setInvalidYoutubeURL] = useState(false)
    const [videoDetails, setVideoDetails] = useState({
        caption: '', imageURL: '', youtubeURL: ''
    })
    const [show, setShow] = useState(false);

    console.log(videoDetails);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link) => {
        if (link.includes('v=')) {
            let videoId = link.split('v=')[1].slice(0, 11)
            console.log(videoId);
            setVideoDetails({ ...videoDetails, youtubeURL: `https://www.youtube.com/embed/${videoId}` })
            setInvalidYoutubeURL(false)
        } else {
            setVideoDetails({ ...videoDetails, youtubeURL: '' })
            setInvalidYoutubeURL(true)
        }
    }
    const handleUpload = () => {
        console.log("Inside handle upload function");
        const { caption, imageURL, youtubeURL } = videoDetails
        if (caption && imageURL && youtubeURL){
            console.log("Api Call");

        }else{
            alert("Please fill the form completely!")
        }

    }


    return (
        <>
            <div className="d-flex align-items-center">
                <h5>Upload New Video</h5>
                <button onClick={handleShow} className='btn btn-primary rounded-circle ms-3 fw-bolder'><i className="fa-solid fa-plus"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details.</p>
                    <div className='border rounded p-3 '>
                        <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingImageUrl" label="Image URL" className="mb-3">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageURL: e.target.value })} type="text" placeholder="Image URL" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingYoutubeUrl" label="YouTube URL">
                            <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
                        </FloatingLabel>
                        {
                            invalidYoutubeURL && <div className="text-danger fw-bolder my-3">Invalid youtube Link</div>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add
