import React from "react";
import RecipeItem from "../components/RecipeItem";
import { RecipeList } from "../helpers/RecipeList";

import '../styles/Recipes.css'

function Recipes() {
    return (
        <div className='recipes'>
            <h1>Healthy Recipes</h1>
            <div className='recipeList'>
                {RecipeList.map((recipe, index) => {
                    return <RecipeItem id={index} name={recipe.name}/>
                })}
            </div>
        </div>
    );
}

export default Recipes;