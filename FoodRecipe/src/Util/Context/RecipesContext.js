import React,{useState} from 'react';

export const RecipesContext = React.createContext();

export const RecipesProvider = props => {
    const [searchQuery, setSearchQuery] = useState(null);

    return(
        <RecipesContext.Provider
        value={{
            searchQuery,
            setSearchQuery
        }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
};

