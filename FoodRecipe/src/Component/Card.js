import React,{useContext} from 'react';
import './card.css'
import {HistoryContext} from "../Util/Context/HistoryContext";

const Card = props => {
    const {routerHistory} = useContext(HistoryContext);

    const goToRecipePage = e =>{
        const recipeId = e.target.parentElement.id;
        routerHistory.push(`/recipe#${recipeId}`)
    }
    return (
        <div className='card' id={props.id}>
            <img
                className='card_image'
                src={props.image}
                alt={props.title}
            />
                <h3 className='card_title'>{props.title}</h3>
                <button className='card_button' onClick={goToRecipePage}>Open</button>
        </div>
    );
};

export default Card;