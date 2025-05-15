import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt="meal picture of {meal.strMeal}" />
      <p id="instructions">{meal.strInstructions}</p>
    </li>
  );
 
};



export default Card;
