import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import data from "../data.json"

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                const response = await import("../data.json");
                setRecipes(response.default);
                setLoading(false);
            } catch (err) {
                setError('Failed to load recipes');
                setLoading(false);
                console.log('Error loading recipes:', err);
            }
        };
        loadRecipes();
    }, []);

    if (loading) {
        return (
            <div>
                <p>Loading recipes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="">
            <h1 className="flex mb-10 text-red-400">Recipe sharing platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-red-400
                     text-black p-10 rounded-lg
                      transform transition-all duration-500 ease-in-out
                     hover:bg-red-300
                     hover:scale-105 hover:shadow-2xl
                      "
                      >
                        <h3>{recipe.title}</h3>
                        <div> 
                            <h4>Summary</h4>
                            <p>{recipe.summary}</p> 
                        </div>
                        <div> 
                            <h4>Image</h4>
                            <img src={recipe.image} alt={recipe.title} /> 
                        </div>
                        <Link to={`/recipe/${recipe.id}`}>
    <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
      View Recipe
    </button>
    </Link>
    <Link
        to="/add"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Add a Recipe
      </Link>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default HomePage;