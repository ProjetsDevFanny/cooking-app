import React from "react";
import Card from "./Card";

const Cardcontainer = ({meals}) => {
    return (
        <ul className="cards-container">
            {meals.map((meal) => (
                <Card meal={meal} key={meal.idMeal} />
            ))}
        </ul>
    )
}
export default Cardcontainer;