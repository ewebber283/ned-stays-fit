import React from 'react'
import { useNavigate } from 'react-router-dom'

function RecipeItem({ image, name, id }) {
  const navigate = useNavigate()

    return (
      <div className='recipeItem' onClick={() => {
        navigate('/recipe/' + id)
      }}>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
        <h1>{name}</h1>
      </div> 
    );
  }
  
  export default RecipeItem;