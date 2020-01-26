import React, {Component} from 'react';
import './Home.css'

class Home extends Component {
    state = {
        recipes: [],
        currentIndex: 0,
        addRecipeVisible: false,
        editRecipeVisible: false,
        newRecipe: {recipeName: '', ingredients: [],process:''}
    }

    deleteRecipe(index) {
        let recipes = this.state.recipes.slice();
        recipes.splice(index, 1);
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({recipes});
    }

    toggleRecipe = () =>
        this.setState(preState => ({
            addRecipeVisible: !preState.addRecipeVisible
        }))

    closeedittoggleRecipe = () =>
        this.setState(preState => ({
            editRecipeVisible: !preState.editRecipeVisible
        }))

    edittoggleRecipe = (currentIndex) => {
        this.setState(preState => ({
            editRecipeVisible: !preState.editRecipeVisible
        }))
        this.setState({currentIndex:currentIndex})
    }

    UpdateNewRecipe(recipeName, ingredients,process) {
        this.setState({newRecipe: {recipeName: recipeName, ingredients: ingredients, process:process}})
    }

    saveNewRecipe() {
        let recipes = this.state.recipes.slice()
        recipes.push({recipeName: this.state.newRecipe.recipeName, ingredients: this.state.newRecipe.ingredients, process:this.state.newRecipe.process})
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({recipes});
        this.setState({newRecipe: {recipeName: '', ingredients: [],process:''}})
        this.toggleRecipe()
    }

    updateRecipeName(recipeName, currentIndex) {
        let recipes = this.state.recipes.slice()
        recipes[currentIndex] = {recipeName: recipeName, ingredients: recipes[currentIndex].ingredients,process: recipes[currentIndex].process}
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({recipes})
    }

    updateIngredients(ingredients, currentIndex) {
        let recipes = this.state.recipes.slice()
        recipes[currentIndex] = {recipeName: recipes[currentIndex].recipeName, ingredients: ingredients,process: recipes[currentIndex].process}
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({recipes})
    }

    updateSteps(process, currentIndex){
        let recipes = this.state.recipes.slice()
        recipes[currentIndex] = {recipeName: recipes[currentIndex].recipeName,ingredients: recipes[currentIndex].ingredients,process:process}
        localStorage.setItem('recipes', JSON.stringify((recipes)))
        this.setState({recipes})
    }

    componentDidMount() {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || []
        this.setState({recipes})
    }

    render() {
        const {recipes, currentIndex} = this.state;
        return (
            <div>
                <div className='add_recipe'>
                    <div>
                        <button className='add_button' onClick={this.toggleRecipe}>Add recipe</button>
                    </div>
                    {/*ADD*/}
                    <div className='form_popup'
                         style={
                             {
                                 display: this.state.addRecipeVisible ? "flex" : "none"
                             }
                         }>
                        <form action="" className='form_container'>
                            <h1>Add new Recipe</h1>
                            <label>Recipe Name</label>
                            <input type="text"
                                   required
                                   placeholder='Enter Recipe Name'
                                   value={this.state.newRecipe.recipeName}
                                   onChange={(event) => this.UpdateNewRecipe(event.target.value, this.state.newRecipe.ingredients,this.state.newRecipe.process)}
                            />

                            <label>Ingredients</label>
                            <input type="textarea"
                                   required
                                   placeholder='ingredients(Seperated By Commas)'
                                   value={this.state.newRecipe.ingredients}
                                   onChange={(event) => this.UpdateNewRecipe(this.state.newRecipe.recipeName, event.target.value.split(","),this.state.newRecipe.process)}
                            />
                            <label>Process</label>
                            <textarea rows='5' cols='87'
                                   placeholder='Process of the recipe'
                                   value={this.state.newRecipe.process}
                                   onChange={(event)=> this.UpdateNewRecipe(this.state.newRecipe.recipeName,this.state.newRecipe.ingredients,event.target.value)}
                            />

                            <button className='submit_btn'
                                    onClick={(event) => this.saveNewRecipe()}>Add
                            </button>
                            <button type='button'
                                    className='cancel_btn'
                                    onClick={this.toggleRecipe}>Close
                            </button>
                        </form>
                    </div>
                </div>
                {/*FINISH ADD*/}

                {/*EDIT*/}
                <div className='edit_recipe'>
                    <div className='form_popup'
                         style={
                             {
                                 display: this.state.editRecipeVisible ? "flex" : "none"
                             }
                         }>
                        {recipes.length > 0 && (
                            <form action="" className='form_container'>
                                <h1>Edit Recipe</h1>
                                <label>Recipe Name</label>
                                <input type="text"
                                       placeholder='Enter Recipe Name'
                                       value={recipes[currentIndex].recipeName}
                                       onChange={(event) => this.updateRecipeName(event.target.value, currentIndex)}
                                       required/>

                                <label>Ingredients</label>
                                <input type="textarea"
                                       placeholder='ingredients(Seperated By Commas)'
                                       value={recipes[currentIndex].ingredients}
                                       onChange={(event) => this.updateIngredients(event.target.value.split(","), currentIndex)}
                                       required/>

                                <label >Process</label><br/>
                                <textarea rows='5' cols='87'
                                        placeholder='Process of the recipe'
                                       value={recipes[currentIndex].process}
                                       onChange={(event)=>this.updateSteps(event.target.value,currentIndex)}
                                />


                                <button type='button'
                                        className='cancel_btn'
                                        onClick={this.closeedittoggleRecipe}>Close
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                {/*FINISH EDIT*/}
                <div className='recipe_view'>
                    {recipes.map((recipe, index) =>
                        <div className='panel' key={index} index={index}>
                            <div className='collapse' tabIndex='1'>
                                <a>
                                    {recipe.recipeName}
                                    <ol>
                                        {recipe.ingredients.map((item) =>
                                            <li key={item}>
                                                {item}
                                            </li>
                                        )}
                                    </ol>
                                    <br/>
                                    <p>{recipe.process}</p>
                                    <div className='buttons'>
                                        <button onClick={(event) => this.deleteRecipe(index)}>Delete</button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button onClick={(event)=> this.edittoggleRecipe(index)}>Edit</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Home;