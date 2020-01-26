import React, {useContext, useEffect, useState} from 'react';
import {RecipesContext} from "../Util/Context/RecipesContext";
import * as api from '../Util/api'
import Card from "../Component/Card";
import Loader from "../Component/Loaders/Loader";

const RecipesCard = () => {
    const {searchQuery} = useContext(RecipesContext)
    const [recipes, setRecipes] = useState(null)
    useEffect(() => {
        fetchRecipes();
    }, [searchQuery])


    const fetchRecipes = async () => {
        const response = await api.getRecipes(`filter.php?i=${searchQuery}`);
        const data = await response.data.meals;
        setRecipes(data);
    }
    const recipesMapShow = ({idMeal, strMeal, strMealThumb}, index) => {
        let recipeCard = null
        if (index < 8) {
            recipeCard =
                <Card
                    image={strMealThumb}
                    title={strMeal}
                    key={index}
                    id={idMeal}
                />
        }
        return recipeCard
    }
    const recipesShow = () => {
        if (recipes) {
            return recipes.map(recipesMapShow)
        } else {
            return <Loader/>
        }
    }


    return (
        <div className='Recipes'>
            {recipesShow()}
        </div>
    );
};

export default RecipesCard;