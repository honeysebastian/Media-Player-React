import React from 'react'
import { Link } from 'react-router-dom'

function History() {
  return (
    <div className='container my-5'>
    <div className="d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'}>Back to Home</Link>
    </div>
    <table className="table my-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video link</th>
          <th>Time Stamp</th>
          <th><div className="fa-solid fa-ellipsis-vertical"></div></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Vashangalku Shesham</td>
          <td><a href="https://www.youtube.com/embed/I5NMD5nd-NU?si=n-QTgJvXBfcM9Zlx" target='_blank'>https://www.youtube.com/embed/I5NMD5nd-NU?si=n-QTgJvXBfcM9Zlx</a></td>
          <td>25/04/2024 10:39AM</td>
          <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
      </tbody>

    </table>
    </div>
  )
}

export default History