import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipe = useLoaderData();

    const { category,id, description, image, price, title } = recipe;
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="card w-1/4 bg-base-100 shadow-xl">
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
                <div className="card-actions justify-end items-center">
                    <Link to={`edit/${id}`}><FaRegEdit className='w-7 h-7' /></Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RecipeDetails
