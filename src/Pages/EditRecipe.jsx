import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Toast from '../Components/Toast/Toast';

const EditRecipe = () => {
    const recipe = useLoaderData();
    const [showToast, setShowToast] = useState(false);

    const [title, setTitle] = useState(recipe.title);
    const [price, setPrice] = useState(recipe.price);
    const [category, setCategory] = useState(recipe.category);
    const [id, setId] = useState(recipe.id);
    const [description, setDescription] = useState(recipe.description);
    const [image, setImage] = useState(recipe.image);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        const data = { id, title, category, price, description, image };

        await fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
          setShowToast(true)
          console.log(data);
          setTitle("");
          setPrice(0);
          setCategory("");
          setDescription("");
          setImage("");
          setId("")
        });
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Edit Product</h1>

            <div className="my-16">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="text"
                            name="category"
                            placeholder="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input
                            className="btn mt-4 w-full bg-red-500 text-white p-4"
                            type="submit"
                            value="Add product"
                        />
                    </div>
                </form>
            </div>
            {
                showToast &&
                <Toast
                    message="Recipe updated successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
        </div>
    )
}

export default EditRecipe
