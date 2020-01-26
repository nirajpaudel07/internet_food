import React from 'react';
import Home from "./Pages/Home";
import RecipesCard from "./Pages/RecipesCard";
import Recipe from "./Pages/Recipe";
import {Switch, Route, Link} from 'react-router-dom';
import './App.css'
import Search from "./Component/Search";

const App = () => {
    return (
            <div className='app'>
                <Link to="/" className='title'>Food Recipe</Link>
                <Route
                    path="*"
                    render={props => <Search {...props}/>}
                />
                <Switch>
                    <Route
                        path='/recipescard'
                        component={RecipesCard}
                        exact
                    />
                    <Route
                        path='/recipe'
                        component={Recipe}
                    />
                    <Route
                        path='/'
                        component={Home}
                        exact
                    />
                </Switch>
        </div>
    );
}


export default App;