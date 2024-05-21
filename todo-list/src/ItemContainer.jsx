import React from 'react'

const ItemContainer = () => {
  return (

     
        <div class="container text-center">
        <div className="row kg-row">
            <div class="col-6">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2"><button type="button" className="btn btn-danger">Delete</button>
          </div>
            </div>
         
    </div>
  )
}

export default ItemContainer
