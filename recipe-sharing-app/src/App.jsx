import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Routes>
          {/* Home page route */}
          <Route 
            path="/" 
            element={
              <div>
                <h1>Recipe Sharing Application</h1>
                <AddRecipeForm />
                <RecipeList />
              </div>
            } 
          />
          
          {/* Recipe details route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;