import React,{useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div className='d-flex justify-content-around'>
            <h3>All Categories</h3>
            <button onClick={handleShow} style={{ color: 'white', width: '60px', height: '60px',fontSize:'1.2rem' }} className='bg-primary rounded-circle'><i className="fa-solid fa-plus"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category