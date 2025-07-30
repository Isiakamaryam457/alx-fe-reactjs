import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import { useEffect, useState } from 'react';

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const getFilteredRecipes = useRecipeStore((state) => state.getFilteredRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const results = getFilteredRecipes();
    setFilteredRecipes(results);
  }, [searchTerm, getFilteredRecipes]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Search Recipes</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />

      <h2>Filtered Results</h2>

      {filteredRecipes.length === 0 ? (
        <p>No matches found for "{searchTerm}"</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '5px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <Link
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 16px',
                textDecoration: 'none',
                borderRadius: '4px',
                marginTop: '10px',
              }}
            >
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
