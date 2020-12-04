import React from "react";
import style from "./recipe.models.css"

const Recipe=({title,calories,image,ingredients,source})=>{
    return(
        <div className="style.recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;
