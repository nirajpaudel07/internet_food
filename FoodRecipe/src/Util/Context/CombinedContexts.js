import React               from 'react';
import { RecipesProvider } from './RecipesContext';
import { HistoryProvider } from './HistoryContext';

const CombinedContexts = ({ children }) => {
    return (
        <HistoryProvider>
            <RecipesProvider>
                {children}
            </RecipesProvider>
        </HistoryProvider>
    );
};

export default CombinedContexts;