import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard/RecipeCard'
import Toast from '../Components/Toast/Toast';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        async function load() {
            const recipeRes = await fetch("http://localhost:3000/recipes");
            const recipeData = await recipeRes.json();
            setRecipes(recipeData);
        }
        load()
    }, []);

    const handleDeleteRecipe = async (id) => {
        await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShowToast(true);
                setRecipes(recipes.filter((recipe) => recipe.id !== id));
            });
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
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
            {
                showToast &&
                <Toast
                    message="Recipe deleted successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
        </div>
    )
}

export default AllRecipes
