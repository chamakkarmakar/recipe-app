import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard/RecipeCard'

const AllRecipes = () => {
    const [recipes,setRecipes]=useState([])

    useEffect(()=>{
        async function load() {
        const recipeRes = await fetch("http://localhost:3000/recipes");
            const recipeData = await recipeRes.json();
            setRecipes(recipeData);
        }
        load()
      }, []);

      const handleDeleteRecipe = (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      };

  return (
    <div>
    <h1 className="text-5xl font-bold text-center">All Produts</h1>
    <div className="my-16 grid md:grid-cols-2 grid-cols-1 gap-y-7">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          handleDeleteRecipe={handleDeleteRecipe}
        />
      ))}
    </div>
  </div>
  )
}

export default AllRecipes
