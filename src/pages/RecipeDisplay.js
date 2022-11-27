import React from "react";
import { useParams } from 'react-router-dom'
import { RecipeList } from "../helpers/RecipeList";
import '../styles/RecipeDisplay.css'

function RecipeDisplay() {
    //destructure id
    const { id } = useParams();
    const recipe = RecipeList[id];

    return (
        <div className='recipe'>
            <h1>{recipe.name}</h1>
            <p>
               Ingredients: {recipe.ingredients}
            </p>
            <p>
                
                Steps: {recipe.steps}
            </p>
        </div>

    );
}

export default RecipeDisplay;