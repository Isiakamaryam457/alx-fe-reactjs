import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const recipes = useRecipeStore((state) => state.recipes);

  const recommendedRecipes = recommendations
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
        {/* recomendations */}
      <h2>My Recommendations</h2>
      {recommendedRecipes.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
