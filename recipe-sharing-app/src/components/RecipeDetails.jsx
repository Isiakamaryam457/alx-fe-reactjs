import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found!</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleDeleteSuccess = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        ← Back to Recipe List
      </button>
      
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <div style={{ marginTop: '20px' }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} onDelete={handleDeleteSuccess} />
      </div>
    </div>
  );
};

export default RecipeDetails;