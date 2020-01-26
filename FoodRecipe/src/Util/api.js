import axios from 'axios'

export const getRecipes = axios.create({
    baseURL:'https://www.themealdb.com/api/json/v1/1',
    method:'GET'
});