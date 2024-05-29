import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const RecipeCard = ({ recipe, handleDeleteRecipe }) => {
    const { id, title, category, price, description, image } = recipe;
    
    return (
        <div className="card w-[80%] bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="recipe" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between my-3">
                    <div className="badge badge-outline">{category}</div>
                    <h3 className="text-xl font-semibold">${price}</h3>
                </div>

                <p className='mb-2'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <button className="btn btn-accent text-white">
                        <Link to={`/recipes/${id}`}>View details</Link>
                    </button>
                    <Link to={`edit/${id}`}><FaRegEdit className='w-7 h-7' /></Link>

                    <button onClick={() => handleDeleteRecipe(id)} className="">
                        <AiFillDelete className='w-7 h-7 text-red-600' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
