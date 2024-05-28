import React  from 'react'

const Category = ({ category }) => {


  return (
      <div className="card w-3/4 md:bg-base-100 shadow-xl image-full">
        <figure><img src={category?.img} alt={category?.title} /></figure>
        <div className="card-body">
          <h2 className="py-10 text-xl font-semibold text-center">{category?.title}</h2>
        </div>
      </div>

  )
}

export default Category
