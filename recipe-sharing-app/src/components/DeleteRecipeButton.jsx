import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    // Optional: Add confirmation dialog
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // Call onDelete callback if provided (useful for navigation)
      if (onDelete) {
        onDelete();
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        backgroundColor: '#dc3545', 
        color: 'white', 
        border: 'none', 
        padding: '8px 16px', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
