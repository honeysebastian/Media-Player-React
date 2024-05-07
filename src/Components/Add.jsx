import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add({setAddVideoresponse}) {
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
    const handleUpload = async () => {
        console.log("Inside handle upload function");
        const { caption, imageURL, youtubeURL } = videoDetails
        if (caption && imageURL && youtubeURL) {
            console.log("Api Call");
            try {
                const result = await addVideoAPI(videoDetails)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    console.log(result.data);
                    setAddVideoresponse(result.data)
                    toast.success(`${result.data.caption} added to your collections`)
                    setVideoDetails({ caption: '', imageURL: '', youtubeURL: ''})
                    handleClose()
                }else{
                    toast.error(result.response.data)
                }

            } catch (err) {
                console.log(err);
            }
        } else {
            toast.info("Please fill the form completely!")
        }
    }


    
    return (
        <>
            <div className="d-flex align-items-center">
                <h5>Upload New Video</h5>
                <button onClick={handleShow} style={{ color: 'white', width: '60px', height: '60px',fontSize:'1.2rem' }} className='bg-primary rounded-circle ms-5'><i className="fa-solid fa-plus"></i></button>
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
            <ToastContainer position="top-center" autoClose={5000} theme="dark" />

        </>
    )
}

export default Add
