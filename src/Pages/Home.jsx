import React, { useEffect, useState } from 'react'
import Banner from '../Components/home/Banner'
import Category from '../Components/Categories/Category';
import Recipe from '../Components/Recipe/Recipe';

const Home = () => {
    const [categoris, setCategories] = useState();
    const [recipes, setRescipes] = useState();
    useEffect(()=>{
        async function load() {
            const categoryRes = await fetch("http://localhost:3000/categories");
            const categoryData = await categoryRes.json();
            setCategories(categoryData);


            const recipeRes = await fetch("http://localhost:3000/recipes");
            const recipeData = await recipeRes.json();
            setRescipes(recipeData);
        }
        load();
    },[])
  return (
    <div>
      <Banner />
      <div className=" md:w-3/4 w-full mx-auto">
        <h1 className="text-4xl my-20 text-center font-semibold font-serif">Our Recipe Categories </h1>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-7">
          {categoris?.map((category) => (
            <Category key={category?.id} category={category} />
          ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-semibold font-serif">Our Newest Recipes </h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <Recipe key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>

    </div>
  )
}

export default Home
