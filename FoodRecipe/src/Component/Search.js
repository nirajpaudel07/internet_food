import React, {useState,useContext} from 'react';
import {RecipesContext} from "../Util/Context/RecipesContext";
import {HistoryContext} from "../Util/Context/HistoryContext";

const Search = ({ history }) => {
    const [query, setQuery] = useState('')
    const {setSearchQuery} = useContext(RecipesContext)
    const {setRouterHistory} = useContext(HistoryContext)
    setRouterHistory(history)

    const getRecipes = e => {
        e.preventDefault()
        setSearchQuery(query)
        setQuery('')
        history.push('/recipescard')
    };
    return (
        <div>
        <div className="search_box">
            <form onSubmit={getRecipes}>
                <input type='text'
                       className='search_text'
                       value={query}
                       onChange={e => setQuery(e.target.value)}
                       placeholder={'Search'}
                       name='query'
                />

                <button className='search_btn'>Search</button>
            </form>
        </div>
        </div>
    );
};

export default Search;