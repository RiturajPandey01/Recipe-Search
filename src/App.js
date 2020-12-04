import './App.css';
import React,{useEffect, useState} from "react";
import Recipe from "./recipe";

const App = () => {
    const APP_ID="ae704c6b";
    const APP_KEY="c4bd9ae31d397e33e9ee57b691302782";
    const [recipes,setRecipes]=useState([]);
    const [search,setSearch]=useState("");
    const [query,setQuery]=useState('chicken')
    useEffect( () => {
        getRecipes();
    },[query]);
    const getRecipes=async()=>{
        const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data=await response.json();
        setRecipes(data.hits);
    };
    const updateSearch=e=>{
        setSearch(e.target.value);
    };
    const getSearch=e=>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe =>(
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        source={recipe.recipe.source}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
