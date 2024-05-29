import React from 'react'

const AddRecipe = () => {
  const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const id = form.id.value;
        const recipe = form.recipe.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
    
        const data = { id, title: recipe, category, price, description, image_url };
    
        await fetch("http://localhost:3000/recipes", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            setShowToast(true)
            console.log(data);
            form.reset();
          });
     
      };

  return (
    <div className='my-20'>
    <h1 className="text-5xl font-bold text-center">Add Recipe</h1>

    <div className="w-full mx-auto my-16">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="text"
            name="recipe"
            placeholder="Recipe Name"
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="text"
            name="category"
            placeholder="Category"
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="number"
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="mt-2">
          <textarea style={{resize: "none"}}
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="text"
            name="image_url"
            placeholder="Image URL"
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-full"
            type="text"
            name="id"
            placeholder="ID"
          />
        </div>
        <div className="mt-2 flex justify-center items-center">
          <input
            className="btn mt-4 w-full bg-[#8EA7E9] text-white p-4"
            type="submit"
            value="Add Recipe"
          />
        </div>
      </form>
    </div>
    {
                showToast &&
                <Toast
                    message="Recipe added successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
  </div>
  )
}

export default AddRecipe
