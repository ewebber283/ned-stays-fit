import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDisplay from './pages/RecipeDisplay';
import Faqs from './pages/Faqs';

        
import Nav from './components/Nav';


function App() {
  return (
    <div className = "App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/ned-stays-fit" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDisplay />} />
          <Route path ="/faqs" element={<Faqs />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;