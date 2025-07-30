import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    isFavorite(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{
            border: '1px solid #ccc',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '5px'
          }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  textDecoration: 'none'
                }}
              >
                View Details
              </Link>

              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  backgroundColor: isFavorite(recipe.id) ? '#dc3545' : '#28a745',
                  color: 'white',
                  border: 'none'
                }}
              >
                {isFavorite(recipe.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
