import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({ recipe }) => {
  return (
    <div className="card shadow-xl h-[350px]">
      <figure>
        <img src={recipe.image} alt="food" className="max-w-full" />
      </figure>
      <div className="px-4">
        <h2 className="text-lg font-semibold">{recipe?.title}</h2>
        <div className='flex justify-between items-center my-3'>
          <div className="badge badge-outline">{recipe?.category}</div>
          <p className="card-title ">$ {recipe?.price}</p>
        </div>
        <p>
          {recipe?.description?.length > 50
            ? recipe?.description?.slice(0, 50)
            : recipe?.description}...
        </p>
        <div className="card-actions justify-end my-2">
          <button className="btn btn-accent text-white w-full">
            <Link to={`/recipes/${recipe?.id}`}>View details</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
