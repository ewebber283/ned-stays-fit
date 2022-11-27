import React from 'react'
import { useNavigate } from 'react-router-dom'

function RecipeItem({ name, id }) {
  const navigate = useNavigate()

    return (
      <div className='recipeItem' onClick={() => {
        navigate('/recipe/' + id)
      }}>
        <div/>
        <h1>{name}</h1>
      </div> 
    );
  }
  
  export default RecipeItem;