import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import data from "../data.json"


const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchRecipes = async () => {
        try {
        setLoading(true);

        const foundRecipe = data.find((item) => item.id.toString() === id);
        if (!foundRecipe) {
          throw new Error("Recipe not found!");
        }
        setRecipes(foundRecipe);
        setError(null);
        } catch (error) {
            setError(error.message);
            setRecipes(null);

        } finally {
            setLoading(false);
        }
    };
    fetchRecipes();
  }, [id])

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;


  return (
    
    <div className="flex">
        <button 
        onClick={() => navigate('/')}
        className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center gap-2"
      >
        <span>←</span> Back to Recipes
      </button>
       <img
        src={`/${recipes.image}`}
        alt={recipes.title}
        className="w-full h-64 object-cover
        transform transition-all duration-500 ease-in-out
          hover:bg-red-300
        hover:scale-105 hover:shadow-2xl
        "
      />

       <h2 className="flex justify-center">{recipes.title}</h2>
       <div>
        <h3 className="font-bold text-red-500 mb-3 mt-4">Ingredients</h3>
       <ul>
        {recipes.ingredients.map((ingredient, index) =>(
            
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>{ingredient}</span>
          </li>
          
       ))}
       </ul>
       </div>
      <div>
       <ol className="space-y-3">
        <h3 className="font-bold text-red-500 mb-3 mt-4">Instructions</h3>
        {recipes.instructions.map((instruction, index) => (
            <li key={index} className="flex items-start">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 mt-0.5 flex-shrink-0">
                {index + 1} </span>
                <span>{instruction}</span>
                </li>
        ))}
       </ol>
       </div>
       
        </div>
  );
}


export default RecipeDetail;