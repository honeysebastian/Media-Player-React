import React from 'react'

function Category() {
  return (
    <>
        <div className='d-flex justify-content-between'>
            <h3>Add Category</h3>
            <button style={{ color: 'white', width: '60px', height: '60px',fontSize:'1.2rem' }} className='bg-primary rounded-circle'><i className="fa-solid fa-plus"></i></button>
        </div>
    </>
  )
}

export default Category