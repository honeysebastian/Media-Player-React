import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category({ setRemoveCategoryVideoResponse,deleteVideoCategoryResponse }) {
  const [categoryName, setCategoryName] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [show, setShow] = useState(false);

  console.log(allCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategory()

  }, [deleteVideoCategoryResponse])

  const handleAddCategory = async () => {
    if (categoryName) {
      // api call
      try {
        await addCategoryAPI({ categoryName, allVideos: [] })
        setCategoryName('')
        handleClose()
        getAllCategory()
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.info("Please fill the form completely!")
    }
  }

  const getAllCategory = async () => {
    try {
      const result = await getCategoryAPI()
      setAllCategory(result.data)

    } catch (err) {
      console.log(err);
    }

  }

  const handleRemoveCategory = async (categoryId) => {
    try {
      await removeCategoryAPI(categoryId)
      getAllCategory()

    } catch (err) {
      console.log(err);
    }

  }

  const dragOverCategory = (e) => {
    console.log("dragged over category");
    e.preventDefault()
  }

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`dropped video ${videoId} in category : ${categoryId}`);

    try {
      const { data } = await getAVideoAPI(videoId)
      console.log(data);
      let selectedCategory = allCategory?.find(item => item.id == categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId, selectedCategory)
      const result = await removeVideoAPI(videoId)
      setRemoveCategoryVideoResponse(result)
      getAllCategory()
    } catch (err) {
      console.log(err);
    }

  }

  const videoDragStarted=(e,videoDetails,categoryId)=>{
    console.log(videoDetails,categoryId);
    console.log("video dragged from category");
    let dataShare={categoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))


  }



  return (
    <>
      <div className='d-flex justify-content-around'>
        <h3>All Categories</h3>
        <button onClick={handleShow} style={{ color: 'white', width: '60px', height: '60px', fontSize: '1.2rem' }} className='bg-primary rounded-circle'><i className="fa-solid fa-plus"></i></button>
      </div>
      <div className="container-fluid mt-3">
        {
          allCategory.length > 0 ? allCategory?.map(item => (
            <div droppable={true} onDragOver={e => dragOverCategory(e)} onDrop={e => videoDropped(e, item?.id)} key={item?.id} className="border rounded p-3 mb-2">
              <div className="d-flex justify-content-between">
                <h5>{item?.categoryName}</h5>
                <button onClick={() => handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

              </div>
              <div className="row mt-2">
                {
                  item.allVideos?.length > 0 &&
                  item.allVideos?.map(video => (
                    <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className="col-lg-6 mb-3">
                      <VideoCard displayData={video} insideCategory={true} />

                    </div>
                  ))
                }
              </div>

            </div>
          ))
            :
            <div className="text-danger fw-bolder">
              No categories are added yet!!!

            </div>


        }
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
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  )
}

export default Category